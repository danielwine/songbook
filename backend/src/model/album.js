const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const AlbumSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Artist",
        required: true
    },
    year: {
        type: Number,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song",
        required: true
    }]
}, {
    timestamps: false
});

AlbumSchema.plugin(idValidator);

module.exports = mongoose.model('Album', AlbumSchema);
