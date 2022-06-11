const User = require('../model/user');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const logger = require('../logger');

const refreshTokens = [];
const msgIncorrect = 'Incorrect credentials'

module.exports.login = async (req, res, next) => {
    let success = false
    const { username, password } = req.body;
    const user = await User.findOne({ username })
    if (!user) return next(new createError.Forbidden(msgIncorrect))

    user.comparePassword(password, (err, isMatch) => {
        if (isMatch) success = true
        if (!success) return next(new createError.Forbidden(msgIncorrect))
        const accessToken = jwt.sign({
            username: user.username, role: user.role
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRY
        });
        const refreshToken = jwt.sign({
            username: user.username, role: user.role
        }, process.env.REFRESH_TOKEN_SECRET);
        refreshTokens.push(refreshToken);
        res.json({
            accessToken,
            refreshToken
        });
    })
};

module.exports.refresh = (req, res, next) => {
    const { token } = req.body;
    if (!token) {
        return next(new createError.Unauthorized())
    }
    if (!refreshTokens.includes(token)) {
        return next(new createError.Forbidden())
    }
    const authHeader = req.headers.authorization;
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {
            return next(new createError.Forbidden())
        }
        const accessToken = jwt.sign({
            username: user.username,
            role: user.role
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRY
        });
        res.json({
            accessToken
        });
    });
};

module.exports.logout = (req, res, next) => {
    const { token } = req.body;
    if (refreshTokens.indexOf(token) === -1) {
        return next(new createError.Forbidden())
    }
    refreshTokens.splice(refreshTokens.indexOf(token), 1);
    res.sendStatus(200);
};
