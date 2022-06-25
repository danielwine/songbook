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
        create: async body => {
            const Entity = new model(body)
            const validationErrors = Entity.validateSync();
            if (!validationErrors) {
                const saved = await Entity.save();
                return model.findById(saved._id);
            }
            throw new Error(validationErrors);
        },
        findOne: (id) => model.find({ _id: id }),
        findAllIds: () =>
            model.find({}, { lyrics: 0 }),
        findItemIdByName: (itemName) => {
            const result = model.find({ name: itemName });
            if (!result) return null;
            else return result._id
        },
        updateOne: async (id, body) => {
            const Entity = new model(body);
            const validationErrors = Entity.validateSync();
            if (!validationErrors)
                return model.findByIdAndUpdate(id, body, { new: true });
            throw new Error(validationErrors);
        },
        deleteOne: id => model.findByIdAndRemove(id)
    }
}
