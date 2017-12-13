import * as React from 'react';
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three';

interface Props {}
interface State {}

export class Logo extends React.Component<Props, State> {
  componentDidMount() {
    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(renderer.domElement);

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0x00ffff });
    const cube = new Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 2.5;

    cube.rotation.x = 0.5;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.y += 0.005;
      renderer.render(scene, camera);
    }
    animate();
  }

  render() {
    return <div ref={node => (this.container = node)} />;
  }
}
