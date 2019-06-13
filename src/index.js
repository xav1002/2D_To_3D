import create2DCanvas from './2Dcanvas';

var scene, camera, light, cube, renderer;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(75, window.innerWidth/ (window.innerHeight / 2), 0.1, 10000);
scene.add(camera);

light = new THREE.PointLight(0xffffff, 1);
light.position.set(0, 10, -10);
scene.add(light);

cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), new THREE.MeshPhongMaterial({color: 'blue'}));
cube.position.set(0, 0, -10);
scene.add(cube);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight / 2);
renderer.setClearColor('rgb(100, 100, 100)');
document.body.appendChild(renderer.domElement);

console.log(light, cube, camera);

create2DCanvas();

const animate = function() {
    requestAnimationFrame(function() {animate()} );
    renderer.render(scene, camera);
}

animate();