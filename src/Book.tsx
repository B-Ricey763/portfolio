import { Box, useCamera, useScroll } from "@react-three/drei";
import {
  RapierRigidBody,
  RigidBody,
  useRevoluteJoint,
  RigidBodyTypeString,
  vec3,
} from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import { MeshBasicMaterial } from "three";
import Page from "./Page";
import * as THREE from "three";
import { ThreeEvent, useFrame } from "@react-three/fiber";

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
  const goalPos = new THREE.Vector3(0, 2, -1);

  const [held, setHeld] = useState(false);

  const frontSpineJoint = useRevoluteJoint(spine, frontCover, [
    [thickness * 0.5, height * 0.5, height * 0.5],
    [-width * 0.5, -thickness * 0.5, height * 0.5],
    [0, 0, 1],
  ]);

  const backSpineJoint = useRevoluteJoint(spine, backCover, [
    [thickness * 0.5, -height * 0.5, height * 0.5],
    [-width * 0.5, thickness * 0.5, height * 0.5],
    [0, 0, 1],
  ]);

  useFrame(() => {
    frontSpineJoint.current?.setContactsEnabled(false);
    backSpineJoint.current?.setContactsEnabled(false);
    // frontSpineJoint.current?.setLimits(0, Math.PI * 0.5);
    // backSpineJoint.current?.setLimits(-Math.PI * 0.5, 0);
    // backSpineJoint.current?.configureMotorVelocity(1, 0);
    frontSpineJoint.current?.configureMotorPosition(-1, 20000, 1000);
    backSpineJoint.current?.configureMotorPosition(0, 20000, 1000);

    if (held) {
      const dir = goalPos.sub(
        spine.current?.translation() ?? new THREE.Vector3(0, 0, 0),
      );
      if (dir.length() < 0.1) {
        spine.current?.setLinvel(new THREE.Vector3(0, 0, 0), true);
      }
    }
  });

  useEffect(() => {
    if (held) {
      const t: RigidBodyTypeString = "kinematicPosition";
      // kinematic position
      spine.current?.setBodyType(3, true);
      const dir = goalPos.sub(
        spine.current?.translation() ?? new THREE.Vector3(0, 0, 0),
      );
      spine.current?.setLinvel(dir.normalize().multiplyScalar(0.5), true);
    }
  }, [held]);

  const onBookClick = (e: ThreeEvent<MouseEvent>) => {
    setHeld(true);
  };

  const pages = [1, 2, 3, 4, 5];
  const pageStart = -height * 0.5 + 0.01;
  const spinePosY = thickness * 0.5 + height * 0.5;
  const wireframe = new MeshBasicMaterial({ wireframe: false, color: "grey" });
  return (
    <group onClick={onBookClick}>
      <RigidBody
        position={[0, thickness + height, 0]}
        ref={frontCover}
        mass={1}
        type="kinematicPosition"
      >
        <Box args={[width, thickness, length]} material={wireframe} />
      </RigidBody>
      <RigidBody
        position={[-width * 0.5 - thickness * 0.5, spinePosY, 0]}
        ref={spine}
        type="kinematicPosition"
        mass={1}
      >
        <Box args={[thickness, height, length]} material={wireframe} />
      </RigidBody>
      <RigidBody ref={backCover} mass={1} type="kinematicPosition">
        <Box args={[width, thickness, length]} material={wireframe} />
      </RigidBody>

      {pages.map((item, index) => (
        <Page
          width={3}
          height={4}
          position={
            new THREE.Vector3(
              thickness * 0.5,
              spinePosY + pageStart + index * 0.1,
              0,
            )
          }
          spinePos={
            new THREE.Vector3(thickness * 0.5, pageStart + index * 0.05, 0)
          }
          spine={spine}
        />
      ))}
    </group>
  );
}
