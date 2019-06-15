class topCanvas{
    constructor() {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/ (window.innerHeight / 2), 0.1, 10000);
        this.scene.add(this.camera);

        this.light = new THREE.AmbientLight(0xffffff, 5);
        this.scene.add(this.light);

        this.cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), new THREE.MeshPhongMaterial({color: 'blue'}));
        this.cube.position.set(0, 0, -10);
        this.scene.add(this.cube);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight / 2);
        this.renderer.setClearColor('rgb(100, 100, 100)');
        document.body.appendChild(this.renderer.domElement);

        this.animate();
    }

    animate() {
        const topCanvas = this;
        requestAnimationFrame(function() {topCanvas.animate()} );

        topCanvas.renderer.render(topCanvas.scene, topCanvas.camera);
    }
}

export default topCanvas;