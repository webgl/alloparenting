import _ from 'lodash';
import React, { Component } from 'react';

import parentsData from '../data/parents';
import { Grid, Card } from '../components/components';

const UNFOCUS_CLASS = 'unfocus';
const { THREE, TWEEN } = window;

class Discover extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      width: window.innerWidth,
      height: window.innerHeight,
    };

    this.duration = 900;
    this.selectedCard = null;
  }

  componentDidMount() {
    this.initScene();
  }

  initScene() {
    if (this.scene) return;

    const { width, height } = this.state;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(40, width / height, 1, 10000);
    this.camera.position.z = 2000;

    this.renderer = new THREE.CSS3DRenderer();
    this.renderer.setSize(width, height);
    this.rootNode.appendChild(this.renderer.domElement);

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
    this.setState({ width, height });
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  createCards() {
    const { width, height } = this.state;

    _.each(parentsData, (card, i) => {
      const cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.innerText = card.name;
      cardElement.onclick = e => {
        e.preventDefault();
        this.transformCard(i);
      };

      const spreadWidth = width * 4,
        spreadHeight = height,
        spreadDepth = width * 3;

      const cardObject = new THREE.CSS3DObject(cardElement);
      cardObject.position.x = Math.random() * spreadWidth - (spreadWidth / 2);
      cardObject.position.y = Math.random() * spreadHeight - (spreadHeight / 2);
      cardObject.position.z = Math.random() * spreadDepth - (10 * i);

      this.state.cards.push(cardObject);
      this.scene.add(cardObject);
    });
  }

  transformCard = (cardId) => {
    const { duration, camera } = this;
    const cameraPosition = camera.position;

    _.each(this.state.cards, card => card.element.classList.add(UNFOCUS_CLASS));

    if (this.selectedCard && this.selectedCard.originalPosition) {
      new TWEEN.Tween(this.selectedCard.position)
      .to(this.selectedCard.originalPosition, duration)
      .easing(TWEEN.Easing.Exponential.InOut)
      .start();
    }

    this.selectedCard = this.state.cards[cardId];
    this.selectedCard.originalPosition = { ...this.selectedCard.position };
    this.selectedCard.element.classList.remove(UNFOCUS_CLASS);

    new TWEEN.Tween(this.selectedCard.position)
    .to({ ...cameraPosition, z: cameraPosition.z - 500 }, duration)
    .easing(TWEEN.Easing.Exponential.InOut)
    .start();
  };

  render() {
    return (
      <div className="App"
           ref={(n => this.rootNode = n)}>
      </div>
    );
  }
}

export default Discover;
