import { Shape } from "./Shape.js";
const ctx = canvas.getContext('2d');
export class Rectangle extends Shape {
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
        };
    }
}

