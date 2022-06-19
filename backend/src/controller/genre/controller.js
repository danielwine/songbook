const genreService = require('../genre/service');
const controller = require('../base/controller');

const concreteController = controller(genreService)

concreteController.findAll = (req, res, next) => {
    return genreService.findAll()
        .then(list => res.json(list))
}

module.exports = concreteController;
