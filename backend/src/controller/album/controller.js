const albumService = require('../album/service');
const controller = require('../base/controller');

const concreteController = controller(albumService)

concreteController.findAll = (req, res, next) => {
    return albumService.findAll()
        .then(list => res.json(list))
}

module.exports = concreteController;
