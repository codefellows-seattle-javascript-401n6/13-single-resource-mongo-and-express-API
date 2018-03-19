'use strict'

const Router = require('../routes/routes.js')
const storage = require('../lib/mongo.js')
const Car = require('../model/car.js')

describe('GET REQUEST', () => {
    it('Should return ALL the cars listed', (resolve, reject) =>{
        let result = storage.getAll();
        console.log(storage.getAll())
        expect().toBe();
        resolve();
    })
})