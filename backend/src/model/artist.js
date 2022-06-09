const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const ArtistSchema = mongoose.Schema({
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

ArtistSchema.plugin(idValidator);

module.exports = mongoose.model('Artist', ArtistSchema);
