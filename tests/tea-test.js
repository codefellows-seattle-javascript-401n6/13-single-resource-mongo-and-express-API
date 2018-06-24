'use strict';

const superagent = require('superagent');
const SERVER_URL = 'http://localhost:3000';

describe('server tests', () => {
  describe('use of inaccurate url for GET', () => {
    it('should respond with 404', () => {
      superagent.get(`${SERVER_URL}/api/wrongurl`)
        .catch((error) => {
          expect(error.status).toBe(404);
        });
    });
  });

  describe('proper use of GET, but wrong url', () => {
    describe('GET /teas', () => {
      it('should response with 200', () => {
        superagent.get(`${SERVER_URL}/api/teas`)
          .then(response => {
            expect(response.status).toBe(200);
          });
      });
    });
  });

  describe('inaccurate POST', () => {
    it('should respond with 404', () => {
      superagent.post(`${SERVER_URL}/api/tea`)
        .catch((error) => {
          expect(error.status).toBe(404);
        });
    });
  });

  describe('proper POST', () => {
    it('should respond with 200', () => {
      superagent.get(`${SERVER_URL}/api/teas`)
        .send({
          name: 'English Breakfast',
          brand: 'Ahmad Tea',
          price: 5.32,
        })
        .then((response) => {
          expect(response.status).toBe(200);
        });
    });
  });

  describe('inaccurate PUT', () => {
    it('should respond with 404 when there is no provided id', () => {
      superagent.put(`${SERVER_URL}/api/tea`)
        .catch((error) => {
          expect(error.status).toBe(404);
        });
    });
  });

  describe('proper PUT', () => {
    it('should respond with 204, even with id', () => {
      let id;
      superagent.post(`${SERVER_URL}/api/tea`)
        .send({
          name: 'Snore & Peace Gift Caddy',
          Brand: 'Clipper Tea',
          price: 10.00,
        })
        .then((response) => {
          id = response.body.id;
        })
        .then(() => {
          superagent.put(`${SERVER_URL}/api/tea/${id}`);
        })
        .send({
          name: 'Gold',
          brand: 'Glengettie',
          price: 9.99,
        })
        .then((response) => {
          expect(response.status).toBe(204);
        });
    });
  });

  describe('inaccurate DELETE', () => {
    it('should response with 500 when no id is present', () => {
      let id; 
      superagent.delete(`${SERVER_URL}/api/tea/${id}`)
        .catch((error) => {
          expect(error.status).toBe(500);
        });
    });
  });

  describe('proper DELETE', () => {
    it('should respond with 204', () => {
      let id;
      superagent.post(`${SERVER_URL}/api/tea`)
        .send({
          name: 'Snore & Peace Gift Caddy',
          Brand: 'Clipper Tea',
          price: 10.00,
        })
        .then((response) => {
          id = response.body.id;
        })
        .then(() => {
          superagent.delete(`${SERVER_URL}/api/tea/${id}`)
            .then((response) => {
              expect(response.status).toBe(204);
            });
        });
    });
  });

});