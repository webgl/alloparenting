const { THREE } = window;

export default class Scene extends THREE.Scene {

  constructor(width, height) {

    super();

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(width, height);
    this.renderer.setClearColor(0x000000);

    this.camera = new THREE.PerspectiveCamera(50, width / height, 1, 2000);
    this.camera.position.z = 100;

    this.controls = new THREE.OrbitControls(this.camera);

  }

  render() {

    this.renderer.autoClearColor = true;
    this.renderer.render(this, this.camera);

  }

  resize(newWidth, newHeight) {

    this.camera.aspect = newWidth / newHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(newWidth, newHeight);

  }

}