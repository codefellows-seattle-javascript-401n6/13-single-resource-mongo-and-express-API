### SCHEMA
- Nests the carSchema inside of my garageSchema
```
let carSchema = mongoose.Schema({
    make: String,
    model: String,
    year: Number
});

let garageSchema = mongoose.Schema({
    cars: [carSchema]
});
```

### Get car by id:
```
function get(id) {
    return new Promise((resolve, reject) => {
      Car.findOne({_id: id}, (err, car) => {
        resolve(car);
      })
    });
  }
```

### Get all cars
```
function getAll() {
  return new Promise((resolve, reject) => {
    return Car.find()
    .then(results => {
      resolve(results);
      })
    });
  }
```


### Update car
```
function update(id, car){
  return new Promise((resolve, reject) => {
    Car.findOneAndUpdate(id, car, (err, car) => {
      resolve(car);
    });
  });
}
```

### Removes car by ID
```
function remove(id){
  return new Promise((resolve, reject) => {
    Car.remove({_id: id}, (err, car) => {
      resolve(car)
    });
 });
}
```