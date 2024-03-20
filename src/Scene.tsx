import { useRef, useState } from "react";
import { MeshStandardMaterial, RectAreaLight } from "three";
import { Desk } from "./Desk";
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
import { Box } from "@react-three/drei";

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
          <Bloom intensity={0.5} />
          <ChromaticAberration
            radialModulation={false}
            modulationOffset={0.1}
          />
        </EffectComposer>
        <Desk />
      </Selection>
      <pointLight position={[20, 20, 10]} intensity={100} />
      <pointLight position={[-20, 20, 10]} intensity={100} />
      <pointLight position={[-5, 35, 40]} intensity={100} />
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
