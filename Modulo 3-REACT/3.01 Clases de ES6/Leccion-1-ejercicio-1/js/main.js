"use strict";

class Square {
  getperimeter(side) {
    console.log(side * 4);
  }
  getArea(side) {
    console.log(side * side);
  }
}

const geometric = new Square();

geometric.getperimeter(9);
geometric.getArea(9);
