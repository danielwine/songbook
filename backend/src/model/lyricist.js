const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const LyricistSchema = mongoose.Schema({
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

LyricistSchema.plugin(idValidator);

module.exports = mongoose.model('Lyricist', LyricistSchema);
