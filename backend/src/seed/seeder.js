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

const processingOrder = [
    'title', 'year', 'time', 'lyrics',
    'artist', 'lyricist', 'composer', 'x_genre', 'album'
]

const areMultipleItemsAllowed = key =>
    ['lyricist', 'composer', 'x_genre'].includes(key)

const upsertItemsWithSongIds = async (model, items, id, extra) => {
    const refIds = []
    for (const item of items) {
        const update = { $push: { songs: id }, ...extra }
        const doc = await model.findOneAndUpdate(
            { name: item }, update,
            { upsert: true, returnOriginal: false })
        if (doc) refIds.push(doc._id)
    }
    return refIds
}

const insertPropertiesToCollections = async (song) => {
    const songDbItem = {}
    songDbItem['_id'] = mongoose.Types.ObjectId();
    for (const key of processingOrder) {
        if (Object.keys(song).includes(key)) {
            if (Object.keys(models).includes(key)) {
                items = areMultipleItemsAllowed(key)
                    ? song[key].split(', ')
                    : [song[key]]
                extra = (key == 'album')
                    ? {
                        artist: songDbItem['artist'],
                        year: songDbItem['year']
                    } : {}
                const refIds = await upsertItemsWithSongIds(
                    models[key], items, songDbItem['_id'], extra)
                if (refIds.length === 1) songDbItem[key] = refIds[0]
                if (refIds.length > 1) songDbItem[key] = refIds
            } else {
                songDbItem[key] = key == 'year'
                    ? parseInt(song[key]) : song[key]
            }
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
