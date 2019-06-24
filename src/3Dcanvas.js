/**
 * creates the top (3D) canvas in the app
 * also creates the tube and the sliding cylinders
 * having a bit of trouble with the x-axis positioning based on the curve; needs a ratio to make it more fitting
 */

class topCanvas{
    constructor() {
        this.scene = new THREE.Scene();

        this.camera = new THREE.OrthographicCamera(-window.innerWidth, window.innerWidth, window.innerHeight / 2, -window.innerHeight / 2, 1, 100000);

        // this.camera.position.set(0, 2000, 0);
        // this.camera.rotation.x = -Math.PI / 2;

        this.camera.position.set(0, 0, 2000);

        // this.camera.position.set(0, 2000, 2000);
        // this.camera.rotation.x = -Math.PI / 4;

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
        
            topCanvas.tx = t * 3 - 1.5;
            topCanvas.ty = -t * t + t;
            topCanvas.tz = -4 * t + 2;
        
            return new THREE.Vector3( topCanvas.tx, topCanvas.ty, topCanvas.tz ).multiplyScalar( this.scale );
        
        };

        this.tubeLength = parseFloat(this.renderer.domElement.style.width) / 2.7;
        this.path = new customCurve(this.tubeLength);
        this.tubeGeo = new THREE.TubeGeometry(this.path, 20, this.tubeLength / 8, 8, false);
        this.tubeMat = new THREE.MeshPhongMaterial({color: 'blue'});
        this.tubeMesh = new THREE.Mesh(this.tubeGeo, this.tubeMat);
        this.scene.add(this.tubeMesh);

        this.cylinderGeo = new THREE.CylinderGeometry(this.tubeLength / 5, this.tubeLength / 5, this.tubeLength / 5, 100);
        this.cylinderMat = new THREE.MeshPhongMaterial({color: 'green'});
        this.rightCylinderMesh = new THREE.Mesh(this.cylinderGeo, this.cylinderMat);
        this.leftCylinderMesh = new THREE.Mesh(this.cylinderGeo, new THREE.MeshPhongMaterial({color: 'red'}));

        this.rightCylinderRotationZ = Math.atan((this.path.getPoints(19)[10].y - this.path.getPoints(19)[9].y) / (this.path.getPoints(19)[10].x - this.path.getPoints(19)[9].x)) + Math.PI / 2;
        this.rightCylinderRotationY = Math.atan((this.path.getPoints(19)[10].z - this.path.getPoints(19)[9].z) / (this.path.getPoints(19)[10].x - this.path.getPoints(19)[9].x)) + Math.PI / 2;
        this.rightCylinderMesh.position.z = -(this.path.getPoints(19)[9].z);
        this.rightCylinderMesh.position.x = this.path.getPoints(19)[10].x;
        this.rightCylinderMesh.position.y = this.path.getPoints(19)[10].y;

        this.leftCylinderRotationZ = Math.atan((this.path.getPoints(19)[9].y - this.path.getPoints(19)[8].y) / (this.path.getPoints(19)[9].x - this.path.getPoints(19)[8].x)) + Math.PI / 2;
        this.leftCylinderRotationY = Math.atan((this.path.getPoints(19)[9].z - this.path.getPoints(19)[8].z) / (this.path.getPoints(19)[9].x - this.path.getPoints(19)[8].x)) + Math.PI / 2;
        this.leftCylinderMesh.position.z = -(this.path.getPoints(19)[10].z);
        this.leftCylinderMesh.position.x = this.path.getPoints(19)[9].x;
        // Old way of defining the positions of the cylinders
        // -this.tubeLength / 8;
        this.leftCylinderMesh.position.y = this.path.getPoints(19)[9].y;
    
        this.rightCylinderMesh.rotation.z = this.rightCylinderRotationZ;
        this.rightCylinderMesh.rotation.y = this.rightCylinderRotationY;
        this.leftCylinderMesh.rotation.z = this.leftCylinderRotationZ;
        this.leftCylinderMesh.rotation.y = this.leftCylinderRotationY;

        this.scene.add(this.rightCylinderMesh, this.leftCylinderMesh);

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