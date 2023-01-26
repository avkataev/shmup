import player from "./classes/Player";
import bullets from "./classes/Bullets";
import bricks from "./classes/Bricks";
import { setting } from "./constants/setting";
import score from "./classes/Score";
import {colors} from "./constants/colors";


export function setupCanvas(element: HTMLCanvasElement) {
    const canvas = <HTMLCanvasElement>element;
    const ctx = canvas.getContext("2d");
    canvas.setAttribute('style', `background-color:${colors.field}`)
    canvas.width = setting.width;
    canvas.height = setting.height;

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    document.addEventListener("mousemove", mouseMoveHandler, false);
    document.addEventListener("mousedown", mouseDownHandler, false);

    draw();

    function draw() {
        // @ts-ignore
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        player.move()
        score.draw(ctx)
        bricks.draw(ctx)
        bullets.draw(ctx)
        player.draw(ctx)
        bullets.collisionDetection()
        requestAnimationFrame(draw);
    }
    function keyDownHandler(e: Event) {
        player.keyDownHandler(e)
    }

    function keyUpHandler(e: Event) {
        player.keyUpHandler(e)
    }
    function mouseMoveHandler(e: Event) {
        player.mouseMoveHandler(e, canvas.offsetLeft)
    }
    function mouseDownHandler() {
        bullets.add()
    }
}
