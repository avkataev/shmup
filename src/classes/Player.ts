import {setting} from "../constants/setting";
import {colors} from "../constants/colors";

class Player {

    height
    width
    x
    rightPressed = false
    leftPressed = false
    constructor() {
        this.height = 10
        this.width = 60
        this.x = (setting.width - this.width) / 2
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.rect(player.x, setting.height - player.height, player.width, player.height);
        ctx.fillStyle = colors.player;
        ctx.fill();
        ctx.closePath();
    }
    move() {
        if (this.rightPressed) {
            this.x = Math.min(this.x + 7, setting.width - this.width);
        } else if (this.leftPressed) {
            this.x = Math.max(this.x - 7, 0);
        }
    }
    keyDownHandler(e) {
        if (e.key === "Right" || e.key === "ArrowRight") {
            this.rightPressed = true;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
            this.leftPressed = true;
        }
    }
    keyUpHandler(e) {
        if (e.key === "Right" || e.key === "ArrowRight") {
            this.rightPressed = false;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
            this.leftPressed = false;
        }
    }
    mouseMoveHandler(e, offsetLeft) {
        const relativeX = e.clientX - offsetLeft;
        if (relativeX > 0 && relativeX < setting.width) {
            this.x = relativeX - this.width / 2;
        }
    }
}

const player = new Player()

export default player
