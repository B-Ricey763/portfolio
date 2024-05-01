import { animated, config, useSpring } from "@react-spring/three";
import { useCursor } from "@react-three/drei";
import { type ThreeEvent, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { type Mesh, Quaternion, Vector3 } from "three";
import { useAtom, useAtomValue } from "jotai";
import { heldItemAtom, uniqueHeldItemsAtom } from "./Atoms";
import { Item } from "./Items";

import { Select } from "./Selection";
import { OutlineGroups } from "./Scene";

type PickupProps = {
  rotationOffset?: Quaternion;
  yOffset?: number;
  scaleFactor?: number;
  itemName: Item;
};

export default function Pickup({
  rotationOffset = new Quaternion(),
  yOffset = 1.5,
  itemName,
  scaleFactor = 1,
  ...props
}: JSX.IntrinsicElements["group"] & PickupProps) {
  const meshRef = useRef<Mesh>(null);
  const { camera } = useThree();
  const [hovered, setHovered] = useState(false);
  const [item, setItem] = useAtom(heldItemAtom);
  const uniqueHeldItems = useAtomValue(uniqueHeldItemsAtom);
  // Switch cursor to pointer whwen hovering over the object
  useCursor(hovered);

  const [springs, api] = useSpring(
    () => ({
      position: [0, 0, 0],
      quaternion: [0, 0, 0, 0],
      scale: 1,
      config: config.slow,
    }),
    [],
  );

  const isHeld = () => {
    return item === itemName;
  };

  const putDownItem = () => {
    setItem(Item.None);
  };

  // biome-ignore lint: the only stateful value I need to keep track of is item, everything else if refs
  useEffect(() => {
    // we have to account for the local coords of the mesh
    const cameraPos = camera.localToWorld(new Vector3(0, -yOffset, -5));
    const pos = meshRef.current?.worldToLocal(cameraPos) ?? new Vector3();
    // same with rotation
    const worldQuat =
      meshRef.current?.getWorldQuaternion(new Quaternion()) ?? new Quaternion();
    const cameraQuat = camera.quaternion.clone();
    const rot = worldQuat
      .invert()
      .multiply(cameraQuat)
      // make rotation offset optional
      .multiply(rotationOffset);

    api.start({
      position: isHeld() ? pos.toArray() : [0, 0, 0],
      quaternion: isHeld() ? rot.toArray() : [0, 0, 0, 0],
      scale: isHeld() ? scaleFactor : 1,
    });
  }, [item]);

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (!isHeld()) {
      setItem(itemName);
      setHovered(false);
    } else {
      // clicking on the item already held should put it down
      putDownItem();
    }
  };

  const onPointerOver = (e: ThreeEvent<PointerEvent>) => {
    if (isHeld()) return;
    // only the object nearest to the camera should be hovered
    e.stopPropagation();
    setHovered(true);
  };

  const onPointerOut = (e: ThreeEvent<PointerEvent>) => {
    if (isHeld()) return;
    e.stopPropagation();
    setHovered(false);
  };

  return (
    <Select
      enabled={uniqueHeldItems.indexOf(itemName) === -1}
      group={OutlineGroups.Unvisited}
    >
      <Select enabled={hovered} group={OutlineGroups.Hovered}>
        <group
          {...props}
          onPointerOver={onPointerOver}
          onPointerOut={onPointerOut}
          onClick={onClick}
        >
          <animated.mesh
            ref={meshRef}
            // @ts-ignore This is idiomatic in react spring, I think three fiber is just funky
            position={springs.position}
            // @ts-ignore same as above
            quaternion={springs.quaternion}
            scale={springs.scale}
          >
            {props.children}
          </animated.mesh>
        </group>
      </Select>
    </Select>
  );
}
