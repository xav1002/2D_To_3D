class SVG {
    constructor() {
        this.svg = document.createElement('svg');
        this.svg.id = 'svg';
        this.svg.width = window.innerWidth;
        this.svg.height = window.innerHeight / 2;
        document.body.appendChild(this.svg);

        const a = this;
        this.rectangles = [
            a.horizontalRect = [],
            a.verticalRect = []
        ];

        this.init();
    }

    init() {
        const a = this;

        for(var i = 0; i < 20; i += 1) {
            a.horizontalRect.push(document.createElement('rect'));
            a.horizontalRect[i].position
        }
    }
}

export default SVG;