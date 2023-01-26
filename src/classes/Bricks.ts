import {colors} from "../constants/colors";

class Bricks {
    rowCount = 3
    columnCount = 5
    width = 75
    height = 20
    padding = 10
    offsetTop = 30
    offsetLeft = 30
    value = []
    constructor() {
        for (let c = 0; c < this.columnCount; c++) {
            this.value[c] = [];
            for (let r = 0; r < this.rowCount; r++) {
                this.value[c][r] = { x: 0, y: 0, status: 1 };
            }
        }
    }
    draw(ctx) {
        for (let c = 0; c < this.columnCount; c++) {
            for (let r = 0; r < this.rowCount; r++) {
                if (this.value[c][r].status === 1) {
                    const brickX = c * (this.width + this.padding) + this.offsetLeft;
                    const brickY = r * (this.height + this.padding) + this.offsetTop;
                    this.value[c][r].x = brickX;
                    this.value[c][r].y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, this.width, this.height);
                    ctx.fillStyle = colors.bricks;
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }
    delete() {

    }
}

const bricks = new Bricks()

export default bricks
