import { useAtomValue } from "jotai";
import { easing } from "maath";
import { animationRestedAtom, heldItemAtom } from "./Atoms";
import { useFrame } from "@react-three/fiber";
import { CameraControls, Stats } from "@react-three/drei";
import * as THREE from "three";
import { useState } from "react";
import { Item } from "./Items";

const FrameLimiter = ({ fps }: { fps: number }) => {
  const [clock] = useState(new THREE.Clock());

  useFrame((state) => {
    // HACK: this works but is definitely not canonical
    // maybe try extracting to a ref?
    state.ready = false;
    const timeUntilNextFrame = 1000 / fps - clock.getDelta();

    setTimeout(
      () => {
        state.ready = true;
        state.invalidate();
      },
      Math.max(0, timeUntilNextFrame),
    );
  });

  return <group />;
};

export function CameraManager() {
  const item = useAtomValue(heldItemAtom);
  const animationRested = useAtomValue(animationRestedAtom);

  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        state.pointer.x,
        20 + state.pointer.y / 2,
        20 + Math.atan(state.pointer.y * 2),
      ],
      0.3,
      delta,
    );
    state.camera.lookAt(
      state.camera.position.x * 2,
      3 + state.camera.position.y * 0.5,
      -4,
    );
  });

  return (
    <group>
      <Stats />
      {(!animationRested || item === Item.None) && <FrameLimiter fps={30} />}
    </group>
  );
}
