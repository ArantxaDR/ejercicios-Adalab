"use strict";

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }

  perimeter() {
    return this.base * this.numberOfSides;
  }
  area() {
    return this.base * this.height;
  }
}
class Square extends Polygon {
  constructor(side) {
    super(4, side, side);
    this.side = side;
  }
}
class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
  }
  area() {
    return super.area() / 2;
  }
}

const squareOne = new Square(4);
const triangleOne = new Triangle(4, 3);

console.log(squareOne.perimeter());
console.log(squareOne.area());
console.log(triangleOne.perimeter());
console.log(triangleOne.area());
