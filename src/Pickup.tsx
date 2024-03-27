import { animated, config, useSpring } from "@react-spring/three";
import { useCursor } from "@react-three/drei";
import { ThreeEvent, useThree } from "@react-three/fiber";
import { Select } from "@react-three/postprocessing";
import { useContext, useEffect, useRef, useState } from "react";
import { Mesh, Quaternion, Vector3 } from "three";
import { ItemContext } from "./ItemContext";

type PickupProps = {
  rotationOffset?: Quaternion;
  yOffset?: number;
  itemName: string;
};

export default function Pickup({
  rotationOffset = new Quaternion(),
  yOffset = 0,
  itemName,
  ...props
}: JSX.IntrinsicElements["group"] & PickupProps) {
  const meshRef = useRef<Mesh>(null);
  const { camera } = useThree();
  const [hovered, setHovered] = useState(false);
  const { item, setItem } = useContext(ItemContext);
  // Switch cursor to pointer whwen hovering over the object
  useCursor(hovered);

  const [springs, api] = useSpring(
    () => ({
      position: [0, 0, 0],
      quaternion: [0, 0, 0, 0],
      config: config.slow,
    }),
    [],
  );

  const isHeld = () => {
    return item === itemName;
  };

  const putDownItem = () => {
    setItem("");
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
    });
  }, [item]);

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    if (!isHeld()) {
      setItem(itemName);
    } else {
      // clicking on the item already held should put it down
      putDownItem();
    }
  };

  const onPointerOver = (e: ThreeEvent<PointerEvent>) => {
    // only the object nearest to the camera should be hovered
    e.stopPropagation();
    setHovered(true);
  };

  const onPointerOut = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setHovered(false);
  };

  return (
    <Select enabled={hovered}>
      <group
        {...props}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
        onClick={onClick}
      >
        <animated.mesh
          ref={meshRef}
          position={springs.position}
          quaternion={springs.quaternion}
        >
          {props.children}
        </animated.mesh>
      </group>
    </Select>
  );
}
