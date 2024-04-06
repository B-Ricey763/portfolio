import {
  EffectComposer,
  Outline,
  Selection,
} from "@react-three/postprocessing";
import { useRef, useState } from "react";
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
      <Selection>
        <EffectComposer autoClear={false}>
          <Outline blur edgeStrength={100} />
        </EffectComposer>
        <Desk />
      </Selection>
      <pointLight position={[0, 30, 30]} intensity={1000} />
      <rectAreaLight
        ref={rectAreaLight}
        position={[0, 23, 0]}
        width={20}
        height={30}
        intensity={5}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <ambientLight intensity={0.1} />
    </>
  );
}
