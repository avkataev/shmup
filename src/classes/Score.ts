class Score {
    value = 0
    draw(ctx) {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText(`Score: ${this.value}`, 8, 20);
    }
    count() {
        this.value += 1
    }
}

const score = new Score()

export default score
