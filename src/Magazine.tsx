/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ../portolfio/public/magazine-transformed.glb --transform 
Files: ../portolfio/public/magazine-transformed.glb [379.49KB] > /Users/bricey/projects/portfolio/magazine-transformed.glb [239.1KB] (37%)
*/
import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Page001: THREE.Mesh;
    Page002: THREE.Mesh;
  };
  materials: {
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Scene";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export default function Magazine(
  props: JSX.IntrinsicElements["group"] & { page: number },
) {
  const FRAMES_PER_SEC = 24;
  const PAGE_FLIP_FRAMES = 32;
  const group = useRef<THREE.Group>();
  const actionRef = useRef<THREE.AnimationAction>();
  const keyframeRef = useRef(0);
  const { nodes, materials, animations } = useGLTF(
    "/magazine-transformed.glb",
  ) as GLTFResult;
  // Need to figure out type definitions here
  const { actions } = useAnimations(animations, group);

  const calcFrame = (pg: number) => {
    return (PAGE_FLIP_FRAMES * pg) / FRAMES_PER_SEC;
  };

  useEffect(() => {
    actions.Scene?.setLoop(THREE.LoopOnce, 1);
    actions.Scene?.play();

    actionRef!.current = actions.Scene ?? undefined;
  }, [actions.Scene]);

  useEffect(() => {
    keyframeRef.current = calcFrame(props.page);
  }, [props.page]);

  useFrame(() => {
    if (actionRef.current) {
      const diff = actionRef.current.time - keyframeRef.current;
      if (Math.abs(diff) < 0.1) {
        actionRef.current.timeScale = 0;
      } else if (diff > 0) {
        actionRef.current.timeScale = -1;
      } else {
        actionRef.current.timeScale = 1;
      }
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Page001"
          castShadow
          receiveShadow
          geometry={nodes.Page001.geometry}
          material={materials["Material.002"]}
          morphTargetDictionary={nodes.Page001.morphTargetDictionary}
          morphTargetInfluences={nodes.Page001.morphTargetInfluences}
          position={[0, 0.001, 0]}
        />
        <mesh
          name="Page002"
          castShadow
          receiveShadow
          geometry={nodes.Page002.geometry}
          material={materials["Material.003"]}
          morphTargetDictionary={nodes.Page002.morphTargetDictionary}
          morphTargetInfluences={nodes.Page002.morphTargetInfluences}
        />
        <group
          name="DeformAxis"
          rotation={[Math.PI / 2, 0.273, 0]}
          scale={[1.36, 1.239, 1]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/magazine-transformed.glb");
