class Options {

  constructor() {

    this.amplitude = 10.0;
    this.frequency = 0.05;

    this.gui = new dat.GUI();

  }

  initGUI() {

    this.gui.close();

    this.gui.add(this, 'amplitude', 1.0, 15.0);
    this.gui.add(this, 'frequency', 0.01, 0.1);

  }

}