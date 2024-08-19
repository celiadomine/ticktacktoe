class SymbolX {
    constructor() {

    }

    /**
     * @param ctxt {CanvasRenderingContext2D}
     */
    render(ctxt, y, x) {
        const height = RESOLUTION / 3;
        const width = RESOLUTION / 3;
        ctxt.strokeStyle = "#fb6f92";
        ctxt.lineWidth = 8;

        ctxt.beginPath();
        ctxt.moveTo(x * width + 20, y * height + 20);
        ctxt.lineTo((x + 1) * width - 20, (y + 1) * height - 20);
        ctxt.stroke();

        ctxt.beginPath();
        ctxt.moveTo((x + 1) * width - 20, y * height + 20);
        ctxt.lineTo(x * width + 20, (y + 1) * height - 20);
        ctxt.stroke();
    }
}
