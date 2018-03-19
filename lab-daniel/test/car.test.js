'use strict'

const server = 'http://localhost:3000';
const agent = require('superagent');


describe('Testing RESTful API', () => {
    it('Should return 404 if the route is not found', (resolve, reject) =>{
        agent.get(`${server}/`)
        .end((err, res) => {
            expect(res.status).toBe(404);
            resolve(); 
        });
    });
    it('Should return 404 for invalid id', (resolve, reject) => {
        agent.get(`${server}/api/bicycle`)
        .end((err, res) => {
            expect(res.status).toBe(404);
            resolve();
        });
    });
    it('Should return 200 for valid id', (resolve, reject) => {
        let id = '?5aadb9f7c219d7543601df7c`'
        agent.get(`${server}/api/cars/${id}`)
        .end((err, res) => {
            expect(res.status).toBe(200);
            resolve();
        })
    })
})