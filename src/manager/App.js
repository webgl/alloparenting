

class app {

  constructor() {

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.DELTA_TIME = 0;
    this.LAST_TIME = Date.now();

    this.scene = new Scene(this.width, this.height);
    this.plane = new Plane();

    this.scene.add(this.plane.mesh);

    const root = document.body.querySelector('.app');
    root.appendChild(this.scene.renderer.domElement);

    this.update = this.update.bind(this)

    this.addListeners();

    requestAnimationFrame(this.update);
  }

  onResize() {

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.scene.resize(this.width, this.height);
  }

  addListeners() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  update() {

    this.DELTA_TIME = Date.now() - this.LAST_TIME;
    this.LAST_TIME = Date.now();

    this.plane.update(this.DELTA_TIME);
    this.scene.render();

    requestAnimationFrame(this.update);

  }

}







new app();