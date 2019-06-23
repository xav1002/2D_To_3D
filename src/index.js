import topCanvas from './3Dcanvas';
import CANVAS from './2Dcanvas';

var THREECanvas = new topCanvas();

var Canvas = new CANVAS();

console.table(THREECanvas.path.getPoints(19));

/**
 * Function that changes the position of the cylinders based on the event listerners on the divs
 */

Canvas.canvas.addEventListener('mousemove', function(e) {
    var offset = Math.ceil(e.offsetX / (Canvas.canvas.width / 20));
    var newOffset = offset;

    /**
     * This method uses the offset and the length of the tube to change the position of the cylinders; THREECanvas is more proportional than the other method
     */

    // if(offset >= 11) {
    //     newOffset += 1;
    //     THREECanvas.rightCylinderMesh.position.x = ((Math.abs(newOffset - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);
    //     THREECanvas.leftCylinderMesh.position.x = -((Math.abs(newOffset - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);
    // } else {
    //     THREECanvas.rightCylinderMesh.position.x = ((Math.abs(offset - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);
    //     THREECanvas.leftCylinderMesh.position.x = -((Math.abs(offset - 11) * THREECanvas.tubeLength / 4) - THREECanvas.tubeLength / 8);
    // }

    /**
     * This method uses the position of the divided customCurve to determine the positions of the cylinders in all three dimensions
     */

    if(offset <= 9) {
        newOffset = 19 - offset;
        offset -= 1;
        newOffset += 1;
        THREECanvas.rightCylinderMesh.position.y = THREECanvas.path.getPoints(19)[newOffset].y;
        THREECanvas.leftCylinderMesh.position.y = THREECanvas.path.getPoints(19)[offset].y;
        THREECanvas.rightCylinderMesh.position.x = THREECanvas.path.getPoints(19)[newOffset].x;
        THREECanvas.leftCylinderMesh.position.x = THREECanvas.path.getPoints(19)[offset].x;
        THREECanvas.rightCylinderMesh.position.z = -(THREECanvas.path.getPoints(19)[offset].z);
        THREECanvas.leftCylinderMesh.position.z = -(THREECanvas.path.getPoints(19)[newOffset].z);
        if(offset <= 1 || newOffset >= 18) {
            offset += 1;
            newOffset -= 1;
        }
        THREECanvas.rightCylinderMesh.rotation.z = Math.atan(((THREECanvas.path.getPoints(19)[newOffset].y - THREECanvas.path.getPoints(19)[newOffset - 1].y) / (THREECanvas.path.getPoints(19)[newOffset].x - THREECanvas.path.getPoints(19)[newOffset - 1].x))) - (Math.PI / 2);
        THREECanvas.leftCylinderMesh.rotation.z = Math.atan(((THREECanvas.path.getPoints(19)[offset].y - THREECanvas.path.getPoints(19)[offset - 1].y) / (THREECanvas.path.getPoints(19)[offset].x - THREECanvas.path.getPoints(19)[offset - 1].x))) - (Math.PI / 2);
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
        THREECanvas.rightCylinderMesh.position.z = -(THREECanvas.path.getPoints(19)[newOffset].z);
        THREECanvas.leftCylinderMesh.position.z = -(THREECanvas.path.getPoints(19)[offset].z);
        if(offset >= 18 || newOffset <= 1) {
            offset -= 1;
            newOffset += 1;
        }
        THREECanvas.rightCylinderMesh.rotation.z = Math.atan(((THREECanvas.path.getPoints(19)[offset].y - THREECanvas.path.getPoints(19)[offset - 1].y) / (THREECanvas.path.getPoints(19)[offset].x - THREECanvas.path.getPoints(19)[offset - 1].x))) - (Math.PI / 2);
        THREECanvas.leftCylinderMesh.rotation.z = Math.atan(((THREECanvas.path.getPoints(19)[newOffset].y - THREECanvas.path.getPoints(19)[newOffset - 1].y) / (THREECanvas.path.getPoints(19)[newOffset].x - THREECanvas.path.getPoints(19)[newOffset - 1].x))) - (Math.PI / 2);

    }
    console.log(offset, newOffset, THREECanvas.rightCylinderMesh.rotation.z);
});