class Score {
    constructor(grid) {
        this.grid = grid;
    }

    checkWin() {
        const values = this.grid.values;

        // Check rows and columns
        for (let i = 0; i < 3; i++) {
            let rowSum = values[i][0] + values[i][1] + values[i][2]; 
            let colSum = values[0][i] + values[1][i] + values[2][i];

            if (rowSum === 3 || colSum === 3) {
                console.log("OMGGG X WINSSSSS!");
                return "X";
            } else if (rowSum === -3 || colSum === -3) {
                console.log("OMGGG O WINSSSSS!");
                return "O";
            }
        }

        // Check diagonals
        let diagonal1 = values[0][0] + values[1][1] + values[2][2];
        let diagonal2 = values[0][2] + values[1][1] + values[2][0];

        if (diagonal1 === 3 || diagonal2 === 3) {
            console.log("OMGGG X WINSSSSS!");
            return "X";
        } else if (diagonal1 === -3 || diagonal2 === -3) {
            console.log("OMGGG O WINSSSSS!");
            return "O";
        }

        // Check for a draw
        if (this.isDraw()) {
            console.log("It's a draw!");
            return "draw";
        }

        // No winner or draw yet
        return null;
    }

    isDraw() {
        // no more 0 = draw
        const values = this.grid.values;
        return values.flat().every(value => value !== 0);
    }
}
