const songService = require('../song/service');
const controller = require('../base/controller');

const concreteController = controller(songService)

concreteController.findAll = (req, res, next) => {
    return songService.findAll()
        .then(list => res.json(list))
}

module.exports = concreteController;
