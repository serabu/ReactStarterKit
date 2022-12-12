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