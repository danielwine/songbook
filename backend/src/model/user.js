const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const logger = require('../logger');
const { is } = require('express/lib/request');

const SALT_FACTOR = 10;

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        index: {
            unique: true
        }
    },
    password: {
        type: String,
        required: true,
    },
    role: String,

})

UserSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        })
    })
})

UserSchema.methods.comparePassword = (
    function (candidatePassword, cb) {
        bcrypt.compare(candidatePassword, this.password,
            function (err, isMatch) {
                if (err) {
                    return cb(err);
                }
                cb(null, isMatch)
            })
    })

module.exports = mongoose.model('User', UserSchema);
