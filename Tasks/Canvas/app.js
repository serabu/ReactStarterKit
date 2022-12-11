const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

const colorsArray = [];
for (let i = 0; i < 100; i++) {
    const r = Math.floor(Math.random() * (256))
    const g = Math.floor(Math.random() * (256))
    const b = Math.floor(Math.random() * (256))
    colorsArray.push('#' + r.toString(16) + g.toString(16) + b.toString(16));
}

// function randomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

function arrayRandElement(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

class Bubbles {
    constructor() {
        this.name = "bubbles"
        this.x = Math.random() * (innerWidth - 100 * 2) + 100;
        this.y = Math.random() * (innerHeight - 100 * 2) + 100;
        this.xSpeed = (Math.random() - 0.5) * 2;
        this.ySpeed = (Math.random() - 0.5) * 2;
        this.radius = 100;
        this.color = arrayRandElement(colorsArray)
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
    constructor() {
        this.name = "triangle"
        this.x = Math.random() * (innerWidth - 100 * 2) + 100;
        this.y = Math.random() * (innerHeight - 100 * 2) + 100;
        this.xSpeed = (Math.random() - 0.5) * 2;
        this.ySpeed = (Math.random() - 0.5) * 2;
        this.color = arrayRandElement(colorsArray)
    }
    draw() {
        c.beginPath();
        c.moveTo(this.x, this.y)
        c.lineTo(this.x - 25, this.y + 50)
        c.lineTo(this.x + 25, this.y + 50)
        c.closePath()
        c.stroke();
        c.fillStyle = this.color;
        c.fill();

        this.update();
    }
    update() {
        if (this.x + 25 > innerWidth || this.x - 25 < 0) {
            this.xSpeed = -this.xSpeed;
        }
        if (this.y + 50 > innerHeight || this.y < 0) {
            this.ySpeed = -this.ySpeed;
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
}

class Square {
    constructor() {
        this.name = "square"
        this.x = Math.random() * (innerWidth - 100 * 2) + 100;
        this.y = Math.random() * (innerHeight - 100 * 2) + 100;
        this.xSpeed = (Math.random() - 0.5) * 2;
        this.ySpeed = (Math.random() - 0.5) * 2;
        this.width = 100;
        this.height = 100;
        this.color = arrayRandElement(colorsArray)
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
        if (this.x + this.width > innerWidth || this.x < 0) {
            this.xSpeed = -this.xSpeed;
        }
        if (this.y + this.height > innerHeight || this.y < 0) {
            this.ySpeed = -this.ySpeed;
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
}

const SpawFactory = {
    createFigure: function (type) {
        switch (type) {
            case "bubbles":
                return new Bubbles()
            case "triangle":
                return new Triangle()
            case "square":
                return new Square()
            default:
                return null
        }
    }
}


// const bubbles = SpawFactory.createFigure("bubbles") 
// const triangle = SpawFactory.createFigure("triangle") 
// const square = SpawFactory.createFigure("square")






const spawnArray = [];
console.log(spawnArray);


for (let i = 0; i < 3; i++) {
    spawnArray.push(SpawFactory.createFigure("bubbles"), SpawFactory.createFigure("triangle"), SpawFactory.createFigure("square")
    );
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < spawnArray.length; i++) {
        spawnArray[i].draw();
    }
}
animate();