import { animated, config, useSpring } from "@react-spring/three";
import { Box, Html, Sphere, calcPosFromAngles, Text } from "@react-three/drei";
import { MeshProps, Props, ThreeElements, ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import React, { Suspense } from "react";
import { useEffect, useRef, useState } from "react";
import { Camera, Euler, Group, Mesh, Object3D, Quaternion, Vector3 } from "three";
import { overlay } from "three/examples/jsm/nodes/Nodes.js";

type PickupProps = {
  rotationOffset: Quaternion;
  overlay: JSX.Element | null;
}

export default function Pickup(props: JSX.IntrinsicElements['group'] & Props & PickupProps) {
  const meshRef = useRef<Mesh>(null);
  const { camera } = useThree();
  const [held, setHeld] = useState(true);

  const animateHeldBook = () => {
    // we have to account for the local coords of the mesh
    const cameraPos = camera.localToWorld(new Vector3(0, 0, -4));
    const pos = meshRef.current?.worldToLocal(cameraPos) ?? new Vector3(0, 0, 0);
    // same with rotation 
    const worldQuat = meshRef.current?.getWorldQuaternion(new Quaternion()) ?? new Quaternion();
    const cameraQuat = camera.quaternion;
    const rot = worldQuat.invert().multiply(cameraQuat).multiply(props.rotationOffset);

    api.start({
      position: held ? pos.toArray() : [0, 0, 0],
      quaternion: held ? rot.toArray() : [0, 0, 0, 0],
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
        {!held &&
          <Html fullscreen>
            <div style={{ width: '40vw', height: '100vh', margin: 'auto' }}>
              <div style={{ color: 'white', textAlign: 'center', paddingTop: '10vh' }}>
                {props.overlay}
              </div>
            </div>
          </Html>
        }
        {props.children}
      </animated.mesh>
    </group>
  );
}
