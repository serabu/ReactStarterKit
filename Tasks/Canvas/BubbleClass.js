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