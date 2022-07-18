import * as THREE from './three.module.js';



let container;
let camera, controls, scene, raycaster, renderer;
let boxTexture, object;

let theta = 0;

const mouse = new THREE.Vector2();
const radius = 500;
const frustumSize = 1000;

let mouseX = 0, mouseY = 0;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

document.addEventListener( 'mousemove', onDocumentMouseMove );
document.addEventListener( 'mousemove', onDocumentMouseMove );


init();
animate();

function init() {

  container = document.createElement( 'div' );
  document.body.appendChild( container );

  const aspect = window.innerWidth / window.innerHeight;
  camera = new THREE.OrthographicCamera( frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 0.1, 1000 );

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xFFFFFF );

  const ambientLight = new THREE.AmbientLight( 0xFFFFFF, 1 );
  scene.add( ambientLight );


  var textureLoader = new THREE.TextureLoader();
  boxTexture = textureLoader.load("images/snail.jpeg");

  // Create mesh with these textures
  object = new THREE.Mesh(
    new THREE.SphereGeometry( 25, 25, 25 ),
    new THREE.MeshPhongMaterial({
      color: 0xffffff,
      map: boxTexture,
    })
  );
  object.material.side = THREE.DoubleSide;

  scene.add( object );

  // const geometry = new THREE.BoxGeometry( 300, 300, 300 );
  // const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
  //
  // // const texture = new THREE.TextureLoader().load( "images/snail.jpeg" );
  // const material = new THREE.MeshBasicMaterial({ map: loader.load("images/snail.jpeg") });
  // const object = new THREE.Mesh( geometry, material );
  //
  // scene.add( object );

  camera.zoom = 20;
  camera.updateProjectionMatrix();

  raycaster = new THREE.Raycaster();

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );

  window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

  const aspect = window.innerWidth / window.innerHeight;

  camera.left = - frustumSize * aspect / 2;
  camera.right = frustumSize * aspect / 2;
  camera.top = frustumSize / 2;
  camera.bottom = - frustumSize / 2;

  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseMove( event ) {

				mouseX = ( event.clientX - windowHalfX ) / 120;
				mouseY = ( event.clientY - windowHalfY ) / 120;

}

function animate() {

  requestAnimationFrame( animate );
  render();

}

$( "body" ).click(function() {

DeviceOrientationEvent.requestPermission()

  // .then(response => {
  //   if (response == 'granted') {
  //
  //   }
  // });

});




function render() {

  object.rotation.x += 0.02;
  object.rotation.y -= 0.008;

  camera.rotation.x += ( mouseX - camera.rotation.x ) * .05;
  camera.rotation.y += ( - mouseY - camera.rotation.y ) * .05;

  window.addEventListener('deviceorientation', function(e) {
    var alphaRotation = e.alpha / 10;
    var betaRotation = e.beta / 10;
    var gammaRotation = e.gamma / 10;

    // camera.rotation.x += ( alphaRotation - camera.rotation.x) * .00005;
    camera.rotation.y += ( betaRotation - camera.rotation.y) * .00005;
    camera.rotation.z += ( gammaRotation - camera.rotation.z) * .000005;
  });

  // camera.lookAt( scene.position );
  renderer.render( scene, camera );

}
