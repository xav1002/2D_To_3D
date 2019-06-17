class topCanvas{
    constructor() {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/ (window.innerHeight / 2), 0.1, 10000);
        this.scene.add(this.camera);

        this.light = new THREE.AmbientLight(0xffffff, 5);
        this.scene.add(this.light);

        this.pointLight = new THREE.PointLight(0xffffff, 4);
        this.pointLight.position.set(5, 5, 5);
        this.scene.add(this.pointLight);

        function customCurve( scale ) {

            THREE.Curve.call( this );
        
            this.scale = ( scale === undefined ) ? 1 : scale;
        
        }
        
        customCurve.prototype = Object.create( THREE.Curve.prototype );
        customCurve.prototype.constructor = customCurve;
        
        customCurve.prototype.getPoint = function ( t ) {
        
            var tx = t * 5 - 2.5;
            var ty = 0;
            var tz = 0;
        
            return new THREE.Vector3( tx, ty, tz ).multiplyScalar( this.scale );
        
        };

        this.tubeLength = 100;
        this.path = new customCurve(this.tubeLength);
        console.log(this.path);
        this.tubeGeo = new THREE.TubeGeometry(this.path, 20, this.tubeLength / 8, 8, false);
        this.tubeMat = new THREE.MeshPhongMaterial({color: 'blue'});
        this.tubeMesh = new THREE.Mesh(this.tubeGeo, this.tubeMat);
        this.tubeMesh.position.z = -100;
        console.log(this.tubeMesh);
        this.scene.add(this.tubeMesh);

        this.cylinderGeo = new THREE.CylinderGeometry(this.tubeLength / 5, this.tubeLength / 5, this.tubeLength / 5, 100);
        this.cylinderMat = new THREE.MeshPhongMaterial({color: 'green'});
        this.rightCylinderMesh = new THREE.Mesh(this.cylinderGeo, this.cylinderMat);
        this.leftCylinderMesh = new THREE.Mesh(this.cylinderGeo, this.cylinderMat);
        this.rightCylinderMesh.position.z = -100;
        this.rightCylinderMesh.position.x = this.tubeLength / 10;
        this.leftCylinderMesh.position.z = -100;
        this.leftCylinderMesh.position.x = -this.tubeLength / 10;
        this.rightCylinderMesh.rotation.z = Math.PI / 2;
        this.leftCylinderMesh.rotation.z = Math.PI / 2;
        this.scene.add(this.rightCylinderMesh, this.leftCylinderMesh);

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