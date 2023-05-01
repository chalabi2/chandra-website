import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@chakra-ui/react';
import { useAnimations, useGLTF, useTexture } from '@react-three/drei';
import { Color } from 'three';
import flowerModel from './components/server_rack.glb';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { PerspectiveCamera } from '@react-three/drei';

const Model = () => {
    const gltfResult = useGLTF(flowerModel);
    const gltf = gltfResult as unknown as GLTF;
    const { scene, animations } = gltf;
    const meshRef = useRef<THREE.Object3D | null>(null);
  
    const { actions, mixer } = useAnimations(animations || [], meshRef);
  
    useEffect(() => {
      if (scene) {
        if (scene) {
          scene.scale.set(1, 1, 1);
          scene.rotation.y = -5;
          Object.values(actions)
            .filter((action) => action !== null)
            .forEach((action) => {
              action!.setLoop(THREE.LoopPingPong, Infinity); // Set the loop style to ping-pong
              action!.timeScale = 0.2; // Reset the timeScale to its original value
              action!.time = 2.2; // Set the initial time of the animation to 2
              action!.play();
            });
        }
      }
    }, [scene, actions, mixer]);
  
    useFrame((state, delta) => {
      if (meshRef.current) {
        mixer.update(delta);
        if (mixer.timeScale < 0 && mixer.time < 2) {
          mixer.timeScale = 0; // Stop the animation when reversing
          mixer.time = 2; // Set the position of the animation to 2
        } else {
          mixer.timeScale = 0.5; // Set timeScale to a positive value
        }
      }
    });
  
    return (
      <group ref={meshRef}>
        <primitive object={scene} position={[-2, -2.5, 0]}/>
      </group>
    );
  };

export default function ServerRack() {
  return (
<Box zIndex={-1}>
<Canvas style={{ position: 'absolute', top: 9, left: 0 }}>
  <ambientLight />
  <pointLight position={[0, 0, 10]} shadow />
  <Model />
</Canvas>
    </Box>
  );
}
