import { useAtomValue } from "jotai";
import { easing } from "maath";
import { heldItemAtom } from "./Atoms";
import { useFrame } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";

const DEBUG_MODE = false;

export function CameraManager() {
  const item = useAtomValue(heldItemAtom);

  useFrame((state, delta) => {
    if (item === "" && !DEBUG_MODE) {
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
    }
  });

  return DEBUG_MODE ? <CameraControls /> : <> </>;
}
