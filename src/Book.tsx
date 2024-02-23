import { Box } from "@react-three/drei";
import {
  RapierRigidBody,
  RigidBody,
  useRevoluteJoint,
} from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { MeshBasicMaterial } from "three";

type BookProps = {
  width: number;
  length: number;
  height: number;
  thickness: number;
};

export default function Book({ width, length, height, thickness }: BookProps) {
  const frontCover = useRef<RapierRigidBody>(null);
  const spine = useRef<RapierRigidBody>(null);
  const backCover = useRef<RapierRigidBody>(null);

  const frontSpineJoint = useRevoluteJoint(frontCover, spine, [
    [width / 2, -thickness / 2, 0],
    [0, height / 2, 0],
    [0, 0, 1],
  ]);

  const backSpineJoint = useRevoluteJoint(backCover, spine, [
    [width / 2, thickness / 2, 0],
    [0, -height / 2, 0],
    [0, 0, 1],
    [0, Math.PI / 2],
  ]);

  useEffect(() => {
    frontSpineJoint.current?.setLimits(0, Math.PI / 2);
    backSpineJoint.current?.setLimits(-Math.PI / 2, 0);
    backSpineJoint.current?.configureMotorVelocity(-1, 0);
  }, []);

  const wireframe = new MeshBasicMaterial({ wireframe: false });
  return (
    <>
      <RigidBody position={[0, thickness + height, 0]} ref={frontCover}>
        <Box args={[width, thickness, length]} material={wireframe} />
      </RigidBody>
      <RigidBody
        position={[width / 2, thickness / 2 + height / 2, 0]}
        ref={spine}
      >
        <Box args={[thickness, height, length]} material={wireframe} />
      </RigidBody>
      <RigidBody ref={backCover}>
        <Box args={[width, thickness, length]} material={wireframe} />
      </RigidBody>
    </>
  );
}
