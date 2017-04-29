const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('config');  
const models = require('./datamodels');

const Game = models.Game;
const Developer = models.Developer;
const Publisher = models.Publisher;

const app = express();

mongoose.Promise = global.Promise;

app.set('port', (process.env.PORT || 8080));

//mongoose.connect(config.DBHost);
//use this URL with Heroku, need to add proper config for DB later
mongoose.connect('mongodb://heroku_drxlll71:b0vs6l0dmgv41pntb7e9ihnqi5@ds125481.mlab.com:25481/heroku_drxlll71');

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.get('/', (req, res) => {
    res.send('Hello, this should be working!');
});

 app.get('/games', (req, res) => {
    Game.find({})
    .limit(20)
    .sort({ title: 1 })
    .select('title developer publisher released_date genre')
    .exec((err, game) => {
        if (err) return handleError(err);
        res.json(game);
    });
 });

 app.post('/games', (req, res) => {
     let newGame = new Game(req.body);

     newGame.save((err, game) => {
        if (err) return handleError(err);
        res.json({message: "You have successfully added a new game to the database", game});
     });
 });

 app.get('/games/:id', (req, res) => {
    Game.findOne({ '_id': req.params.id }, 'title', (err, game) => {
        if (err) return  handleError(err);
        res.json(game.title);
    });
 });

 app.get('/games/:id/developer', (req, res) => {
    Game.findOne({ '_id': req.params.id }, 'developer', (err, game) => {
        if (err) return  handleError(err);
        res.json(game.developer);
    });
 });

 app.get('/games/:id/publisher', (req, res) => {
    Game.findOne({ '_id': req.params.id }, 'publisher', (err, game) => {
        if (err) return  handleError(err);
        res.json(game.publisher);
    });
 });

 app.get('/games/:id/release_date', (req, res) => {
    Game.findOne({ '_id': req.params.id }, 'release_date', (err, game) => {
        if (err) return  handleError(err);
        res.json(game.release_date);
    });
 });

 app.get('/games/:id/genre', (req, res) => {
    Game.findOne({ '_id': req.params.id }, 'genre', (err, game) => {
        if (err) return  handleError(err);
        res.json(game.genre);
    });
 });

 app.get('/developers/:id', (req, res)  => {
    Developer.findOne({ '_id': req.params.id }, 'name', (err, developer) => {
        if (err) return handleError(err);
        res.json(developer.name);
    });
 });

 app.get('/developers/:id/location_country', (req, res)  => {
    Developer.findOne({ '_id': req.params.id }, 'location_country', (err, developer) => {
        if (err) return handleError(err);
        res.json(developer.location_country);
    });
 });

 app.get('/developers', (req, res) => {
    Developer.find({})
        .limit(20)
        .sort({name: 1})
        .select('name location_country')
        .exec((err, developer) => {
            if (err) return handleError(err);
            res.json(developer);
        });
 });

 app.post('/developers', (req, res) => {
     let newDeveloper = new Developer(req.body);

     newDeveloper.save((err, developer) => {
         if (err) return handleError(err);
         res.json({message: "You have successfully added a new developer to the database", developer});
     });
 });

 app.get('/publishers', (req, res) => {
    Publisher.find({})
        .limit(20)
        .sort({name: 1})
        .select('name location_country')
        .exec((err, publisher) => {
            if (err) return handleError(err);
            res.json(publisher);
        });
 });

 app.post('/publishers', (req, res) => {
     let newPublisher = new Publisher(req.body);

     newPublisher.save((err, publisher) => {
         if (err) return handleError(err);
         res.json({message: "You have successfully added a new publisher to the database", publisher});
     });
 });

 app.get('/publishers/:id', (req, res) => {
    Publisher.findOne({ '_id': req.params.id }, 'name', (err, publisher) => {
        if (err) return handleError(err);
        res.json(publisher.name);
    });
 });

 app.get('/publishers/:id/location_country', (req, res) => {
    Publisher.findOne({ '_id': req.params.id }, 'location_country', (err, publisher) => {
        if (err) return handleError(err);
        res.json(publisher.location_country);
    });
 });

 app.listen(app.get('port'), () => {
     console.log("Listening on port: %s", app.get('port'));
 });

 module.exports = app;

