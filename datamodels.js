const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    id_num: Number,
    title: String,
    developer: String,
    publisher: String,
    release_date: Date,
    genre: String
});

const developerSchema = new Schema({
    id_num: Number,
    name: String,
    location_country: String,
    released_games: Array
});

const publisherSchema = new Schema({
    id_num: Number,
    name: String,
    location_country: String,
    published_games: Array
});

export const Game = mongoose.model('Game', gameSchema);
export const Developer = mongoose.model('Developer', developerSchema);
export const Publisher = mongoose.model('Publisher', publisherSchema);