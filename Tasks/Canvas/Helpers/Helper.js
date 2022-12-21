import { ShapeFactory } from "../Shapes/FactoryClass.js";
import { Rectangle } from "../Shapes/RectangleClass.js";
import { Circle } from "../Shapes/CircleClass.js";

export function getShape(num){
    const RenderShape = new ShapeFactory();
    const RectangleShape = new Rectangle();
    const RenderCircle = new Circle();
    const shapeNum = Math.floor(Math.random() * num);
    const arr = [RectangleShape, RenderCircle];
    RenderShape.drawShape(arr[shapeNum]);
}
