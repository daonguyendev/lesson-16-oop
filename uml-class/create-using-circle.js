let Circle = function (radius) {
  this.getRadius = function () {
    return radius;
  };
  this.getArea = function () {
    return Math.PI * Math.pow(radius, 2);
  };
};

let circle = new Circle(2);
console.log(circle.getRadius()); // 2
console.log(circle.getArea().toFixed(2)); // 12.57
