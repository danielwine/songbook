const express = require('express')
const baseService = require('../base/service');
const createError = require('http-errors');

const msgInvalidId = 'Invalid ObjectID'
const msgNotFound = 'Item not found'

const isIdInvalid = (id, next) => {
    if (!id || id.length != 24) {
        next(new createError.BadRequest(msgInvalidId))
        return true
    } else return false
}

module.exports = (model) => {
    const service = baseService(model);
    return {
        create: (req, res, next) => {
            const validationErrors = new model(req.body).validateSync();
            if (validationErrors) {
                return next(
                    new createError.BadRequest(validationErrors)
                )
            }
            return service.create(req.body)
                .then(cp => {
                    res.status(201).json(cp);
                })
                .catch(reason => next(
                    new createError.InternalServerError(reason.message)));
        },
        findAll: (req, res, next) => {
            return service.findAll()
                .then(list => res.json(list))
        },
        findOne: (req, res, next) => {
            const id = req.params.id;
            if (isIdInvalid(id, next)) return
            return service.findOne(id)
                .then(item => {
                    if (item == '') {
                        return next(new createError
                            .NotFound(msgNotFound))
                    } else res.json(item)
                })
        },
        updateOne: (req, res, next) => {
            const id = req.params.id;
            if (isIdInvalid(id, next)) return
            const validationErrors = new model(req.body).validateSync();
            if (validationErrors) {
                return next(
                    new createError.BadRequest(validationErrors)
                )
            }
            return service.updateOne(id, req.body)
                .then(entity => {
                    res.json(entity);
                })
                .catch(reason => {
                    next(new createError.InternalServerError(reason.message));
                })
        },
        deleteOne: (req, res, next) => {
            const id = req.params.id;
            if (isIdInvalid(id, next)) return
            return service.deleteOne(id)
                .then(() => res.json({}))
                .catch(reason => {
                    return next(
                        new createError.InternalServerError(reason));
                })
        }
    }
}
