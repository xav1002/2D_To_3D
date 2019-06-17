import topCanvas from './3Dcanvas';
import CANVAS from './2Dcanvas';

var THREECanvas = new topCanvas();

var Canvas = new CANVAS();

console.log(THREECanvas.camera);
console.log(Canvas.svg);

var testSVG = document.createElement('svg');
testSVG.height = 100;
testSVG.width = 100;
document.body.appendChild(testSVG);