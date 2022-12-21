import { Shape } from "./Shape.js";
const ctx = canvas.getContext('2d');
export class Circle extends Shape {
    constructor() {
        super([arguments])
        this.x = Math.round(Math.random() * (innerWidth - 100 * 2));
        this.y = Math.round(Math.random() * (innerWidth - 100 * 2));
        this.radius = 50
        this.randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        this.createShape = () => {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.stroke();
            ctx.fillStyle = this.randomColor
            ctx.fill();
        }
    }
}