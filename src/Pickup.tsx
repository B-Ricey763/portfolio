import { MantineProvider } from "@mantine/core";
import { animated, config, useSpring } from "@react-spring/three";
import { Box, Html, Sphere, Text, calcPosFromAngles } from "@react-three/drei";
import { Props, ThreeEvent, useThree } from "@react-three/fiber";
import { Select } from "@react-three/postprocessing";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Mesh, Quaternion, Vector3 } from "three";

type PickupProps = {
  rotationOffset: Quaternion;
  overlay: JSX.Element | null;
  itemHeld: string;
  setItemHeld: (item: string) => void;
  userData: { name: string };
};

export default function Pickup(
  props: JSX.IntrinsicElements["group"] & Props & PickupProps,
) {
  const meshRef = useRef<Mesh>(null);
  const { camera } = useThree();
  const [hovered, setHovered] = useState(false);

  const isHeld = () => {
    return props.itemHeld === props.userData.name;
  };

  const putDownItem = () => {
    props.setItemHeld("");
  };

  const animateHeldBook = () => {
    // we have to account for the local coords of the mesh
    const cameraPos = camera.localToWorld(new Vector3(0, 0, -4));
    const pos =
      meshRef.current?.worldToLocal(cameraPos) ?? new Vector3(0, 0, 0);
    // same with rotation
    const worldQuat =
      meshRef.current?.getWorldQuaternion(new Quaternion()) ?? new Quaternion();
    const cameraQuat = camera.quaternion;
    const rot = worldQuat
      .invert()
      .multiply(cameraQuat)
      .multiply(props.rotationOffset);

    api.start({
      position: isHeld() ? pos.toArray() : [0, 0, 0],
      quaternion: isHeld() ? rot.toArray() : [0, 0, 0, 0],
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

  useEffect(() => {
    animateHeldBook();
  }, [props.itemHeld]);

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    if (!isHeld()) {
      props.setItemHeld(props.userData.name);
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
      >
        {/*ts-ignore This is what the docs say to do!*/}
        <animated.mesh onClick={onClick} ref={meshRef} {...springs}>
          {isHeld() && (
            <Html fullscreen position={[0, 0, 0]}>
              <MantineProvider forceColorScheme="dark">
                {props.overlay}
              </MantineProvider>
            </Html>
          )}
          {props.children}
        </animated.mesh>
      </group>
    </Select>
  );
}
