'use strict';

const superagent = require('superagent');
const Senshi = require('../models/senshi.js');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

// require('../index.js');
require('jest');

const url = 'http://localhost:3000';
const exampleSenshi = {
  name:'Usagi Tsukino',
  age:'16'
};
//change afterEach and beforeEach to afterAll and beforeAll if 
//you add more tests
describe('Senshi Routes', function(){
  describe('POST:/api/senshi', function(){
    describe('valid reqest body', function(){
      afterEach( done => {
        if (this.tempSenshi){
          Senshi.remove({})
          .then(() => done())
          .catch(done);
          return;
        }
        done();
      });
      it('should return a senshi', done => {
        console.log('31 url',`${url}/api/senshi`);
        superagent.post('http://localhost:3000/api/senshi')
        .send(exampleSenshi)
        .end((err,res) => {
          if(err) return done(err);
          expect(res.status).toEqual(200);
          expect(res.body.name).toEqual('Usagi Tsukino');
          this.tempSenshi = res.body;
          done();
        });
      });
    });
  });
  describe('GET: /api/senshi/:senshiId', function(){
    describe('valid request body', function(){
      beforeEach(done => {
        new Senshi(exampleSenshi).save()
        .then(senshi => {
          this.tempSenshi = senshi;
          done();
        })
        .catch(done);
      });
      afterEach(function(done) {
        if(this.tempSenshi){
          Senshi.remove({})
          .then(() => done())
          .catch(done);
          return;
        }
        done();
      });
      it.skip('should return a senshi', function(done) {
        superagent.get(`${url}/api/senshi/${this.tempSenshi._id}`)
        .end((err, res) =>{
          if(err) return done(err);
          expect(res.status).toEqual(200);
          expect(res.body.name).toEqual('Usagi Tsukino');
          done();
        });
      });
    });
  });
});