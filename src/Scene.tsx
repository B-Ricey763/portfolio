import { Text, Text3D, useFont, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { RectAreaLight } from "three";
import { Desk } from "./Desk";

export default function Scene() {
  const rectAreaLight = useRef<RectAreaLight | null>(null);
  // useHelper(rectAreaLight, RectAreaLightHelper, "cyan");
  //
  // useEffect(() => {
  //   RectAreaLightUniformsLib.init();
  // }, []);

  return (
    <>
      <Desk />
      <Text position={[0, 22.5, -5]} fontSize={2}>
        Bryce Hanna's Portfolio
      </Text>
      <pointLight position={[20, 20, 10]} intensity={100} >
      </pointLight>
      <pointLight position={[-20, 20, 10]} intensity={100} >
      </pointLight>
      <pointLight position={[-5, 35, 40]} intensity={100} >
      </pointLight>
      <rectAreaLight
        ref={rectAreaLight}
        position={[0, 23, 0]}
        width={20} height={15}
        intensity={5}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <ambientLight intensity={0.1} />
    </>
  )
}
