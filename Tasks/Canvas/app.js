

const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');

const mousePos = []


findPos = (event) => { 
    posX = event.clientX
    posY = event.clientY
    
    return mousePos.push(posX, posY)
    
}

removeFigure = () => {
    const xIndex = spawnArray.map(posX => {
        return posX.x
    })
    const yIndex = spawnArray.map(posY => {
        return posY.y
    })
    
    for (let i = Number(mousePos.slice(-2, mousePos.length - 1  )); i < Number(mousePos.slice(-2, mousePos.length - 1  )) + 100; i++) {
        const findindexX = xIndex.indexOf(i)
        console.log(findindexX);
        spawnArray.splice( 5, 1)
    }
   
}


addEventListener('click', findPos)

class Bubbles {
    constructor() {
        this.name = "bubbles"
        this.x = Math.round(Math.random() * (innerWidth - 100 * 2) );
        this.y = Math.round(Math.random() * (innerWidth - 100 * 2) );
        this.speed = (Math.random() - 0.5) * 2
        this.radius = 100;
        this.color = arrayRandElement(randomColor())
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
        if (this.radius > 150) {
            this.speed = -this.speed;
        }
        if (this.radius <= 50) {
            this.speed = -this.speed;
        }
        this.radius += this.speed;
    }
}

class Triangle {
    constructor() {
        this.name = "triangle"
        this.x = Math.round(Math.random() * (innerWidth - 100 * 2) );
        this.y = Math.round(Math.random() * (innerWidth - 100 * 2) );
        this.xCorner = 50
        this.yCorner = 75
        this.speed = (Math.random() - 0.5) * 2
        this.color = arrayRandElement(randomColor())
    }
    draw() {
        c.beginPath();
        c.moveTo(this.x, this.y)
        c.lineTo(this.x - this.xCorner, this.y + this.yCorner)
        c.lineTo(this.x + this.xCorner, this.y + this.yCorner)
        c.closePath()
        c.stroke();
        c.fillStyle = this.color;
        c.fill();

        this.update();
    }
    update() {
        if (this.xCorner > 200) {
            this.speed = -this.speed;
        }
        if (this.xCorner < 50) {
            this.speed = -this.speed;
        }
        this.xCorner += this.speed;
        this.yCorner += this.speed;
    }
}

class Square {
    constructor() {
        this.name = "square"
        this.x = Math.round(Math.random() * (innerWidth - 100 * 2) );
        this.y = Math.round(Math.random() * (innerWidth - 100 * 2) );
        this.speed = (Math.random() - 0.5) * 2
        this.width = 100;
        this.height = 100;
        this.color = arrayRandElement(randomColor())
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
        if (this.width > 150) {
            this.speed = -this.speed;
        }
        if (this.width < 50) {
            this.speed = -this.speed;
        }
        this.width += this.speed;
        this.height += this.speed
    }
}

class LittleTriangle {
    constructor() {
        this.name = "triangle"
        this.x = Number(mousePos.slice(-2, mousePos.length - 1  ))
        this.y = Number(mousePos.slice(-1, mousePos.length))
        this.xCorner = 5
        this.yCorner = 7.5
        this.xSpeed = (Math.random() - 0.5) * 5
        this.ySpeed = (Math.random() - 0.5) * 5
        this.color = arrayRandElement(randomColor())
    }
    draw() {
        c.beginPath();
        c.moveTo(this.x, this.y)
        c.lineTo(this.x - this.xCorner, this.y + this.yCorner)
        c.lineTo(this.x + this.xCorner, this.y + this.yCorner)
        c.closePath()
        c.stroke();
        c.fillStyle = this.color;
        c.fill();

        this.update();
    }
    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        
    }
}

randomColor = () => {
    const colorsArray = [];
    for (let i = 0; i < 100; i++) {
        const r = Math.floor(Math.random() * (256))
        const g = Math.floor(Math.random() * (256))
        const b = Math.floor(Math.random() * (256))
        colorsArray.push('#' + r.toString(16) + g.toString(16) + b.toString(16));
    }
    return colorsArray
}

function arrayRandElement(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
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
            case "littleTriangle":
                return new LittleTriangle()
            default:
                return null
        }
    }
}
const spawnArray = [];
collectDraw = () => {

    for (let i = 0; i < 1; i++) {
        spawnArray.push(SpawFactory.createFigure("bubbles"), SpawFactory.createFigure("triangle"), SpawFactory.createFigure("square"));
    }
    if (spawnArray.length > 9) { spawnArray.splice(0, 3) }

    
   
    
    return spawnArray
}
setInterval(() => { collectDraw() }, 4000)

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < spawnArray.length; i++) {
        spawnArray[i].draw();
    }
}

const spawnLittleTriangle = []


collect = () => {
    for (let i = 1; i < 100; i++ ) {
        spawnLittleTriangle.push(SpawFactory.createFigure("littleTriangle"))
    }
    setTimeout(() => {
        spawnLittleTriangle.splice(0, spawnLittleTriangle.length)
    }, 1000);
    
}



function explosion() {
    requestAnimationFrame(explosion);
    
    for (let i = 0; i < spawnLittleTriangle.length; i++) {
        spawnLittleTriangle[i].draw();
    }
    
        
   
    
}

removeFigure = () => {
    const xIndex = spawnArray.map(posX => {
        return posX.x
    })
    const yIndex = spawnArray.map(posY => {
        return posY.y
    })
    
    for (let i = Number(mousePos.slice(-2, mousePos.length - 1  )); i < Number(mousePos.slice(-2, mousePos.length - 1  )) + 100; i++) {
        const findindexX = xIndex.indexOf(i)
        console.log(findindexX);
        
    }
    spawnArray.splice( 5, 1)
}

addEventListener('click', removeFigure)
 window.addEventListener('click', collect)
 window.addEventListener('click', explosion)



 animate()

