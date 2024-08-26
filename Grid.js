class Grid {
    constructor() {
        this.cells = [
            [new EmptyCell(), new EmptyCell(), new EmptyCell()],
            [new EmptyCell(), new EmptyCell(), new EmptyCell()],
            [new EmptyCell(), new EmptyCell(), new EmptyCell()]
        ];

        this.values = [ //to calculate the winner
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        
        this.gameOver = false;
        this.score = new Score(this); // transfer the grid to the function
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
        for (let i = 1; i < 3; i++) {
            // Horizontal lines
            ctxt.moveTo(0, i * height);
            ctxt.lineTo(RESOLUTION, i * height);
        }

        for (let i = 1; i < 3; i++) {
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
        if (this.gameOver) {
            return; // STAHP DA GAMEEEE
        }
        if (this.cells[y][x] instanceof EmptyCell) { // Only allow moves in empty cells
            if (this.isOTurn === true ) {
                this.cells[y][x] = new SymbolO();
                this.values[y][x] = -1; // -1 for O
                this.isOTurn = false;
            } else {
                this.cells[y][x] = new SymbolX();
                this.values[y][x] = 1; // 1 for X
                this.isOTurn = true;
            }
        }
        const result = this.score.checkWin();
        if (result) {
            this.endGame(result); // display the winner
        }
    } 
    
    endGame(result) {
        if (result === "X") {
            document.getElementById("winner").style.color = "#fb6f92";
            document.getElementById("winner").innerHTML = "X WINSSSSS!!!"; 
        } else if (result === "O") {
            document.getElementById("winner").style.color = "#ffb3c6";
            document.getElementById("winner").innerHTML = "O WINSSSSS!!!"; 
        } else if (result === "draw") {
            document.getElementById("winner").style.color = "#000";
            document.getElementById("winner").innerHTML = "It's a draw :O!"; 
        }
        document.getElementById("winner").style.display = "block"; 
        document.getElementById("restart-btn").style.display = "block"; 
        this.gameOver = true;
    }
}
