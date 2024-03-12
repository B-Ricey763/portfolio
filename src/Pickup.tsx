import { animated, config, useSpring } from "@react-spring/three";
import { Box, Sphere, calcPosFromAngles } from "@react-three/drei";
import { MeshProps, Props, ThreeElements, ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import React from "react";
import { useEffect, useRef, useState } from "react";
import { Camera, Euler, Group, Mesh, Object3D, Quaternion, Vector3 } from "three";

export default function Pickup(props: JSX.IntrinsicElements['group'] & Props) {
  const meshRef = useRef<Mesh>(null);
  const sphereRef = useRef<Mesh>(null);
  const { camera } = useThree();
  const [held, setHeld] = useState(true);
  const rotationAxis = new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0),
    Math.PI / 2,
  );

  const worldToLocalQuaternion = (src: Quaternion, object: Object3D) => {
    return src.premultiply(object.getWorldQuaternion(src).invert());
  }

  const animateHeldBook = () => {
    const cameraPos = camera.localToWorld(new Vector3(0, 0, -4));
    const pos = meshRef.current?.worldToLocal(cameraPos) ?? new Vector3(0, 0, 0);
    const cameraRot = camera.quaternion.clone()
    const worldQuat = meshRef.current?.getWorldQuaternion(new Quaternion()) ?? new Quaternion();
    const localRot = new Quaternion();

    api.start({
      position: held ? pos.toArray() : [0, 0, 0],
      quaternion: held ? localRot.toArray() : [0, 0, 0, 0],
    });
  };

  const [springs, api] = useSpring(
    () => ({
      position: [0, 0, 0],
      quaternion: [0, 0, 0, 0],
      config: config.default,
    }),
    [],
  );

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    animateHeldBook();

    setHeld(!held);
  };

  return (
    <group {...props} >
      {/*ts-ignore This is what the docs say to do!*/}
      <animated.mesh onClick={onClick} ref={meshRef} {...springs}>
        {props.children}
      </animated.mesh>
    </group>
  );
}
