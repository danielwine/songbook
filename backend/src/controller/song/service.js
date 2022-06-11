const Song = require('../../model/song');
const baseService = require('../base/service');
const concreteService = baseService(Song)

const populateAll = cursor => cursor
    .populate({ path: 'artist', select: 'name', strictPopulate: false })
    .populate({ path: 'album', select: 'name', strictPopulate: false })
    .populate({ path: 'lyricist', select: 'name', strictPopulate: false })
    .populate({ path: 'composer', select: 'name', strictPopulate: false })
    .populate({ path: 'x_genre', select: 'name', strictPopulate: false })

concreteService.findOne = (id) =>
    populateAll(Song.find({ _id: id }))

module.exports = concreteService;
