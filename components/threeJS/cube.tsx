import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@chakra-ui/react';
import { useAnimations, useGLTF, useTexture } from '@react-three/drei';
import { Color } from 'three';
import flowerModel from './components/justflowernostem.glb';
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
      const changeMaterialColor = (object: THREE.Object3D) => {
        if (object instanceof THREE.Mesh) {
          const material = object.material as THREE.MeshStandardMaterial;
          const newColor = new Color(0x09d6d6); // Change this value to the desired color (here, it's red)
          material.color = newColor;
          console.log(object.material)
          material.onBeforeCompile = (shader) => {
            shader.uniforms.newColor = { value: newColor };
            shader.fragmentShader = `
              uniform vec3 newColor;
            ` + shader.fragmentShader;
  
            shader.fragmentShader = shader.fragmentShader.replace(
              'vec4 diffuseColor = vec4( diffuse, opacity );',
              `
                vec4 diffuseColor = vec4( diffuse, opacity );
                diffuseColor.rgb = mix(diffuseColor.rgb, newColor, 0.5);
              `
            );
          };
        }
      };
      
      scene.traverse(changeMaterialColor);
    if (scene) {
      scene.scale.set(0.55, 0.55, 0.55);
      scene.rotation.x = 1;
      Object.values(actions)
        .filter((action) => action !== null)
        .forEach((action) => {
          action!.setLoop(THREE.LoopOnce, 1); // Set the loop style to LoopOnce
          action!.clampWhenFinished = true;
          action!.timeScale = 0.2; // Reset the timeScale to its original value
          action!.time = 2.5; // Set the initial time of the animation to 2
          action!.play();
        });
    }}
}, [scene, actions, mixer]);

  useFrame((state, delta) => {
    scene.rotation.y += 0.001;
  });
  

  return (
    <group ref={meshRef}>
      <primitive object={scene} position={[0,0.1,0]} />
    </group>
  );
};

export default function LotusFlower() {
  return (
<Box maxW="400px" maxH="400px" zIndex={-1}>
<Canvas style={{ position: 'absolute', top: -9, left: 300, blockSize: 800, height: 1000 }}>
  <ambientLight />
  <pointLight position={[10, 10, 10]} shadow />
  <Model />
</Canvas>
    </Box>
  );
}
