import {
  Autofocus,
  Bloom,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  GodRays,
  Outline,
  Select,
  Selection,
  Sepia,
  Vignette,
} from "@react-three/postprocessing";
import { easing } from "maath";
import { useRef, useState } from "react";
import { MeshStandardMaterial, RectAreaLight } from "three";
import { Desk } from "./Desk";
import { useFrame } from "@react-three/fiber";

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
          <Sepia intensity={0.1} />
          <Vignette offset={0.5} />
          <Bloom intensity={0.1} />
        </EffectComposer>
        <Desk />
      </Selection>
      <pointLight position={[0, 30, 30]} intensity={1000} />
      <rectAreaLight
        ref={rectAreaLight}
        position={[0, 23, 0]}
        width={20}
        height={15}
        intensity={5}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <ambientLight intensity={0.1} />
    </>
  );
}
