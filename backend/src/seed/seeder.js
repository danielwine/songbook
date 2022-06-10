const fsp = require('fs').promises;
const { join } = require('path');
const mongoose = require('mongoose');

const models = {
    song: require('../model/song'),
    artist: require('../model/artist'),
    album: require('../model/album'),
    lyricist: require('../model/lyricist'),
    composer: require('../model/composer'),
    x_genre: require('../model/genre')
};

const areMultipleItemsAllowed = key =>
    ['lyricist', 'composer', 'x_genre'].includes(key)

const upsertItemsWithSongIds = async (model, items, id) => {
    const refIds = []
    for (const item of items) {
        const doc = await model.findOneAndUpdate(
            { name: item }, { $push: { songs: id } },
            { upsert: true, returnOriginal: false })
        if (doc) refIds.push(doc._id)
    }
    return refIds
}

const insertPropertiesToCollections = async (song) => {
    const songDbItem = {}
    let id = mongoose.Types.ObjectId();
    for (const key of Object.keys(song)) {
        songDbItem['_id'] = id;
        if (Object.keys(models).includes(key)) {
            items = areMultipleItemsAllowed(key)
                ? song[key].split(', ')
                : [song[key]]
            const refIds = await upsertItemsWithSongIds(
                models[key], items, id)
            if (refIds.length === 1) songDbItem[key] = refIds[0]
            if (refIds.length > 1) songDbItem[key] = refIds
        } else {
            songDbItem[key] = key == 'year'
                ? parseInt(song[key]) : song[key]
        }
    }
    await models['song'].create(songDbItem)
}

(async () => {
    const songsJson = await fsp.readFile(
        join(__dirname, 'songs.json'),
        'utf8',
    );
    const songs = JSON.parse(songsJson);
    for (const song of songs) {
        await insertPropertiesToCollections(song);
    }
})();
