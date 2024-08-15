class SymbolX {
    constructor() {

    }

    /**
     * @param ctxt {CanvasRenderingContext2D}
     */
    render(ctxt, y, x) {
        const height = RESOLUTION / 3;
        const width = RESOLUTION / 3;
        ctxt.fillStyle = "#fb6f92";
        ctxt.fillRect(x * width, y * height, width, height);
        ctxt.stroke();
    }
}
