/**
 * creates the top (3D) canvas in the app
 * also creates the tube and the sliding cylinders
 * having a bit of trouble with the x-axis positioning based on the curve; needs a ratio to make it more fitting
 */

class topCanvas{
    constructor() {
        this.scene = new THREE.Scene();

        this.camera = new THREE.OrthographicCamera(-window.innerWidth, window.innerWidth, window.innerHeight, -window.innerHeight, 1, 1000);
        this.scene.add(this.camera);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight / 2);
        this.renderer.setClearColor('rgb(100, 100, 100)');
        document.body.appendChild(this.renderer.domElement);

        this.light = new THREE.AmbientLight(0xffffff, 5);
        this.scene.add(this.light);

        this.pointLight = new THREE.PointLight(0xffffff, 4);
        this.pointLight.position.set(5, 5, 5);
        this.scene.add(this.pointLight);

        const topCanvas = this;

        /**
         * 
         * @param {number} scale 
         * determines the path that the tube will take
         */

        function customCurve( scale ) {

            THREE.Curve.call( this );
        
            this.scale = ( scale === undefined ) ? 1 : scale;
        
        }
        
        customCurve.prototype = Object.create( THREE.Curve.prototype );
        customCurve.prototype.constructor = customCurve;
        
        customCurve.prototype.getPoint = function ( t ) {
        
            topCanvas.tx = t * 5 - 2.5;
            topCanvas.ty = Math.cos(t);
            // console.log(topCanvas.ty, t);
            topCanvas.tz = 0;
        
            return new THREE.Vector3( topCanvas.tx, topCanvas.ty, topCanvas.tz ).multiplyScalar( this.scale );
        
        };

        this.tubeLength = parseFloat(this.renderer.domElement.style.width) / 2.7;
        this.path = new customCurve(this.tubeLength);
        console.log(this.tubeLength / 4);
        this.tubeGeo = new THREE.TubeGeometry(this.path, 20, this.tubeLength / 8, 8, false);
        this.tubeMat = new THREE.MeshPhongMaterial({color: 'blue'});
        this.tubeMesh = new THREE.Mesh(this.tubeGeo, this.tubeMat);
        this.tubeMesh.position.z = -1000;
        console.log(this.tubeMesh);
        this.scene.add(this.tubeMesh);

        this.cylinderGeo = new THREE.CylinderGeometry(this.tubeLength / 5, this.tubeLength / 5, this.tubeLength / 4, 100);
        this.cylinderMat = new THREE.MeshPhongMaterial({color: 'green'});
        this.rightCylinderMesh = new THREE.Mesh(this.cylinderGeo, this.cylinderMat);
        this.leftCylinderMesh = new THREE.Mesh(this.cylinderGeo, new THREE.MeshPhongMaterial({color: 'red'}));
        this.rightCylinderMesh.position.z = -1000;
        this.rightCylinderMesh.position.x = this.path.getPoints(19)[10].x;
        this.rightCylinderMesh.position.y = this.path.getPoints(19)[10].y;
        this.leftCylinderMesh.position.z = -1000;
        this.leftCylinderMesh.position.x = this.path.getPoints(19)[9].x;
        // -this.tubeLength / 8;
        this.leftCylinderMesh.position.y = this.path.getPoints(19)[9].y;
        this.rightCylinderMesh.rotation.z = Math.PI / 2;
        this.leftCylinderMesh.rotation.z = Math.PI / 2;
        this.scene.add(this.rightCylinderMesh, this.leftCylinderMesh);

        // this.ringGeo = new THREE.CylinderGeometry(this.tubeLength / 7, this.tubeLength / 7, this.tubeLength / 20, 100);
        // this.ringMesh = new THREE.Mesh(this.ringGeo, this.cylinderMat);
        // this.ringMesh.position.x = this.tubeLength * 5 / 2;
        // this.ringMesh.position.z = -1000;
        // this.ringMesh.rotation.z = Math.PI / 2;
        // this.scene.add(this.ringMesh);

        this.animate();
    }

    /**
     * this is the animate function
     */

    animate() {
        const topCanvas = this;
        requestAnimationFrame(function() {topCanvas.animate()} );

        topCanvas.renderer.render(topCanvas.scene, topCanvas.camera);
    }
}

export default topCanvas;