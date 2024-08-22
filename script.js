const RESOLUTION = 300;

let canvas;
let ctxt;
let game;

window.onload = function() {
    canvas = document.getElementById('grid');
    canvas.width = RESOLUTION;
    canvas.height = RESOLUTION;
    ctxt = canvas.getContext('2d');
    document.getElementById("restart-btn").style.display = "none"; 

    game = new Game(); //new Object

    canvas.addEventListener("click", function(e){
        let rect = canvas.getBoundingClientRect();
        let x = Math.floor((e.clientX - rect.left) / (RESOLUTION / 3));
        let y = Math.floor((e.clientY - rect.top) / (RESOLUTION / 3));
        console.log(x, y);
        game.turn(x, y);
    })

    // Add event listener for restart button
    document.getElementById("restart-btn").addEventListener('click', function() {
        restartGame();
    });

    loop();
};

// Restart the game by reinitializing the game object
function restartGame() {
    game = new Game(); // Reset the game instance
    document.getElementById("restart-btn").style.display = "none";
    document.getElementById("winner").style.display = "none"; 
}
function loop() {
    ctxt.clearRect(0, 0, RESOLUTION, RESOLUTION); //clear screen

    game.render(ctxt);

    requestAnimationFrame(loop);
}
