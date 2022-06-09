const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const GenreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
        required: true
    }]
}, {
    timestamps: false
});

GenreSchema.plugin(idValidator);

module.exports = mongoose.model('Genre', GenreSchema);
