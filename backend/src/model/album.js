const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const AlbumSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
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
