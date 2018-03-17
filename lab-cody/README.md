# Cody Green Lab 13 MongoDB sub-documents

## Introduction

This is a node.js app with an Express Server that implements Restful API's and uses MongoDB for storage 
it features a nested sub-document inside a schema.

## To Run This Application

start up mongodb by typing mongod

Run index.js. Some example tools and commands you can use:
```
node server.js
// for node

nodemon server.js
// if you have nodemon installed globally
```

## RECOMMENDED: Test this app by using an http client like Postman or httpie

### For Getting all the Projects:
```
http://localhost:3000/api/beerfridge
```
### For getting a specific Project:
```
http://localhost:3000/api/beerfridge?id=<valid id>
```

Get requests at any other path will return 404 not found

### For POST requests, use:
```
http://localhost:3000/api/beerfridge?
```
and send proper JSON in the request body on postman this can be done by selecting POST then going into the BODY
and choosing RAW JSON/APPLICATION and making a valid JSON object.
```
{
    "name": "PBR",
    "ammount": 12
}
```
 POST requests will return JSON Improper POST requests will return 400 bad request.

### For PUT requests, use
```
http://localhost:3000/api/beerfridge?id=<valid id>
```
and send proper JSON in the request body:
```
{
    "name": "PBR",
    "ammount": 12
}
```