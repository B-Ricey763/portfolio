import { animated, config, useSpring } from "@react-spring/three";
import { Box, calcPosFromAngles } from "@react-three/drei";
import { Props, ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { Camera, Euler, Mesh, Quaternion, Vector3 } from "three";

export default function Book(props: JSX.IntrinsicElements["group"] & Props) {
  const box = useRef<Mesh>(null);
  const rigidBody = useRef<RapierRigidBody>(null);
  const { camera } = useThree();
  const [held, setHeld] = useState(false);
  const rotationAxis = new Quaternion().setFromAxisAngle(
    new Vector3(1, 0, 0),
    Math.PI / 2,
  );

  const animateHeldBook = () => {
    const pos = camera.localToWorld(new Vector3(0, 0, -4)).toArray();
    const rot = camera.quaternion.clone().multiply(rotationAxis).toArray();

    api.start({
      position: held ? pos : [0, 0, 0],
      quaternion: held ? rot : [0, 0, 0, 0],
    });
  };

  const [springs, api] = useSpring(
    () => ({
      position: [0, 0, 0],
      quaternion: [0, 0, 0, 0],
      config: config.gentle,
    }),
    [],
  );

  useFrame((state) => {
    // if () {
    //   animateHeldBook();
    // }
  });

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    animateHeldBook();

    setHeld(!held);
  };

  return (
    // <RigidBody position={[0, 2, 0]} ref={rigidBody}>
    <animated.mesh onClick={onClick} ref={box} {...springs}>
      {props.children}
    </animated.mesh>
    // </RigidBody>
  );
}
