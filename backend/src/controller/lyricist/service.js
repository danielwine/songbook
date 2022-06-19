const Lyricist = require('../../model/lyricist');
const baseService = require('../base/service');
const concreteService = baseService(Lyricist)

const populateAll = cursor => cursor
    .populate({ path: 'songs', select: 'title', strictPopulate: false })

concreteService.findOne = (id) =>
    populateAll(Lyricist.find({ _id: id }))

concreteService.findAll = () =>
    populateAll(Lyricist.find({}))

module.exports = concreteService;
