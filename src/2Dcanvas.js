/**
 * creates the bottom (2D) canvas of the app
 * each grid is a rectangle drawn on the canvas, with a div corresponding to each rectangle
 */

class CANVAS {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('id', 'mainsvg');
        this.canvas.setAttribute('height', `${window.innerHeight / 2}`);
        this.canvas.setAttribute('width', `${window.innerWidth}`);
        this.canvas.style.position = 'absolute';
        document.body.appendChild(this.canvas);

        console.log(this);

        this.ctx = this.canvas.getContext('2d');
        this.gamePieces = [];

        this.init();
    }

    init() {
        const a = this;

        class gamePiece {
            constructor(x, y) {
                this.width = a.canvas.width / 20;
                this.height = a.canvas.height / 10;
                this.position
                a.ctx.rect(x, y, this.width, this.height);
                a.ctx.stroke();
            }
        }
        
        for(var i = 0; i < 10; i += 1) {
            for(var j = 0; j < 20; j += 1) {
                a.gamePieces.push(new gamePiece(j * a.canvas.width / 20, i * a.canvas.height / 10));
            }
        }
    }
}

export default CANVAS;