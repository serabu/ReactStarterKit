class Shape {
  width: number;
  height: number;

  constructor(width = 10, height = 10) {
    this.width = width;
    this.height = height;
  }

  createShape = (canvas: HTMLCanvasElement): void => {};
  clear = (canvas: HTMLCanvasElement): void => {};
}

class Rectangle extends Shape {
  x = Math.floor(Math.random() * 300);
  y = Math.floor(Math.random() * 300);
  width = 10;
  height = 10;
  randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  createShape = (canvas: HTMLCanvasElement): void => {
    if (canvas?.getContext != null) {
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      ctx.fillStyle = this.randomColor;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  };

  clear = (canvas: HTMLCanvasElement | null): void => {
    if (canvas?.getContext != null) {
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      ctx.clearRect(this.x, this.y, this.width, this.height);
    }
  };
}

class Circle extends Shape {
  createShape = (canvas: HTMLCanvasElement): void => {
    if (canvas?.getContext != null) {
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(Math.floor(Math.random() * 300), Math.floor(Math.random() * 300), 6, 0, Math.PI * 2);
      ctx.fillStyle = randomColor;
      ctx.fill();
    }
  };
}

class ShapeFactory {
  canvas = document.getElementById('canvas') as HTMLCanvasElement | null;
  drawShape = (shape: Shape): void => {
    if (this.canvas?.getContext != null) {
      shape.createShape(this.canvas);
    }
  };
}

