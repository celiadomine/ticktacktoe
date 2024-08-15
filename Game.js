class Game {
    constructor() { // only called once
        this.grid  = new Grid();
    }

    /**
     * @param ctxt {CanvasRenderingContext2D}
     */
    render(ctxt) {
        this.grid.render(ctxt);
    }

    turn(x, y) {
        this.grid.turn(x, y);
    }
}
