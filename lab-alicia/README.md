# Object Relational Mapping with a Single Resource Mongo and Express API

## Author: Alicia Lycan

===

## Resources  

* [express docs](http://expressjs.com/en/4x/api.html)
* [bodyparser docs](https://github.com/expressjs/body-parser)
* [superagent docs](https://visionmedia.github.io/superagent/)
* [http errors docs](https://github.com/jshttp/http-errors)

## Introduction

* This is a simple node.js app that builds an HTTP server utilizing RESTful Express routes working with MongoDB through Mongoose for storage. This RESTful API allows the user to make HTTP requests with data about international coffee roasts utilizing advanced Mongoose features like sub-documents, attaching methods to schemas, and validation.

********************** TO: DO: Include a summary description of your Mongoose Schemas, methods they have, and validation they use.

## To Run Application

* Open terminal and type:
 ///
 `node server.js`
///

* You will now be able to make requests using CRUD operations.

### HTTP Requests

* POST: `http POST :4000/api/coffee origin="" roast= `
  if successful, will return with `200` status code, otherwise `400` for bad request, or `404` for not found

* GET:  `http GET :4000/api/coffee/:id `
  if successful, will return with `200` status code, otherwise `400` for bad request, or `404` for not found

* DELETE:  `http DELETE :4000/api/coffee/:id `
  if successful, will return with `200` status code, otherwise `400` for bad request, or `404` for not found


###HTTP requests for Pokemon
* POST: `http POST :4000/api/coffee origin="" roast="" cost="" `
  if successful, will return with `200` status code, otherwise `400` for bad request, or `404` for not found

* GET:  `http GET :4000/api/coffee/:id `
  if successful, will return with `200` status code, otherwise `400` for bad request, or `404` for not found

* DELETE:  `http DELETE :4000/api/coffee/:id `
  if successful, will return with `200` status code, otherwise `400` for bad request, or `404` for not found