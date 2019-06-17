class CANVAS {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.setAttribute('id', 'mainsvg');
        this.canvas.setAttribute('height', `${window.innerHeight / 2}`);
        this.canvas.setAttribute('width', `${window.innerWidth}`);
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');

        this.horizontalRect = [];
        this.verticalRect = [];

        this.init();
    }

    init() {
        const a = this;

        class gamePeice {
            constructor(x, y) {
                this.width = a.canvas.width / 20;
                this.height = a.canvas.height / 10;
                a.ctx.rect(x, y, this.width, this.height);
                a.ctx.stroke();
            }
        }
        
        for(var i = 0; i < 10; i += 1) {
            for(var j = 0; j < 20; j += 1) {
                a.verticalRect.push(new gamePeice(j * a.canvas.width / 20, i * a.canvas.height / 10));
            }
        }

        console.log(a.verticalRect);



    }
}

export default CANVAS;