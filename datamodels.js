const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    id_num: Number,
    title: String,
    developer: String,
    publisher: String,
    release_year: Date,
    genre: String
});

const developerSchema = new Schema({
    id_num: Number,
    name: String,
    location_country: String,
});

const publisherSchema = new Schema({
    id_num: Number,
    name: String,
    location_country: String,
});

exports.Game = mongoose.model('Game', gameSchema);
exports.Developer = mongoose.model('Developer', developerSchema);
exports.Publisher = mongoose.model('Publisher', publisherSchema);