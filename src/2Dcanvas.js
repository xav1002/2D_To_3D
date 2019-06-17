class CANVAS {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('id', 'mainsvg');
        this.canvas.setAttribute('height', `${window.innerHeight / 2}`);
        this.canvas.setAttribute('width', `${window.innerWidth}`);
        this.canvas.style.position = 'absolute';
        document.body.appendChild(this.canvas);

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
                a.ctx.rect(x, y, this.width, this.height);
                a.ctx.stroke();

                this.object = document.createElement('div');
                this.object.style.width = `${this.width}px`;
                this.object.style.height = `${this.height}px`;
                this.object.style.position = 'absolute';
                this.object.style.display = 'block';
                // Quick fix for positioning of divs; they need to be more centered with the canvas
                this.object.style.left = `${x}px`;
                this.object.style.top = `${window.innerHeight / 2 + y}px`;
                this.object.style.backgroundColor = 'blue';
                this.object.style.opacity = .2;
                document.body.appendChild(this.object);
            }
        }
        
        for(var i = 0; i < 10; i += 1) {
            for(var j = 0; j < 20; j += 1) {
                a.gamePieces.push(new gamePiece(j * a.canvas.width / 20, i * a.canvas.height / 10));
            }
        }

        // console.log(a.gamePieces);



    }
}

export default CANVAS;