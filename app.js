const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('config'); 
const DEV_PORT = 6000; //Port for development, need to configure this more properly for production
import { Game, Developer, Publisher } from 'datamodels';

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(config.DBHost);


app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

 app.get('/games', (req, res) => {
    Game.find({}).
    limit(20).
    sort({ title: 1 }).
    select('title developer publisher released_date genre').
    exec((err, game) => {
        if (err) return handleError(err);
        res.json(game);
    });
 });

 app.post('/games', (req, res) => {
     let newGame = new Game(req.body);

     newGame.save((err, game) => {
         if (err) {
             res.send(err);
         }
         else {
             res.json({message: "You have successfully added a game to the database", game});
         }
     });
 });

 app.get('/games', (req, res) => {
    Game.findOne({ 'id_num': req.query.id }, 'title', (err, game) => {
        if (err) return  handleError(err);
        res.json(game.title);
    });
 });

 app.get('/games/:id_num/developer', (req, res) => {
    Game.findOne({ 'id_num': req.params.id_num }, 'developer', (err, game) => {
        if (err) return  handleError(err);
        res.json(game.developer);
    });
 });

 app.get('/games/:id_num/publisher', (req, res) => {
    Game.findOne({ 'id_num': req.params.id_num }, 'publisher', (err, game) => {
        if (err) return  handleError(err);
        res.json(game.publisher);
    });
 });

 app.get('/games/:id_num/release_date', (req, res) => {
    Game.findOne({ 'id_num': req.params.id_num }, 'release_date', (err, game) => {
        if (err) return  handleError(err);
        res.json(game.release_date);
    });
 });

 app.get('/games/:id_num/genre', (req, res) => {
    Game.findOne({ 'id_num': req.params.id_num }, 'genre', (err, game) => {
        if (err) return  handleError(err);
        res.json(game.genre);
    });
 });

 app.get('/developers/:id_num', (req, res)  => {
    Developer.findOne({ 'id_num': req.params.id_num }, 'name', (err, developer) => {
        if (err) return handleError(err);
        res.json(developer.name);
    });
 });

 app.get('/developers/:id_num/location_country', (req, res)  => {
    Developer.findOne({ 'id_num': req.params.id_num }, 'location_country', (err, developer) => {
        if (err) return handleError(err);
        res.json(developer.location_country);
    });
 });

 app.get('/developers/:id_num/released_games', (req, res)  => {
    Developer.findOne({ 'id_num': request.params.id_num }, 'released_games', (err, developer) => {
        if (err) return handleError(err);
        res.json(developer.released_games);
    });
 });

 app.get('/developers/all', (req, res) => {

 });

 app.get('/publishers', (req, res) => {

 });

 app.get('/publishers/:id_num', (req, res) => {
    Publisher.findOne({ 'id_num': req.params.id_num }, 'name', (err, publisher) => {
        if (err) return handleError(err);
        res.json(publisher.name);
    });
 });

 app.get('/publishers/:id_num/location_country', (req, res) => {
    Publisher.findOne({ 'id_num': req.params.id_num }, 'location_country', (err, publisher) => {
        if (err) return handleError(err);
        res.json(publisher.location_country);
    });
 });

 app.get('/publishers/:id_num/published_games', (req, res) => {
    Publisher.findOne({ 'id_num': req.params.id_num }, 'published_games', (err, publisher) => {
        if (err) return handleError(err);
        res.json(publisher.published_games);
    });
 });

 app.listen(DEV_PORT);
 console.log("Listening on port: %s", DEV_PORT);

 module.exports = app;

