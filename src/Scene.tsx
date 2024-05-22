import { EffectComposer, N8AO, TiltShift2 } from "@react-three/postprocessing";
import { Desk } from "./Desk";
import { MultiOutline, Selection } from "./Selection";

const WIDTH = 30;
const HEIGHT = 30;
const LIGHT_COLOR = "#ffeae2";

export enum OutlineGroups {
  Hovered = "hovered",
  Unvisited = "unvisited",
}

export default function Scene() {
  return (
    <>
      <Selection>
        <EffectComposer autoClear={false}>
          <MultiOutline
            group={OutlineGroups.Hovered}
            blur
            edgeStrength={10}
            selectionLayer={9}
          />
          <MultiOutline
            group={OutlineGroups.Unvisited}
            blur
            selectionLayer={10}
            edgeStrength={10}
            visibleEdgeColor={0xdfb709}
            pulseSpeed={0.3}
          />
        </EffectComposer>
        <Desk />
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
