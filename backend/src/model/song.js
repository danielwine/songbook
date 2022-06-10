const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const SongSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Artist",
        required: true
    },
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Album",
        required: false
    },
    year: {
        type: Number,
        required: false
    },
    time: {
        type: String,
        required: false
    },
    lyricist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lyricist",
        required: false
    }],
    composer: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Composer",
    }],
    x_genre: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genre",
        required: false
    }],
    lyrics: {
        type: String,
        required: true
    }
}, {
    timestamps: false
});

SongSchema.plugin(idValidator);

module.exports = mongoose.model('Song', SongSchema);
