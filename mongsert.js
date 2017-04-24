const mongoose = require('mongoose');
const models = require('./datamodels');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/game_api');

const Doom = new models.Game({
    id_num: 1,
    name: 'Doom',
    developer: 'Id Software',
    publisher: 'Bethesda Softworks',
    release_year: 2016,
    genre: 'FPS'
});

Doom.save((err) => {
    if (err) return handleError(err);
});

const Dishonored = new models.Game({
    id_num: 2,
    name: 'Dishonored',
    developer: 'Arkane Studios',
    publisher: 'Bethesda Softworks',
    release_year: 2012,
    genre: 'Stealth'
});

Dishonored.save((err) => {
    if (err) return handleError(err);
});

const WoW = new models.Game({
    id_num: 3,
    name: 'World of Warcraft',
    developer: 'Blizzard Entertainment',
    publisher: 'Activision Blizzard',
    release_year: 2004,
    genre: 'MMORPG'
});

WoW.save((err) => {
    if (err) return handleError(err);
});

const Overwatch = new models.Game({
    id_num: 4,
    name: 'Overwatch',
    developer: 'Blizzard Entertainment',
    publisher: 'Activision Blizzard',
    release_year: 2016,
    genre: 'FPS'
});

Overwatch.save((err) => {
    if (err) return handleError(err);
});

const SWG = new models.Game({
    id_num: 5,
    name: 'Star Wars Galaxies',
    developer: 'Sony Online Entertainment',
    publisher: 'Sony Online Entertainment',
    release_year: 2003,
    genre: 'MMORPG'
});

SWG.save((err) => {
    if (err) return handleError(err);
});

const HalfLife = new models.Game({
    id_num: 6,
    name: 'Half Life',
    developer: 'Valve',
    publisher: 'Valve Corporation',
    release_year: 1998,
    genre: 'FPS'
});

HalfLife.save((err) => {
    if (err) return handleError(err);
});

const HalfLife2 = new models.Game({
    id_num: 7,
    name: 'Half Life 2',
    developer: 'Valve',
    publisher: 'Valve Corporation',
    release_year: 2004,
    genre: 'FPS'
});

HalfLife2.save((err) => {
    if (err) return handleError(err);
});

const FEAR = new models.Game({
    id_num: 8,
    name: 'F.E.A.R.',
    developer: 'Monolith Productions',
    publisher: 'Sierra Entertainment',
    release_year: 2005,
    genre: 'FPS'
});

FEAR.save((err) => {
    if (err) return handleError(err);
});

const SM3DW = new models.Game({
    id_num: 9,
    name: 'Super Mario 3D World',
    developer: 'Nintendo EAD Tokyo',
    publisher: 'Nintendo',
    release_year: 2013,
    genre: 'Platformer'
});

SM3DW.save((err) => {
    if (err) return handleError(err);
});

const Uncharted = new models.Game({
    id_num: 10,
    name: 'Uncharted 2: Among Thieves',
    developer: 'Naughty Dog',
    publisher: 'Sony Interactive Entertainment',
    release_year: 2009,
    genre: 'TPS'
});

Uncharted.save((err) => {
    if (err) return handleError(err);
});

//Developers

const Valve = new models.Developer({
    id_num: 1,
    name: 'Valve',
    location_country: 'US'
});

Valve.save((err) => {
    if (err) return handleError(err);
});

const NEADTokyo = new models.Developer({
    id_num: 2,
    name: 'Nintendo EAD Tokyo',
    location_country: 'JP'
});

NEADTokyo.save((err) => {
    if (err) return handleError(err);
});

const Crytek = new models.Developer({
    id_num: 3,
    name: 'Crytek',
    location_country: 'GER'
});

Crytek.save((err) => {
    if (err) return handleError(err);
});

const NaughtyDog = new models.Developer({
    id_num: 4,
    name: 'Naughty Dog',
    location_country: 'US'
});

NaughtyDog.save((err) => {
    if (err) return handleError(err);
});

const Arkane = new models.Developer({
    id_num: 5,
    name: 'Arkane Studios',
    location_country: 'FR'
});

Arkane.save((err) => {
    if (err) return handleError(err);
});
