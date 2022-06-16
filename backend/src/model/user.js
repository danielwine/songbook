const mongoose = require('mongoose');

const SALT_FACTOR = 10;

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        index: {
            unique: true
        }
    },
    role: String,
})

UserSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('User', UserSchema);
