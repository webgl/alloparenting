import _ from 'lodash';

const UNFOCUS_CLASS = 'unfocus';
const { THREE, TWEEN } = window;


var container;
var camera, scene, renderer;
var mesh, geometry, material;

var mouseX = 0, mouseY = 0;
var start_time = Date.now();

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

import vertexShader from './vertex-shader';
import fragmentShader from './fragment-shader';

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

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');

    const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#1e4877");
    gradient.addColorStop(0.5, "#4584b4");

    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
    node.style.background = 'url(' + canvas.toDataURL('image/png') + ')';
    node.style.backgroundSize = '32px 100%';

    geometry = new THREE.Geometry();

    var texture = THREE.ImageUtils.loadTexture('cloud.png', null, this.animate);
    texture.magFilter = THREE.LinearMipMapLinearFilter;
    texture.minFilter = THREE.LinearMipMapLinearFilter;

    var fog = new THREE.Fog(0x4584b4, -100, 3000);

    material = new THREE.ShaderMaterial({
      uniforms: {
        "map": { type: "t", value: texture },
        "fogColor": { type: "c", value: fog.color },
        "fogNear": { type: "f", value: fog.near },
        "fogFar": { type: "f", value: fog.far },
      },
      vertexShader,
      fragmentShader,
      depthWrite: false,
      depthTest: false,
      transparent: true
    });

    var plane = new THREE.Mesh(new THREE.PlaneGeometry(64, 64));

    for (var i = 0; i < 8000; i++) {

      plane.position.x = Math.random() * 1000 - 500;
      plane.position.y = -Math.random() * Math.random() * 200 - 15;
      plane.position.z = i;
      plane.rotation.z = Math.random() * Math.PI;
      plane.scale.x = plane.scale.y = Math.random() * Math.random() * 1.5 + 0.5;

      THREE.GeometryUtils.merge(geometry, plane);
    }

    mesh = new THREE.Mesh(geometry, material);
    this.scene.add(mesh);

    mesh = new THREE.Mesh(geometry, material);
    mesh.position.z = -8000;
    this.scene.add(mesh);

    renderer = new THREE.WebGLRenderer({ antialias: false });
    renderer.setSize(window.innerWidth, window.innerHeight);
    node.appendChild(renderer.domElement);

    // document.addEventListener('mousemove', onDocumentMouseMove, false);
    // window.addEventListener('resize', onWindowResize, false);

    window.addEventListener('resize', this.onWindowResize, false);
  }

  // onDocumentMouseMove(event) {
  //
  //   mouseX = (event.clientX - windowHalfX) * 0.25;
  //   mouseY = (event.clientY - windowHalfY) * 0.15;
  //
  // }
  //
  // onWindowResize(event) {
  //
  //   camera.aspect = window.innerWidth / window.innerHeight;
  //   camera.updateProjectionMatrix();
  //
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //
  // }
  //
  // animate() {
  //
  //   requestAnimationFrame(animate);
  //
  //   position = ((Date.now() - start_time) * 0.03) % 8000;
  //
  //   camera.position.x += (mouseX - camera.position.x) * 0.01;
  //   camera.position.y += (-mouseY - camera.position.y) * 0.01;
  //   camera.position.z = -position + 8000;
  //
  //   renderer.render(scene, camera);
  //
  // }

  animate = (t) => {
    requestAnimationFrame(this.animate);
    TWEEN.update();
    this.controls.update();
    this.renderScene();

    _.each(this.cards, (card, i) => {
      if (card === this.selectedCard) return;
      if (i % 2 === 0) {
        card.position.x += Math.sin(t / 10000) * card.random;
        card.position.y += Math.cos(t / 10000) * card.random;
        card.position.z += Math.cos(t / 10000) * card.random;
      } else {
        card.position.x -= Math.sin(t / 10000) * card.random;
        card.position.y += Math.cos(t / 10000) * card.random;
        card.position.z += Math.cos(t / 10000) * card.random;
      }
    });
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
    if (renderer) {
      renderer.render(this.scene, this.camera);
    }
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
      cardObject.random = Math.random() / 2;
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

    const value = { rotation: 0 };
    new TWEEN.Tween(value)
    .to({ rotation: Math.PI * 2 }, duration)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .onUpdate(() => {
      this.selectedCard.rotation.y = value.rotation
    })
    .start();
  };

}