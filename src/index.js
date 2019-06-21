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
    var offset = Math.ceil(e.offsetX / (Canvas.canvas.width / 20));
    // console.log(Math.ceil(offset));
    // console.table(THREECanvas.rightCylinderMesh.position.y, THREECanvas.leftCylinderMesh.position.y);

    var newOffset = offset;
    // if(offset >= 11) {
    //     newOffset += 1;
    //     THREECanvas.rightCylinderMesh.position.x = ((Math.abs(newOffset - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);
    //     THREECanvas.leftCylinderMesh.position.x = -((Math.abs(newOffset - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);
    // } else {
    //     THREECanvas.rightCylinderMesh.position.x = ((Math.abs(offset - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);
    //     THREECanvas.leftCylinderMesh.position.x = -((Math.abs(offset - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);
    // }

    if(offset <= 9) {
        newOffset = 19 - offset;
        offset -= 1;
        newOffset += 1;
        THREECanvas.rightCylinderMesh.position.y = THREECanvas.path.getPoints(19)[newOffset].y;
        THREECanvas.leftCylinderMesh.position.y = THREECanvas.path.getPoints(19)[offset].y;
        THREECanvas.rightCylinderMesh.position.x = THREECanvas.path.getPoints(19)[newOffset].x;
        THREECanvas.leftCylinderMesh.position.x = THREECanvas.path.getPoints(19)[offset].x;
        // console.table(THREECanvas.rightCylinderMesh.position.y, THREECanvas.leftCylinderMesh.position.y, offset, newOffset);
    } else {
        newOffset = 19 - offset;
        if(offset >= 11) {
            offset -= 1;
            newOffset += 1;
        }
        THREECanvas.rightCylinderMesh.position.y = THREECanvas.path.getPoints(19)[offset].y;
        THREECanvas.leftCylinderMesh.position.y = THREECanvas.path.getPoints(19)[newOffset].y;
        THREECanvas.rightCylinderMesh.position.x = THREECanvas.path.getPoints(19)[offset].x;
        THREECanvas.leftCylinderMesh.position.x = THREECanvas.path.getPoints(19)[newOffset].x;
        // console.table(THREECanvas.rightCylinderMesh.position.y, THREECanvas.leftCylinderMesh.position.y, offset, newOffset);
    }
});

console.table(THREECanvas.path.getPoints(19));