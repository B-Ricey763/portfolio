import { Box, Plane } from "@react-three/drei";
import {
  RapierRigidBody,
  RigidBody,
  useRevoluteJoint,
} from "@react-three/rapier";
import { Ref, RefObject, useRef } from "react";
import { Vector3 } from "three";

type PageProps = {
  width: number;
  height: number;
  position: Vector3;
  spinePos: Vector3;
  spine: RefObject<RapierRigidBody>;
};

export default function Page({
  width,
  height,
  position,
  spinePos,
  spine,
}: PageProps) {
  const ref = useRef<RapierRigidBody>(null);

  const joint = useRevoluteJoint(ref, spine, [
    [-width / 2, 0, 0],
    spinePos,
    [0, 0, 1],
  ]);

  return (
    <RigidBody position={position} ref={ref}>
      <Box args={[width, 0.01, height]} />
    </RigidBody>
  );
}
