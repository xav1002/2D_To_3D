import topCanvas from './3Dcanvas';
import CANVAS from './2Dcanvas';

var THREECanvas = new topCanvas();

var Canvas = new CANVAS();

console.log(THREECanvas.camera);
console.log(Canvas.canvas);
// console.log(Canvas.gamePieces);

Canvas.gamePieces.forEach(piece => {
    piece.object.addEventListener('mouseover', function(e) {
        console.log(e, this.style.left);
        THREECanvas.rightCylinderMesh.position.x = (e.x - (window.innerHeight / 2)) / 5;
    });
});