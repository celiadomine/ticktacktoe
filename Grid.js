class Grid {
    constructor() {
        this.cells = [
            [new EmptyCell(), new EmptyCell(), new EmptyCell()],
            [new EmptyCell(), new EmptyCell(), new EmptyCell()],
            [new EmptyCell(), new EmptyCell(), new EmptyCell()]
        ];

    }

    /**
     * @param ctxt {CanvasRenderingContext2D}
     */
    render(ctxt) {
        ctxt.lineWidth = 4;
        ctxt.strokeStyle = 'black';
        const height = RESOLUTION / 3;
        const width = RESOLUTION / 3;

        ctxt.beginPath();
        
        // Draw the grid
        for (let i = 0; i <= 3; i++) {
            // Horizontal lines
            ctxt.moveTo(0, i * height);
            ctxt.lineTo(RESOLUTION, i * height);
        }

        for (let i = 0; i <= 3; i++) {
            // Vertical lines
            ctxt.moveTo(i * width, 0);
            ctxt.lineTo(i * width, RESOLUTION);
        }

        ctxt.stroke();

        for (let i = 0; i < this.cells.length; i++){
            for (let j = 0; j < this.cells[i].length; j++){
                this.cells[i][j].render(ctxt, i, j);
            }
        }
    }

    turn(x, y) {
        if (this.cells[y][x] instanceof EmptyCell) { // Only allow moves in empty cells
            if (this.isOTurn === true ) {
                this.cells[y][x] = new SymbolO();
                this.isOTurn = false;
            } else {
                this.cells[y][x] = new SymbolX();
                this.isOTurn = true;
            }
        }
    }    
}
