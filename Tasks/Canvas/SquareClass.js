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