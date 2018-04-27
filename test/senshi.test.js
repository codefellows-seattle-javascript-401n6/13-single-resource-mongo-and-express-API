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
      // afterEach( done => {
      //   if (this.tempSenshi){
      //     Senshi.remove({})
      //     .then(() => done())
      //     .catch(done);
      //     return;
      //   }
      //   done();
      // });
      it('should return a senshi', done => {
        console.log('31 url',`${url}/api/senshi`);
        superagent.post('http://localhost:3000/api/senshi')
        .send(exampleSenshi)
        .end((err,res) => {
          if(err) return done(err);
          expect(res.status).toEqual(200);
          expect(res.body.name).toEqual('Usagi Tsukino');
    
          done();
        });
      });
    });
  });
  describe('GET: /api/senshi/:senshiId', function(){
    describe('valid request body', function(){
      let tempSenshi = '';
      beforeEach(done => {  
       
        superagent.post('http://localhost:3000/api/senshi')
        .send(exampleSenshi)
        .then(senshi => {
          tempSenshi = senshi;
          done();
        })
        .catch(done => {
          console.log('57......');
          done();
        });
      });
      // afterEach(function(done) {
      //   if(this.tempSenshi){
      //     Senshi.remove({})
      //     .then(() => done())
      //     .catch(done);
      //     return;
      //   }
      //   done();
      // });
      it('should return a senshi', done => {
    
        superagent.get(`${url}/api/senshi/${tempSenshi.body._id}`)
        .end((err, res) =>{
       
          if(err) return done(err);
         
          expect(res.status).toEqual(200);
          console.log('78 res.body.name', res.body.name);
          console.log('79 err', err);
  
          expect(res.body.name).toEqual('Usagi Tsukino');
          console.log('81 res.body.name after expect', res.body.name);
          done();
        });
      });
    });
  });
  describe(': DELETE/api/senshi/:senshiId', function(){
    describe('valid request body', function(){
      let tempSenshi = '';
      beforeEach(done => {  
       
        superagent.post('http://localhost:3000/api/senshi')
        .send(exampleSenshi)
        .then(senshi => {
          tempSenshi = senshi;
          done();
        })
        .catch(done => {
          console.log('57......');
          done();
        });
      });
  
      it('should return a senshi', done => {
    
        superagent.delete(`${url}/api/senshi/${tempSenshi.body._id}`)
        .end((err, res) =>{
       
          if(err) return done(err);
         
          expect(res.status).toEqual(200);
          console.log('112', res.status);
          console.log('1123', res.body);
        
          console.log('113 err', err);
  
          // expect(res.body.name).toEqual('Usagi Tsukino');
          console.log('116 res.body.name after expect', res.body.name);
          done();
        });
      });
    });
  });

});

