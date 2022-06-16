const User = require('../model/user');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const logger = require('../logger');

const refreshTokens = [];
const msgIncorrect = 'Incorrect credentials'

module.exports.login = async (req, res, next) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username })
    if (!user) return next(new createError.Unauthorized(msgIncorrect))

    const valid = user.verifyPasswordSync(password);
    if (valid) {
        const accessToken = jwt.sign({
            username: user.username,
            role: user.role
        }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: process.env.TOKEN_EXPIRY
        });
        const refreshToken = jwt.sign({
            username: user.username, role: user.role
        }, process.env.REFRESH_TOKEN_SECRET);
        refreshTokens.push(refreshToken);

        res.json({
            success: true,
            accessToken,
            refreshToken,
            user: { ...user._doc, password: '' }
        });
    } else {
        return next(new createError.Unauthorized(msgIncorrect))
    }
};

module.exports.refresh = (req, res, next) => {
    const { token } = req.body;
    if (!token) {
        return next(new createError.Unauthorized())
    }
    if (!refreshTokens.includes(token)) {
        return next(new createError.Unauthorized())
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
        return next(new createError.Unauthorized())
    }
    refreshTokens.splice(refreshTokens.indexOf(token), 1);
    res.sendStatus(200);
};
