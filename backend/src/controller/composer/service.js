const Composer = require('../../model/composer');
const baseService = require('../base/service');
const concreteService = baseService(Composer)

const populateAll = cursor => cursor
    .populate({ path: 'songs', select: 'title', strictPopulate: false })

concreteService.findOne = (id) =>
    populateAll(Composer.find({ _id: id }))

concreteService.findAll = () =>
    populateAll(Composer.find({}))

module.exports = concreteService;
