module.exports = (req, res, next) => {
    if ((req.user.role !== 'admin')
        && (req.method != 'GET')) {
        return res.sendStatus(401);
    }
    next();
};
