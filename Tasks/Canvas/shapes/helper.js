import { Bubbles, LittleTriangle, Square, Triangle } from "./FigursClasses.js";

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const mousePos = []
const indexI = []
const spawnLittleTriangle = []
const spawnArray = [];
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

export function findPos(e) {
    const posX = e.clientX
    const posY = e.clientY
    mousePos.push(posX, posY)
    console.log(mousePos);

}

// in my maind this foo get coordinate and find index figure
export function removeFigure() {
    const xIndex = spawnArray.map(posX => {
        return posX.x
    })
    const yIndex = spawnArray.map(posY => {
        return posY.y
    })

    for (let i = Number(mousePos.slice(-2, mousePos.length - 1)); i < Number(mousePos.slice(-2, mousePos.length - 1)) + 100; i++) {
        const findindexX = xIndex.indexOf(i)
        spawnArray.splice(5, 1)
    }

}
// random color
export function randomColor() {
    const colorsArray = [];
    for (let i = 0; i < 100; i++) {
        const r = Math.floor(Math.random() * (256))
        const g = Math.floor(Math.random() * (256))
        const b = Math.floor(Math.random() * (256))
        colorsArray.push('#' + r.toString(16) + g.toString(16) + b.toString(16));
    }
    return colorsArray
}

export function arrayRandElement(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}


// push in arr figure which need to draw. Now only bubbles but i animate all
export function collectDraw() {
    for (let i = 0; i < 1; i++) {
        spawnArray.push(SpawFactory.createFigure("bubbles"));
    }
    if (spawnArray.length > 9) {
        spawnArray.splice(0, 3)

    }
    return spawnArray
}


// this foo animate figure
export function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < spawnArray.length; i++) {
        spawnArray[i].draw();
    }
}


// this foo push a lot triange in arr and after remove arr, idk why foo explosion speedup next stak triangle -_-
// mb stak this 2 foo together 
export function collect() {
    for (let i = 1; i < 100; i++) {
        spawnLittleTriangle.push(SpawFactory.createFigure("littleTriangle"))
    }
    setTimeout(() => {
        spawnLittleTriangle.splice(0, spawnLittleTriangle.length)
    }, 1000);

}
// evry click speed up cuz this foo broken need TODO ---> 
export function explosion() {
    requestAnimationFrame(explosion);
    for (let i = 0; i < spawnLittleTriangle.length; i++) {
        spawnLittleTriangle[i].draw();
    }
}


//nothing to say 
export function findeFigure() {
    const xIndex = spawnArray.map(posX => {
        return posX.x
    })
    const yIndex = spawnArray.map(posY => {
        return posY.y
    })

    for (let i = Number(mousePos.slice(-2, mousePos.length - 1)); i < Number(mousePos.slice(-2, mousePos.length - 1)) + 100; i++) {
        // spawnArray.splice(xIndex.indexOf(i), 1)
        indexI.push(xIndex.indexOf(i))
    }

    const indexRemove = indexI.indexOf(1)
    let cutArr = Number(indexI.splice(indexRemove, 1))
    // if (cutArr === -1) { cutArr = 0 }
    indexI.splice(0, indexI.length)
    spawnArray.splice(Number(cutArr), 1)
    return indexI
}
