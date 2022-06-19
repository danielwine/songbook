const composerService = require('../composer/service');
const controller = require('../base/controller');

const concreteController = controller(composerService)

concreteController.findAll = (req, res, next) => {
    return composerService.findAll()
        .then(list => res.json(list))
}

module.exports = concreteController;
