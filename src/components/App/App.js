import _ from 'lodash';
import React, { Component } from 'react';

import parentsData from '../../data/parents';
import { Grid, Card } from '../components';
import './App.css';

const { THREE, TWEEN } = window;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      width: window.innerWidth,
      height: window.innerHeight,
    };

    this.duration = 900;
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
    this.controls.rotateSpeed = 0.5;

    this.createCards();
    this.animate();

    this.controls.addEventListener('change', this.renderScene);
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
    this.renderScene();
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  createCards() {
    const { width, height, cards } = this.state;

    _.each(parentsData, (card, i) => {
      const cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.innerText = card.name;
      cardElement.onclick = e => {
        e.preventDefault();
        this.transformCards(i);
      };

      const cardObject = new THREE.CSS3DObject(cardElement);
      cardObject.position.x = Math.random() * width - (width / 2);
      cardObject.position.y = Math.random() * height - (height / 2);
      cardObject.position.z = Math.random() * width - (10 * i);

      this.state.cards.push(cardObject);
      this.scene.add(cardObject);
    });
  }

  rotateCard = (cardId) => {
    const { duration } = this;
    const card = this.state.cards[cardId];

    new TWEEN.Tween(card.rotation)
    .to({
      y: Math.PI,
    }, Math.random() * duration + duration)
    .easing(TWEEN.Easing.Exponential.InOut)
    .start();
  };

  transformCards = (cardId) => {
    const { duration } = this;
    const { cards } = this.state;

    _.each(cards, (card, i) => {
      if (cardId === i) {
        card.originalPosition = { ...card.position };
        card.element.classList.remove('unfocus');
        new TWEEN.Tween(card.position)
        .to({
          x: 0,
          y: 0,
          z: 800
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();
      }
      else {
        card.element.classList.add('unfocus');
        new TWEEN.Tween(card.position)
        .to({
          ...card.originalPosition,
          z: -100
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();
      }
    });
  };

  render() {
    return (
      <div className="App"
           ref={(n => this.rootNode = n)}>
        <Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
