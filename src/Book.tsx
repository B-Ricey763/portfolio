import { animated, config, useSpring } from "@react-spring/three";
import { Box } from "@react-three/drei";
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

  const targetPos = camera.position.multiplyScalar(0.5).toArray();
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
      const targetQuat = new Quaternion()
        .copy(camera.quaternion)
        .multiply(rotationAxis);
      box.current?.setRotationFromQuaternion(targetQuat);
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
      {props.children}
    </animated.mesh>
    // </RigidBody>
  );
}
