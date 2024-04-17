import {
  Bloom,
  DepthOfField,
  EffectComposer,
  GodRays,
  Noise,
  Outline,
  SSAO,
  Selection,
  Vignette,
} from "@react-three/postprocessing";
import { Suspense, useEffect, useRef, useState } from "react";
import {
  CameraHelper,
  DirectionalLight,
  DirectionalLightHelper,
  RectAreaLight,
} from "three";
import { Desk } from "./Desk";
import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import { BlendFunction, NormalPass } from "postprocessing";

const WIDTH = 30;
const HEIGHT = 30;
const LIGHT_COLOR = "#ffeae2";

export default function Scene() {
  const dirLight = useRef<DirectionalLight>(null!);
  // useHelper(dirLight, DirectionalLightHelper, 5);
  // const { lightColor } = useControls({ lightColor: LIGHT_COLOR });

  // useHelper(dirLight.current.shadow.camera, CameraHelper);

  return (
    <>
      <Selection>
        <Desk />
        <Suspense fallback={null}>
          <EffectComposer autoClear={false} enableNormalPass={true}>
            <DepthOfField
              focusDistance={0}
              focalLength={0.1}
              bokehScale={2}
              height={480}
            />
            <Outline blur edgeStrength={100} />
          </EffectComposer>
        </Suspense>
      </Selection>
      <directionalLight
        args={[LIGHT_COLOR, 4]}
        position={[10, 25, 10]}
        target-position={[0, 10, 0]}
        castShadow
        shadow-camera-left={-WIDTH / 2}
        shadow-camera-bottom={-HEIGHT / 2}
        shadow-camera-right={WIDTH / 2}
        shadow-camera-top={HEIGHT / 2}
        ref={dirLight}
      />
      <directionalLight
        args={["white", 1]}
        position={[0, 22, 25]}
        target-postion={[0, 20, 20]}
        shadow-camera-far={5}
      />
      {/* <directionalLight args={[0xffefef, 1]} position={[-1, 5, -1]} /> */}
      {/* <ambientLight intensity={0.1} /> */}
    </>
  );
}
