'use strict';

const superagent = require('superagent');

const SERVER = 'http://localhost:3000';

describe('Server tests', () => {

  test('throws 404 if route is not found', (done) => {
    superagent.get(SERVER + '/')
    .end((err, res) => {
      expect(res.status).toBe(404);
    //   expect(40).toEqual(92);
      done();
    });
  });

  test('throws 404 if invalid ids are entered', (done) => {
    superagent.get(SERVER + '/api/beerfridge/' + '36')
    .end((err, res) => {
      expect(res.status).toBe(404);
    //   expect(40).toEqual(92);
      done();
    });
  });

  test('throws 400 for posts requests with no body', (done) => {
    superagent.post(SERVER + '/api/beerfridge')
    .end((err, res) => {
      expect(res.status).toBe(400);
    //   expect(40).toEqual(92);
      done();
    });
  });

  test('throws 400 for get requests with no id', (done) => {
    superagent.post(SERVER + '/api/beerfridge?id=')
    .end((err, res) => {
      expect(res.status).toBe(400);
    //   expect(40).toEqual(92);
      done();
    });
  });

  test('returns 200 for good get requests with valid id and should contain a response body for a request made with a valid id', (done) => {
    let expected;
    superagent.get(SERVER + '/api/beerfridge')
    .end((err, res) => {
      expected = res.body[0];
      let id = res.body[0]._id;
      superagent.get(`${SERVER}/api/beerfridge?id=${id}`).end((err, res) => {
        expect(res.body).toEqual(expected);
        // expect(40).toEqual(92);
        done();
      });
    });
  });

  test('returns 200 for posts requests and should respond with the body content for a post request with a valid body', (done) => {
    let pbr = {
        name: "PBR",
        ammount: 12
    }
    superagent.post(SERVER + '/api/beerfridge')
    .set('Content-Type', 'application/json')
    .send(JSON.stringify(pbr))
    .end((err, res) => {
      expect(res.body.name).toEqual(pbr.name);
      expect(res.body.ammount).toEqual(pbr.ammount);
      expect(res.status).toBe(200);
    //   expect(40).toEqual(92);
      done();
    });
  });

});