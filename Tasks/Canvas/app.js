canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

class Shape {
  constructor(width = 10, height = 10) {
    this.createShape = () => { };
    this.width = width;
    this.height = height;
    this.speed = (Math.random() - 0.5) * 2
    this.radius = 50
  }
}

class Rectangle extends Shape {
  constructor() {
    super([arguments])
    this.x = Math.round(Math.random() * (innerWidth - 100 * 2));
    this.y = Math.round(Math.random() * (innerWidth - 100 * 2));
    this.width = 100;
    this.height = 100;
    this.randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.createShape = () => {
      ctx.fillStyle = this.randomColor;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      if (this.width > 150) {
        this.speed = -this.speed;
      }
      if (this.width < 50) {
        this.speed = -this.speed;
      }
      this.width += this.speed;
      this.height += this.speed
    };
  }
}
//TODO
class Circle extends Shape {
  constructor() {
    super([arguments])
    this.createShape = () => {
      ctx.beginPath();
      ctx.arc(Math.round(Math.random() * (innerWidth - 100 * 2)), Math.round(Math.random() * (innerWidth - 100 * 2)), this.radius, 0, Math.PI * 2, false);
      ctx.stroke();
      ctx.fillStyle = '#' + Math.floor(Math.random() * 16777215).toString(16);;
      ctx.fill();
      if (this.radius > 150) {
        this.speed = -this.speed;
      }
      if (this.radius <= 50) {
        this.speed = -this.speed;
      }
      this.radius += this.speed;
    };
  }
}

class ShapeFactory {
  constructor() {
    this.drawShape = (shape) => {
      shape.createShape(this.canvas);
    };
  }
}

const RenderShape = new ShapeFactory();
const RectangleShape = new Rectangle();
const RenderCircle = new Circle();
const shapeNum = Math.floor(Math.random() * 2);
const arr = [RectangleShape, RenderCircle]

console.log(arr);
// RenderShape.drawShape(arr[shapeNum]);
function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  
    RenderShape.drawShape(arr[shapeNum]);
  
}


animate()

