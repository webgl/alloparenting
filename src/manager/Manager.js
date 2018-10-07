import _ from 'lodash';

const UNFOCUS_CLASS = 'unfocus';
const { THREE, TWEEN } = window;

export default class Manager {

  constructor() {
    this.cards = [];
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.duration = 900;
    this.selectedCard = null;
  }

  init(node) {
    if (this.scene) return;

    const { width, height } = this;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(40, width / height, 1, 10000);
    this.camera.position.z = 2000;

    this.renderer = new THREE.CSS3DRenderer();
    this.renderer.setSize(width, height);
    node.appendChild(this.renderer.domElement);

    this.controls = new THREE.TrackballControls(this.camera, this.renderer.domElement);
    this.controls.keys = [65, 83, 32];
    this.controls.noRotate = true;

    this.createCards();
    this.animate();

    window.addEventListener('resize', this.onWindowResize, false);
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    TWEEN.update();
    this.controls.update();
    this.renderScene();
  };

  onWindowResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.width = width;
    this.height = height;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  createCards(cards) {
    const { width, height } = this;

    _.each(cards, (card, i) => {
      card.onclick = e => {
        e.preventDefault();
        this.transformCard(i);
      };

      const spreadWidth = width * 6,
        spreadHeight = height * 4,
        spreadDepth = width * 6;

      const cardObject = new THREE.CSS3DObject(card);
      cardObject.position.x = Math.random() * spreadWidth - (spreadWidth / 2);
      cardObject.position.y = Math.random() * spreadHeight - (spreadHeight / 2);
      cardObject.position.z = Math.random() * spreadDepth - (10 * i);

      this.cards.push(cardObject);
      this.scene.add(cardObject);
    });
  }

  transformCard = (cardId) => {
    const { duration, camera } = this;
    const cameraPosition = camera.position;

    _.each(this.cards, card => card.element.classList.add(UNFOCUS_CLASS));

    if (this.selectedCard && this.selectedCard.originalPosition) {
      new TWEEN.Tween(this.selectedCard.position)
      .to(this.selectedCard.originalPosition, duration)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();
    }

    this.selectedCard = this.cards[cardId];
    this.selectedCard.originalPosition = { ...this.selectedCard.position };
    this.selectedCard.element.classList.remove(UNFOCUS_CLASS);

    new TWEEN.Tween(this.selectedCard.position)
    .to({ ...cameraPosition, z: cameraPosition.z - 1000 }, duration)
    .easing(TWEEN.Easing.Exponential.InOut)
    .start();
  };

}