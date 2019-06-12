const create2DCanvas = function() {
    const canvas = document.createElement('canvas');
    canvas.id = '2Dcanvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 2;
    document.body.appendChild(canvas);
}

export default create2DCanvas;