const models = {
    song: require('../../model/song'),
    artist: require('../../model/artist'),
    album: require('../../model/album'),
    lyricist: require('../../model/lyricist'),
    composer: require('../../model/composer'),
    x_genre: require('../../model/genre')
};

module.exports = (model) => {
    return {
        create: itemData => {
            const item = new model(itemData);
            return item.save();
        },
        findAll: () => model.find({}, { lyrics: 0 }),
        findOne: (id) => model.find({ _id: id }),
        findItemIdByName: (itemName) => {
            const result = model.find({ name: itemName });
            if (!result) return null;
            else return result._id
        },
        updateOne: (id, updateData) =>
            model.findByIdAndUpdate(id, updateData, { new: true }),
        deleteOne: id => model.findByIdAndRemove(id)
    }
}
