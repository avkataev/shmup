import {setting} from "../constants/setting";
import player from "./Player";
import bricks from "./Bricks";
import score from "./Score";
import {colors} from "../constants/colors";

interface InterfaceBullet {
    radius: number
    x: number
    y: number
    status: number
}
class Bullets {
    value: InterfaceBullet[] = []
    add() {
        this.value.push({
            radius: 5,
            x: player.x + player.width / 2,
            y: setting.height - player.height,
            status: 1
        })
    }
    draw(ctx) {
        if (this.value.length) this.value = this.value.filter(bullet => bullet.y > 0 && bullet.status)
        if (this.value.length) {
            for (let i = 0; i < this.value.length; i++) {
                ctx.beginPath();
                this.value[i].y -= 5
                ctx.arc(this.value[i].x, this.value[i].y, this.value[i].radius, 0, Math.PI * 2);
                ctx.fillStyle = colors.bullets;
                ctx.fill();
                ctx.closePath();
            }
        }
    }
    collisionDetection() {
        for (let i = 0; i < this.value.length; i++) {
            if (this.value[i].status === 0) continue
            let x = this.value[i].x;
            let y = this.value[i].y;

            for (let c = 0; c < bricks.columnCount; c++) {
                for (let r = 0; r < bricks.rowCount; r++) {
                    const b = bricks.value[c][r];
                    if (b.status === 1) {
                        if (
                            x > b.x &&
                            x < b.x + bricks.width &&
                            y > b.y &&
                            y < b.y + bricks.height
                        ) {
                            score.count()
                            b.status = 0;
                            this.value[i].status = 0
                        }
                    }
                }
            }
        }
    }
}

const bullets = new Bullets()

export default bullets
