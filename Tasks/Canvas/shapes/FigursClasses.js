// import { arrayRandElement, randomColor, findPos} from "./helper.js";
// const canvas = document.querySelector('canvas');
// const c = canvas.getContext('2d');
// const mousePos = []

// export class Bubbles {
//     constructor() {
//         this.name = "bubbles"
//         this.x = Math.round(Math.random() * (innerWidth - 100 * 2));
//         this.y = Math.round(Math.random() * (innerWidth - 100 * 2));
//         this.speed = (Math.random() - 0.5) * 2
//         this.radius = 100;
//         this.color = arrayRandElement(randomColor())
//     }
//     draw() {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         c.stroke();
//         c.fillStyle = this.color;
//         c.fill();

//         this.update();
//     }
//     update() {
//         if (this.radius > 150) {
//             this.speed = -this.speed;
//         }
//         if (this.radius <= 50) {
//             this.speed = -this.speed;
//         }
//         this.radius += this.speed;
//     }
// }

// export class Triangle {
//     constructor() {
//         this.name = "triangle"
//         this.x = Math.round(Math.random() * (innerWidth - 100 * 2));
//         this.y = Math.round(Math.random() * (innerWidth - 100 * 2));
//         this.xCorner = 50
//         this.yCorner = 75
//         this.speed = (Math.random() - 0.5) * 2
//         this.color = arrayRandElement(randomColor())
//     }
//     draw() {
//         c.beginPath();
//         c.moveTo(this.x, this.y)
//         c.lineTo(this.x - this.xCorner, this.y + this.yCorner)
//         c.lineTo(this.x + this.xCorner, this.y + this.yCorner)
//         c.closePath()
//         c.stroke();
//         c.fillStyle = this.color;
//         c.fill();

//         this.update();
//     }
//     update() {
//         if (this.xCorner > 200) {
//             this.speed = -this.speed;
//         }
//         if (this.xCorner < 50) {
//             this.speed = -this.speed;
//         }
//         this.xCorner += this.speed;
//         this.yCorner += this.speed;
//     }
// }

// export class Square {
//     constructor() {
//         this.name = "square"
//         this.x = Math.round(Math.random() * (innerWidth - 100 * 2));
//         this.y = Math.round(Math.random() * (innerWidth - 100 * 2));
//         this.speed = (Math.random() - 0.5) * 2
//         this.width = 100;
//         this.height = 100;
//         this.color = arrayRandElement(randomColor())
//     }
//     draw() {
//         c.beginPath();
//         c.fillRect(this.x, this.y, this.width, this.height);
//         c.stroke();
//         c.fillStyle = this.color;
//         c.fill();

//         this.update();
//     }
//     update() {
//         if (this.width > 150) {
//             this.speed = -this.speed;
//         }
//         if (this.width < 50) {
//             this.speed = -this.speed;
//         }
//         this.width += this.speed;
//         this.height += this.speed
//     }
// }

// export class LittleTriangle {
//     constructor() {
//         this.name = "triangle"
//         this.x = Number(mousePos.slice(-2, mousePos.length - 1))
//         this.y = Number(mousePos.slice(-1, mousePos.length))
//         this.xCorner = 5
//         this.yCorner = 7.5
//         this.xSpeed = (Math.random() - 0.5) * 5
//         this.ySpeed = (Math.random() - 0.5) * 5
//         this.color = arrayRandElement(randomColor())
//     }
//     draw() {
//         c.beginPath();
//         c.moveTo(this.x, this.y)
//         c.lineTo(this.x - this.xCorner, this.y + this.yCorner)
//         c.lineTo(this.x + this.xCorner, this.y + this.yCorner)
//         c.closePath()
//         c.stroke();
//         c.fillStyle = this.color;
//         c.fill();

//         this.update();
//     }
//     update() {
//         this.x += this.xSpeed;
//         this.y += this.ySpeed;

//     }
// }