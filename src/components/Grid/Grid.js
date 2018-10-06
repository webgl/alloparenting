import * as THREE from 'three';
import React, { Component } from 'react';

import './Grid.css';

window.THREE = THREE;
require('../../utils/tween');
require('../../utils/controls');
require('../../utils/renderer');


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      table: [],
      sphere: [],
      helix: [],
      grid: []
    };

    this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 3000;

    // scene = new THREE.Scene();
    //
    // // table
    //
    // for (let i = 0; i < table.length; i += 5) {
    //
    //   var element = document.createElement('div');
    //   element.className = 'element';
    //   element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')';
    //
    //   var number = document.createElement('div');
    //   number.className = 'number';
    //   number.textContent = (i / 5) + 1;
    //   element.appendChild(number);
    //
    //   var symbol = document.createElement('div');
    //   symbol.className = 'symbol';
    //   symbol.textContent = table[i];
    //   element.appendChild(symbol);
    //
    //   var details = document.createElement('div');
    //   details.className = 'details';
    //   details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
    //   element.appendChild(details);
    //
    //   var object = new THREE.CSS3DObject(element);
    //   object.position.x = Math.random() * 4000 - 2000;
    //   object.position.y = Math.random() * 4000 - 2000;
    //   object.position.z = Math.random() * 4000 - 2000;
    //   scene.add(object);
    //
    //   objects.push(object);
    //
    //   //
    //
    //   var object = new THREE.Object3D();
    //   object.position.x = (table[i + 3] * 140) - 1330;
    //   object.position.y = -(table[i + 4] * 180) + 990;
    //
    //   targets.table.push(object);
    //
    // }
    //
    // // sphere
    //
    // var vector = new THREE.Vector3();
    //
    // for (var i = 0, l = objects.length; i < l; i++) {
    //
    //   var phi = Math.acos(-1 + (2 * i) / l);
    //   var theta = Math.sqrt(l * Math.PI) * phi;
    //
    //   var object = new THREE.Object3D();
    //
    //   object.position.setFromSphericalCoords(800, phi, theta);
    //
    //   vector.copy(object.position).multiplyScalar(2);
    //
    //   object.lookAt(vector);
    //
    //   targets.sphere.push(object);
    //
    // }
    //
    // // helix
    //
    // var vector = new THREE.Vector3();
    //
    // for (var i = 0, l = objects.length; i < l; i++) {
    //
    //   var theta = i * 0.175 + Math.PI;
    //   var y = -(i * 8) + 450;
    //
    //   var object = new THREE.Object3D();
    //
    //   object.position.setFromCylindricalCoords(900, theta, y);
    //
    //   vector.x = object.position.x * 2;
    //   vector.y = object.position.y;
    //   vector.z = object.position.z * 2;
    //
    //   object.lookAt(vector);
    //
    //   targets.helix.push(object);
    //
    // }
    //
    // // grid
    //
    // for (var i = 0; i < objects.length; i++) {
    //
    //   var object = new THREE.Object3D();
    //
    //   object.position.x = ((i % 5) * 400) - 800;
    //   object.position.y = (-(Math.floor(i / 5) % 5) * 400) + 800;
    //   object.position.z = (Math.floor(i / 25)) * 1000 - 2000;
    //
    //   targets.grid.push(object);
    //
    // }
    //
    // //
    //
    // renderer = new THREE.CSS3DRenderer();
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // document.getElementById('container').appendChild(renderer.domElement);
    //
    // //
    //
    // controls = new THREE.TrackballControls(camera, renderer.domElement);
    // controls.rotateSpeed = 0.5;
    // controls.minDistance = 500;
    // controls.maxDistance = 6000;
    // controls.addEventListener('change', render);
    //
    // var button = document.getElementById('table');
    // button.addEventListener('click', function(event) {
    //
    //   transform(targets.table, 2000);
    //
    // }, false);
    //
    // var button = document.getElementById('sphere');
    // button.addEventListener('click', function(event) {
    //
    //   transform(targets.sphere, 2000);
    //
    // }, false);
    //
    // var button = document.getElementById('helix');
    // button.addEventListener('click', function(event) {
    //
    //   transform(targets.helix, 2000);
    //
    // }, false);
    //
    // var button = document.getElementById('grid');
    // button.addEventListener('click', function(event) {
    //
    //   transform(targets.grid, 2000);
    //
    // }, false);
    //
    // transform(targets.table, 2000);
    //
    // //
    //
    // window.addEventListener('resize', onWindowResize, false);
  }

  render() {
    return (
      <ul className="Grid">
        {this.props.children}
      </ul>
    );
  }
}

export default App;
