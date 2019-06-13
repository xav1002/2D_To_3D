const create3DCanvas = function() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
    scene.add(camera);

    light = new THREE.PointLight(0xffffff, 1);
    light.position.set(0, 10, -10);
    scene.add(light);

    cube = new THREE.Mesh(new THREE.CubeGeometry(5, 5, 5), new THREE.MeshPhongMaterial({color: 'blue'}));
    cube.position.set(0, 0, -10);
    scene.add(cube);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight / 2);
    document.body.appendChild(renderer.domElement);

    console.log(light, cube);
}

export default create3DCanvas;