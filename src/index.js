import topCanvas from './3Dcanvas';
import CANVAS from './2Dcanvas';

var THREECanvas = new topCanvas();

var Canvas = new CANVAS();

console.log(THREECanvas.camera);
console.log(Canvas.canvas);
// console.log(Canvas.gamePieces);

Canvas.gamePieces.forEach(piece => {
    piece.object.addEventListener('mouseover', function(e) {
        console.log(e);
        console.table(e.x, e.fromElement.offsetLeft, e.clientX, e.screenX, parseFloat(this.style.width));
        THREECanvas.rightCylinderMesh.position.x = (((Math.abs(parseFloat(this.style.left) - (Canvas.canvas.width / 2))) * 2) + (THREECanvas.tubeLength / 8));
        console.log(parseFloat(this.style.left), Canvas.canvas.width / 2, THREECanvas.rightCylinderMesh.position.x);
        THREECanvas.leftCylinderMesh.position.x = -(((Math.abs(parseFloat(this.style.left) - (Canvas.canvas.width / 2))) * 2) + (THREECanvas.tubeLength / 8));
    });
});