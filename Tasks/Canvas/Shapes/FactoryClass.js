export class ShapeFactory {
    constructor() {
      this.drawShape = (shape) => {
        shape.createShape();
      };
    }
  }