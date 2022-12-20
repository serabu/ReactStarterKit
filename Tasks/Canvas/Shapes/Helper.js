import {ShapeFactory, } from "./Shape.js";
import { Rectangle, Circle } from "./figureClasses.js";

export function getShepe(num){
    const RenderShape = new ShapeFactory();
    const RectangleShape = new Rectangle();
    const RenderCircle = new Circle();
    const shapeNum = Math.floor(Math.random() * num);
    const arr = [RectangleShape, RenderCircle]
    RenderShape.drawShape(arr[shapeNum]);
}
