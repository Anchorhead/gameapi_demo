const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: String,
    developer: String,
    publisher: String,
    release_year: Number,
    genre: String
});

const developerSchema = new Schema({
    name: String,
    location_country: String,
});

const publisherSchema = new Schema({
    name: String,
    location_country: String,
});

Game = mongoose.model('Game', gameSchema);
Developer = mongoose.model('Developer', developerSchema);
Publisher = mongoose.model('Publisher', publisherSchema);

module.exports = { Game, Developer, Publisher };