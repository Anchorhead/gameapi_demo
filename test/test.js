process.env.NODE_ENV = 'test';


const mongoose = require('mongoose');
const models = require('../datamodels');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect;

mongoose.Promise = global.Promise;

chai.use(chaiHttp);

describe('Games', () => {
    beforeEach((done) => {
        models.Game.remove({}, (err) => {
            done();
        });
    });

    describe('GET Games', () => {
        it('should return no errors and no games when database is empty', (done) => {
            chai.request(app)
            .get('/games')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.lengthOf(0);
            done();
            });
        });
    });

    describe('POST game', () => {
        it('should POST a game, adding it to the database', (done) => {
            let game = new models.Game({
                title: "Doom",
                developer: "id Software",
                publisher: "Bethesda Softworks",
                release_year: 2016,
                genre: "FPS"
            });

            chai.request(app)
            .post('/games')
            .send(game)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message').eql('You have successfully added a new game to the database');
                expect(res.body.game).to.have.property('title').eql('Doom');
                expect(res.body.game).to.have.property('developer').eql('id Software');
                expect(res.body.game).to.have.property('publisher').eql('Bethesda Softworks');
                expect(res.body.game).to.have.property('release_year').eql(2016);
                expect(res.body.game).to.have.property('genre').eql('FPS');
            done();
            });
        });
    });
});

describe('Developers', () => {
    beforeEach((done) => {
        models.Developer.remove({}, (err) => {
            done();
        });
    });

    describe('GET Developers', () => {
        it('Should return no errors and no developers when database is empty', (done) => {
            chai.request(app)
            .get('/developers')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.lengthOf(0);
            done();
            });
        });
    });

    describe('POST Developers', () => {
        it('Should post a Developer, adding it to the database', (done) => {
            let developer = new models.Developer({
                name: "Naughty Dog",
                location_country: "US"
            });

            chai.request(app)
            .post('/developers')
            .send(developer)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message').eql('You have successfully added a new developer to the database');
                expect(res.body.developer).to.have.property('name').eql('Naughty Dog');
                expect(res.body.developer).to.have.property('location_country').eql('US');
            done();
            });
        });
    });

});

describe('Publishers', () => {
    beforeEach((done) => {
        models.Publisher.remove({}, (err) => {
            done();
        });
    });

    describe('GET Publishers', () => {
        it('Should return no errors and no publishers when database is empty', (done) => {
            chai.request(app)
            .get('/publishers')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.lengthOf(0);
            done();
            });
        });
    });

    describe('POST Publishers', () => {
        it('Should post a Publisher, adding it to the database', (done) => {
            let publisher = new models.Publisher({
                name: "Activision Blizzard",
                location_country: "US"
            });

            chai.request(app)
            .post('/publishers')
            .send(publisher)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message').eql('You have successfully added a new publisher to the database');
                expect(res.body.publisher).to.have.property('name').eql('Activision Blizzard');
                expect(res.body.publisher).to.have.property('location_country').eql('US');
            done();
            });
        });
    });

});