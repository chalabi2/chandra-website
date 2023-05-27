import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, Skeleton, SkeletonCircle } from '@chakra-ui/react';
import { useAnimations, useGLTF, useProgress, useTexture } from '@react-three/drei';
import { Color } from 'three';
import flowerModel from './components/justflowernostem.glb';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { useBreakpointValue } from '@chakra-ui/react';
import { Html } from '@react-three/drei';



const Model = ({ setIsLoading }: { setIsLoading: (isLoading: boolean) => void }) => {
  const gltfResult = useGLTF(flowerModel);
  const gltf = gltfResult as unknown as GLTF;
  const { scene, animations } = gltf;
  const { active, progress, total } = useProgress();
  const meshRef = useRef<THREE.Object3D | null>(null);

  const scale = useBreakpointValue({ base: 0.0 , md: 0.55 });

  const { actions, mixer } = useAnimations(animations || [], meshRef);

  useEffect(() => {
    if (!active && progress === total) {
      setIsLoading(false);
    }
  }, [active, progress, total, setIsLoading]);

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
      scene.scale.set(scale ?? 0.55, scale ?? 0.55, scale ?? 0.55);
      scene.rotation.x = 1.2;
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
}, [scene, actions, mixer, scale]);

  useFrame((state, delta) => {

  });
  

  return (
    <group ref={meshRef}>
      <primitive object={scene} position={[0,-0,0]} />
    </group>
  );
};

export default function LotusFlower({ onLoad }: { onLoad: () => void }) {

  const [isLoading, setIsLoading] = useState(true);

  const handleLoaded = () => {
    setIsLoading(false);
    if (onLoad) {
      onLoad();
    }
  }


  
  const flowerTop = useBreakpointValue({ base: "125px", md: "140px" });
const flowerLeft = useBreakpointValue({ base: "30px", md: "700px", sm: "100px",  });
const flowerSize = useBreakpointValue({ base: "400px", md: "800px" });

  return (
    <Box maxW={flowerSize} maxH={flowerSize} zIndex={-1}>
      <Canvas
        style={{
          position: "absolute",
          top: flowerTop,
          left: flowerLeft,
          blockSize: 800,
          height: 1000,
          width: flowerSize,
          zIndex: -100
        }}
      >
        <ambientLight />
        <pointLight position={[-20, -80, 10]} shadow />
        <Model setIsLoading={setIsLoading} />
      </Canvas>
    </Box>
  );
}