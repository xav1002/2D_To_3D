import topCanvas from './3Dcanvas';
import CANVAS from './2Dcanvas';

var THREECanvas = new topCanvas();

var Canvas = new CANVAS();

console.log(THREECanvas.camera);
console.log(Canvas.canvas);

/**
 * Function that changes the position of the cylinders based on the event listerners on the divs
 */

Canvas.canvas.addEventListener('mousemove', function(e) {
    var offset = e.offsetX / (Canvas.canvas.width / 20);
    // console.log(Math.ceil(offset));
    console.log(THREECanvas.rightCylinderMesh.position.y);

    var newOffset = offset;
    if(Math.ceil(offset) >= 11) {
        newOffset += 1;
        THREECanvas.rightCylinderMesh.position.x = ((Math.abs(Math.ceil(newOffset) - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);
        THREECanvas.leftCylinderMesh.position.x = -((Math.abs(Math.ceil(newOffset) - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);
    } else {
        THREECanvas.rightCylinderMesh.position.x = ((Math.abs(Math.ceil(offset) - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);
        THREECanvas.leftCylinderMesh.position.x = -((Math.abs(Math.ceil(offset) - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);
    }

    if(Math.ceil(offset) <= 9) {
        newOffset = 19 - offset;
        THREECanvas.rightCylinderMesh.position.y = THREECanvas.path.getPoints(19)[Math.ceil(newOffset)].y;
        THREECanvas.leftCylinderMesh.position.y = THREECanvas.path.getPoints(19)[Math.ceil(offset)].y;
    } else {
        newOffset = 19 - offset;
        THREECanvas.rightCylinderMesh.position.y = THREECanvas.path.getPoints(19)[Math.ceil(offset - 1)].y;
        THREECanvas.leftCylinderMesh.position.y = THREECanvas.path.getPoints(19)[Math.ceil(newOffset)].y;
    }
});

console.table(THREECanvas.path.getPoints(19));