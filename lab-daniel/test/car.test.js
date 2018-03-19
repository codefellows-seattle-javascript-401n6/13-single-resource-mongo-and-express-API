'use strict'

const server = 'http://localhost:3000';
const agent = require('superagent');


describe('GET REQUEST', () => {
    it('Should return 404 if the route is not found', (resolve, reject) =>{
        agent.get(`${server}/`)
        .end((err, res) => {
            expect(res.status).toBe(404);
            resolve(); 
        })
    })
})