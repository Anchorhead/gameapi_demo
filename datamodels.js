const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: String,
    developer: String,
    publisher: String,
    release_date: Date,
    genre: String
});

const developerSchema = new Schema({
    name: String,
    location_country: String,
    released_games: Array
});

const publisherSchema = new Schema({
    name: String,
    location_country: String,
    published_games: String
});

export const Game = mongoose.model('Game', gameSchema);
export const Developer = mongoose.model('Developer', developerSchema);
export const Publisher = mongoose.model('Publisher', publisherSchema);