const Genre = require('../../model/genre');
const baseService = require('../base/service');
const concreteService = baseService(Genre)

const populateAll = cursor => cursor
    .populate({ path: 'songs', select: 'title', strictPopulate: false })

concreteService.findOne = (id) =>
    populateAll(Genre.find({ _id: id }))

module.exports = concreteService;
