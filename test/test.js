const mongoose = require('mongoose');
const models = require('../data_models');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect;

mongoose.Promise = global.Promise;

describe('Games', () => {
    beforeEach((done) => {
        models.Game.remove({}, (err) => {
            done();
        });
    });

    describe('GET Games', () => {
        it('should return no games', (done) => {
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
        it('it should POST a game', (done) => {
            let game = {
                id_num: 1,
                title: "Doom",
                developer: "id Software",
                publisher: "Bethesda Softworks",
                release_date: 2016,
                genre: "FPS"
            }

            chai.request(app)
            .post('/games')
            .send(game)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body)
            })
        })
    })











})