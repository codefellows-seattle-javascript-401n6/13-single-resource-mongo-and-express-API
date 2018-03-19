'use strict'

const server = 'http://localhost:3000';
const agent = require('superagent');


describe('Testing RESTful API', () => {
    test('Should return 404 if the route is not found', (resolve, reject) =>{
        agent.get(`${server}/`)
        .end((err, res) => {
            expect(res.status).toBe(404);
            resolve(); 
        });
    });
    test('Should return 404 for invalid id', (resolve, reject) => {
        agent.get(`${server}/api/bicycle`)
        .end((err, res) => {
            expect(res.status).toBe(404);
            resolve();
        });
    });
    test('Should return 200 for valid id', (resolve, reject) => {
        let id = '?5aadb9f7c219d7543601df7c`'
        agent.get(`${server}/api/cars/${id}`)
        .end((err, res) => {
            expect(res.status).toBe(200);
            resolve();
        });
    });
    test('(POST) Should return 200 for valid id', (resolve, reject) => {
        let expected;
        agent.post(`${server}/api/cars/`)
        .end((err, res) => {
            expected = res.body[0];
            let id = res.body[0];
            agent.get(`${server}/api/cars?id=${id}`)
            .end((err, res) => {
                expect(id).toBe(expected);
                resolve();
            });
        });
    });
    test.skip('(POST) Should return 200 and body for a post request', (resolve, reject) => {
        let civic = {
            make: 'Honda',
            model: 'Civic',
            year: 2000
        }
        agent.post(`${server}/api/cars`)
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(civic))
        .end((err, res) => {
            expect(res.body.make).toBe(civic.make);
            expect(res.body.model).toBe(civic.model);
            expect(res.body.year).toBe(civic.year);
        })
    })


})