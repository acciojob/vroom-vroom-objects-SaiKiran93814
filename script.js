// Complete the js code
function Car(make, model) {
	 this.make = make;
  this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};


function SportsCar(make, model, topSpeed) {
	Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Set up inheritance from Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Ensure the constructor is set correctly
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Test Case
const car = new SportsCar("Ferrari", "Testarossa", 200);

console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed());
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
