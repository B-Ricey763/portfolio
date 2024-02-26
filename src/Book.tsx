import { animated, config, useSpring } from "@react-spring/three";
import { Box } from "@react-three/drei";
import { ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { Camera, Euler, Mesh, Quaternion, Vector3 } from "three";

export default function Book() {
  const box = useRef<Mesh>(null);
  const rigidBody = useRef<RapierRigidBody>(null);
  const { camera } = useThree();
  const [held, setHeld] = useState(false);
  const origQuat = useRef<Quaternion>(null);

  const targetPos = camera.position.multiplyScalar(0.7).toArray();
  const { pos } = useSpring({
    pos: held ? targetPos : [0, 0, 0],
    config: config.default,
  });

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    // Make it velocity based
    // rigidBody.current?.setBodyType(2, true);
    if (held) {
      box.current?.setRotationFromQuaternion(new Quaternion());
    } else {
      box.current?.lookAt(camera.position);
    }

    setHeld(!held);
  };

  return (
    // <RigidBody position={[0, 2, 0]} ref={rigidBody}>
    <animated.mesh
      onClick={onClick}
      ref={box}
      position={pos.to((x, y, z) => [x, y, z])}
    >
      <boxGeometry args={[3, 3, 1]} />
      <meshPhongMaterial color="royalblue" />
    </animated.mesh>
    // </RigidBody>
  );
}
