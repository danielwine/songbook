const lyricistService = require('../lyricist/service');
const controller = require('../base/controller');

const concreteController = controller(lyricistService)

concreteController.findAll = (req, res, next) => {
    return lyricistService.findAll()
        .then(list => res.json(list))
}

module.exports = concreteController;
