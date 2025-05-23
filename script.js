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

    SportsCar.prototype = Object.create(Car.prototype);
    SportsCar.prototype.constructor = SportsCar;

    SportsCar.prototype.getTopSpeed = function () {
      return this.topSpeed;
    };

    // Expose constructors to global window object (for Cypress)
    window.Car = Car;
    window.SportsCar = SportsCar;
	



