const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const ComposerSchema = mongoose.Schema({
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

ComposerSchema.plugin(idValidator);

module.exports = mongoose.model('Composer', ComposerSchema);
