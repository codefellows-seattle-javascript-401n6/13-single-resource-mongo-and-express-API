'use strict';

const superagent = require('superagent');

const SERVER_URL = 'http://localhost:3000';

describe('Tests for server', () => {

  describe('Invalid GET request using wrong url', () => {
    describe('GET /wrongurl', () => {
      test('should respond with 404 status when /wrongurl is used', () => {
        superagent.get(`${SERVER_URL}/api/wrongurl`)
          .catch(err => expect(err.status).toBe(404));
      })
    })
  });
    
  describe('Valid GET request using wrong url', () => {
    describe('GET /coffees', () => {
      test('should respond with 200 status', () => {
        superagent.get(`${SERVER_URL}/api/coffees`)
          .then(res => expect(res.status).toBe(200));
      })
    })
  });

  describe('Invalid POST request', () => {
    describe('POST /coffee', () => {
      test('should respond with a 404 status when no id is provided', () => {
        superagent.post(`${SERVER_URL}/api/coffee`)
          .catch(err => expect(err.status).toBe(404));
      })
    })
  });

  describe('Valid POST request', () => {
    describe('POST /coffees', () => {
      test('should respond with 200 status', () => {
        superagent.get(`${SERVER_URL}/api/coffees`)
          .send({origin: 'Guatemala', roast: 'medium', cost: '250'})
          .then(res => expect(res.status).toBe(200));
      })
    })
  });

  describe('Invalid PUT request', () => {
    describe('PUT /coffee', () => {
      test('should respond with a 404 status when no id is provided', () => {
        superagent.put(`${SERVER_URL}/api/coffee`)
          .catch(err => expect(err.status).toBe(404));
      })
    })    
  });

  describe('Valid PUT request', () => {
    describe('PUT /coffee/:_id', () => {
      test('should respond with a 204 status when id is provided', () => {
        let id;
        superagent.post(`${SERVER_URL}/api/coffee`)
          .send({origin: 'Bolivia', roast: 'dark', cost: '450'})
          .then(res => id = res.body.id)
          .then(() => {
            superagent.put(`${SERVER_URL}/api/coffee/${id}`)
              .send({origin: 'Colombia', roast: 'medium', cost: 325})
              .then(res=> expect(res.status).toBe(204));
          })
      })    
    })
  });

  describe('Invalid DELETE request', () => {
    describe('DELETE /coffee', () => {
      test('should respond with a 500 when given a delete request without an id', () => {
        let id;
        superagent.delete(`${SERVER_URL}/api/coffee/${id}`)
          .catch(err => expect(err.status).toBe(500));
      })
    })
  });

  describe('Valid DELETE request', () => {
    describe('DELETE /coffee/id', () => {
      test('should respond with a 204 on a successful delete', () => {
        let id;
        superagent.post(`${SERVER_URL}/api/coffee`)
          .send({origin: 'Ecuador', roast: 'light', cost: '150'})
          .then(res => id = res.body.id)
          .then(() => {
            superagent.delete(`${SERVER_URL}/api/coffee/${id}`)
              .then(res => expect(res.status).toBe(204));
          });
      });
    });
  });
});