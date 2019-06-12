const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
scene.add(camera);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const canvas = document.createElement('canvas');
canvas.id = '2Dcanvas';
document.body.appendChild(canvas);