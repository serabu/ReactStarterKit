const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');


class Bubbles {
    constructor(name, color) {
        this.name = name
        this.x = Math.random() * (innerWidth - 100 * 2) + 100;
        this.y = Math.random() * (innerHeight - 100 * 2) + 100;
        this.xSpeed = (Math.random() - 0.5) * 2;
        this.ySpeed = (Math.random() - 0.5) * 2;
        this.radius = 100;
        this.color = color
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.stroke();
        c.fillStyle = this.color;
        c.fill();

        this.update();
    }
    update() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.xSpeed = -this.xSpeed;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.ySpeed = -this.ySpeed;
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
}

class Triangle {
    constructor(name, color) {
        this.name = name
        this.x = Math.random() * (innerWidth - 100 * 2) + 100;
        this.y = Math.random() * (innerHeight - 100 * 2) + 100;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.stroke();
        c.fillStyle = this.color;
        c.fill();

        this.update();
    }
    update() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
    }
}

class Square {
    constructor(name, color) {
        this.name = name
        this.x = Math.random() * (innerWidth - 100 * 2) + 100;
        this.y = Math.random() * (innerHeight - 100 * 2) + 100;
        this.xSpeed = (Math.random() - 0.5) * 2;
        this.ySpeed = (Math.random() - 0.5) * 2;
        this.width = 100;
        this.height = 100;
        this.color = color
    }
    draw() {
        c.beginPath();
        c.fillRect(this.x, this.y, this.width, this.height);
        c.stroke();
        c.fillStyle = this.color;
        c.fill();

        this.update();
    }
    update() {
        if (this.x + this.width > innerWidth || this.x  < 0) {
            this.xSpeed = -this.xSpeed;
        }
        if (this.y + this.height > innerHeight || this.y  < 0) {
            this.ySpeed = -this.ySpeed;
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
}

class SpawFactory {
    static list = {
        bubbles: Bubbles,
        triangle: Triangle,
        square: Square
    }
    create(){}
}



function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



const colorsArray = [];
for (let i = 0; i < 10; i++) {
    const r = Math.floor(Math.random() * (256))
    const g = Math.floor(Math.random() * (256))
    const b = Math.floor(Math.random() * (256))
    colorsArray.push('#' + r.toString(16) + g.toString(16) + b.toString(16));
}

const circlesArray = [];

for (let i = 0; i < 5; i++) {


    const colorIndex = randomInteger(1, colorsArray.length);
    circlesArray.push(new Square(name, colorsArray[colorIndex]));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < circlesArray.length; i++) {
        circlesArray[i].draw();
    }
}
animate();







// class Square {
//     constructor(x, y, dx, dy, radius, color) {
//         this.x = x;
//         this.y = y;
//         this.dx = dx;
//         this.dy = dy;
//         this.radius = radius;
//         this.color = color
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
//         if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
//             this.dx = -this.dx;
//         }
//         if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
//             this.dy = -this.dy;
//         }
//         this.x += this.dx;
//         this.y += this.dy;
//     }
// }