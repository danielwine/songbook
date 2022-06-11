const Album = require('../../model/album');
const baseService = require('../base/service');
const concreteService = baseService(Album)

const populateAll = cursor => cursor
    .populate({ path: 'songs', select: 'title', strictPopulate: false })

concreteService.findOne = (id) =>
    populateAll(Album.find({ _id: id }))

module.exports = concreteService;
