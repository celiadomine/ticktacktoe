class SymbolO {
    constructor() {

    }

    /**
     * @param ctxt {CanvasRenderingContext2D}
     */
    render(ctxt, y, x) {
        const height = RESOLUTION / 3;
        const width = RESOLUTION / 3;
        ctxt.strokeStyle = "#ffb3c6";
        ctxt.lineWidth = 8;

        // draw the circle
        ctxt.beginPath();
        ctxt.arc(
            x * width + width / 2, //x
            y * height + height / 2, //y
            width / 3.25, //radius
            0,
            Math.PI * 2 //circle
        );
        ctxt.closePath(); // for the full circle (no space in between)
        ctxt.stroke();
    }
}
