const artistService = require('../artist/service');
const controller = require('../base/controller');

const concreteController = controller(artistService)

concreteController.findAll = (req, res, next) => {
    return artistService.findAll()
        .then(list => res.json(list))
}

module.exports = concreteController;
