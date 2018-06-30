'use strict';
const SERVER = 'http://localhost:3000';
const superagent = require('superagent');
const randomString = require('randomstring');

describe('Invalid GET request using fakepath', () => {
  describe('GET /fakepath', () => {
    it.skip('should respond with 404 status when a /fakepath is used', () => {
      return superagent
        .get(`${SERVER}/fakepath`)
        .catch(err => expect(err.status).toBe(404));
    });
  });
});

describe('Valid GET request', () => {
  describe('GET /manufacturers', () => {
    it.skip('should respond with 200 status', () => {
      superagent
        .get(`${SERVER}/api/manufacturer`)
        .then(res => expect(res.status).toBe(200));
    });
  });
});

describe('Invalid POST request', () => {
  describe('POST/api/manufacturers', () => {
    it.skip('should respond with a status 404 when :_id is not provided', () => {
      superagent
        .post(`${SERVER}/api/manufacturers`)
        .catch(err => expect(err.status).toBe(404));
    });
  });
});

describe('Invalid PUT request', () => {
  describe('PUT/api/manufacturers', () => {
    it.skip('should respond with 404 status when no :_id is provided', () => {
      return superagent
        .put(`${SERVER}/api/manufacturers`)
        .catch(err => expect(err.status).toBe(404));
    });
  });
});

describe('Invalid DELETE request', () => {
  describe('DELETE/api/manufacturers', () => {
    it.skip('should respond with a status 404 when given a delete request without an :_id in the URL', () => {
      return superagent
        .delete(`${SERVER}/api/manufacturers`)
        .catch(err => expect(err.status).toBe(404));
    });
  });
});

describe('Valid PUT request', () => {
  describe('PUT/api/manufacturers/:id', () => {
    it.skip('should respond with a status 204 following a successful PUT request', done => {
      let id;
      return superagent
        .post(`${SERVER}/api/manufacturers`)
        .send({
          name: randomString.generate(7),
          cars: { model: randomString.generate(5), year: 1999 }
        })
        .then(res => (id = res.body._id))
        .then(() => {
          return superagent
            .put(`${SERVER}/api/manufacturers/${id}`)
            .send({ name: randomString.generate(8) })
            .then(res => {
              expect(res.status).toBe(200);
              done();
            });
        });
    });
  });
});

describe('Valid DELETE Request', () => {
  describe('DELETE/api/manufacturers/:id', () => {
    it('should respond with a status 204 on a successful deletion', done => {
      let id;
      superagent
        .post(`${SERVER}/api/manufacturers`)
        .send({
          name: randomString.generate(7),
          cars: { model: randomString.generate(5), year: 1999 }
        })
        .then(res => {
          id = res.body._id;
        })
        .then(() => {
          superagent.delete(`${SERVER}/api/manufacturers/${id}`).then(res => {
            expect(res.status).toBe(204);
            done();
          });
        });
    });
  });
});