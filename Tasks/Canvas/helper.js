const colorsArray = [];
for (let i = 0; i < 100; i++) {
    const r = Math.floor(Math.random() * (256))
    const g = Math.floor(Math.random() * (256))
    const b = Math.floor(Math.random() * (256))
    colorsArray.push('#' + r.toString(16) + g.toString(16) + b.toString(16));
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
            default:
                return null
        }
    }
}

const spawnArray = [];

setInterval(() => {
    for (let i = 0; i < 1; i++) {
        spawnArray.push(SpawFactory.createFigure("bubbles"), SpawFactory.createFigure("triangle"), SpawFactory.createFigure("square"));
    }
    if (spawnArray.length > 9) { spawnArray.splice(0, 3) }
}, 5000);

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < spawnArray.length; i++) {
        spawnArray[i].draw();
    }
}
animate()