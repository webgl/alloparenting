class Plane {

  constructor() {

    this.size = 1000;
    this.segments = 200;

    this.options = new Options();
    this.options.initGUI();

    this.uniforms = {
      u_amplitude: { value: this.options.amplitude },
      u_frequency: { value: this.options.frequency },
      u_time: { value: 0.0 }
    };

    this.geometry = new THREE.PlaneBufferGeometry(this.size, this.size, this.segments, this.segments);
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: document.getElementById('planeVS').innerHTML,
      fragmentShader: document.getElementById('planeFS').innerHTML,
      side: THREE.DoubleSide,
      wireframe: true
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotation.x = 360;

  }

  update(dt) {
    this.uniforms.u_amplitude.value = this.options.amplitude;
    this.uniforms.u_frequency.value = this.options.frequency;
    this.uniforms.u_time.value += dt / 1000;
  }
}