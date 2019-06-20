import topCanvas from './3Dcanvas';
import CANVAS from './2Dcanvas';

var THREECanvas = new topCanvas();

var Canvas = new CANVAS();

console.log(THREECanvas.camera);
console.log(Canvas.canvas);

/**
 * Function that changes the position of the cylinders based on the event listerners on the divs
 */

// console.log(THREECanvas.tx, THREECanvas.ty, THREECanvas.tz);
// THREECanvas.rightCylinderMesh.position.x = (((Math.abs(parseFloat(this.style.left) - (Canvas.canvas.width / 2))) * 2) + (THREECanvas.tubeLength / 8));
// THREECanvas.leftCylinderMesh.position.x = -(((Math.abs(parseFloat(this.style.left) - (Canvas.canvas.width / 2))) * 2) + (THREECanvas.tubeLength / 8));
// THREECanvas.rightCylinderMesh.position.y = Math.cos(parseFloat(this.style.left) / 200) * 50;

Canvas.canvas.addEventListener('mousemove', function(e) {
    var offset = e.offsetX / (Canvas.canvas.width / 20);
    console.log(Math.ceil(offset));
    var newOffset = offset;
    if(Math.ceil(offset) >= 11) {
        newOffset += 1;
        THREECanvas.rightCylinderMesh.position.x = ((Math.abs(Math.ceil(newOffset) - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);
        THREECanvas.leftCylinderMesh.position.x = -((Math.abs(Math.ceil(newOffset) - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);
    } else {
        THREECanvas.rightCylinderMesh.position.x = ((Math.abs(Math.ceil(offset) - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);
        THREECanvas.leftCylinderMesh.position.x = -((Math.abs(Math.ceil(offset) - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);
    }
});