const Artist = require('../../model/artist');
const baseService = require('../base/service');
const concreteService = baseService(Artist)

const populateAll = cursor => cursor
    .populate({ path: 'songs', select: 'title', strictPopulate: false })

concreteService.findOne = (id) =>
    populateAll(Artist.find({ _id: id }))

module.exports = concreteService;
