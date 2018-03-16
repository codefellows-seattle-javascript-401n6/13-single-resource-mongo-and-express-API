'use strict';

const superagent = require('superagent');
const Coffee = require('../model/coffee.js');

const SERVER_URL = 'http://localhost:3000';

describe('Tests for server', () => {
    test('404 error if no route found', (done) => {
        superagent.get(SERVER_URL + 'api/wrongurl')
            .end((err, res) => {
                expect(res.status).toBe(404);
            })
    })
});

describe('', () => {

})