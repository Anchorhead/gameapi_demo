const express = require('express');
const mongoose = require('mongoose');
import { Game, Developer, Publisher } from 'datamodels';

const app = express();
 
 app.get('/', (req, res) => {
    res.send('index.html');
 });

 app.get('/games', (req, res) => {

 });

 app.get('/games/:id_num', (req, res) => {
    Game.findOne({ 'id_num': request.params.id_num }, 'title', (err, game) => {
        if (err) return  handleError(err);
        res.json(game.title);
    });
 });

 app.get('/developers/:id_num', (req, res)  => {
    Developer.findOne({ 'id_num': request.params.id_num }, 'name', (err, developer) => {
        if (err) return handleError(err);
        res.json(developer.name);
    });
 });

 app.get('/developers/all', (req, res) => {

 });

 app.get('/publishers', (req, res) => {

 });

 app.get('/publishers/:id_num', (req, res) => {
    Publisher.findOne({ 'id_num': request.params.id_num }, 'name', (err, publisher) => {
        if (err) return handleError(err);
        res.json(publisher.name);
    });
 });