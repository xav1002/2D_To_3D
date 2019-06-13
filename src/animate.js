const animate = function() {
    requestAnimationFrame(function() {animate()} );
    renderer.render(scene, camera);
}

export default animate;