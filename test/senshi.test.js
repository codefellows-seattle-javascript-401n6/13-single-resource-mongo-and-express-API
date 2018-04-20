'use strict';

const request = require('superagent');
const Senshi = require('../model/list.js');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

require('../server.js');
require('jest');

const url = `http://localhost:${PORT}`;
const exampleSenshi = {
  name:'Usagi Tsukino',
  age:'16'
}
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
      it('should return a senshi', done =>{
        request.post(`${url}/api/list`)
        .send(exampleSenshi)
        .end((err,res) =>{
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
      afterEach(done =>{
        if(this.tempSenshi){
          Senshi.remove({})
          .then(() => done())
          .catch(done);
          return;
        }
        done();
      });
      it('should return a senshi', done => {
        request.get(`${url}/api/senshi/${this.tempSenshi._id}`)
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