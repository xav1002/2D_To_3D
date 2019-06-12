import create3DCanvas from './3Dcanvas';
import create2DCanvas from './2Dcanvas';

document.addEventListener('DOMContentLoaded', function() {
    create3DCanvas();
    create2DCanvas();
})

// const animate = function() {
//     requestAnimationFrame(function() {animate()} );
//     renderer.render(scene, camera);
// }
// animate();
