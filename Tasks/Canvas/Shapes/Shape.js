export class Shape {
    constructor(width = 10, height = 10) {
        this.createShape = () => { };
        this.width = width;
        this.height = height;
    }
}

export class ShapeFactory {
    constructor() {
      this.drawShape = (shape) => {
        shape.createShape(this.canvas);
      };
    }
  }