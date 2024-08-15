const RESOLUTION = 300;

let canvas;
let ctxt;
let game;

window.onload = function() {
    canvas = document.getElementById('grid');
    canvas.width = RESOLUTION;
    canvas.height = RESOLUTION;
    ctxt = canvas.getContext('2d');

    game = new Game(); //new Object

    canvas.addEventListener("click", function(e){
        let rect = canvas.getBoundingClientRect();
        let x = Math.floor((e.clientX - rect.left) / (RESOLUTION / 3));
        let y = Math.floor((e.clientY - rect.top) / (RESOLUTION / 3));
        console.log(x, y);
        game.turn(x, y);
    })

    loop();
};

function loop() {
    ctxt.clearRect(0, 0, RESOLUTION, RESOLUTION); //clear screen

    game.render(ctxt);

    requestAnimationFrame(loop);
}
