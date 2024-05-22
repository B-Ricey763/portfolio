import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

// function FrameLimiter({ limit = 30 }) {
//   const { invalidate, clock, advance } = useThree();
//   useEffect(() => {
//     let delta = 0;
//     let raf = 0;
//     const interval = 1 / limit;
//     const update = () => {
//       raf = requestAnimationFrame(update);
//       delta += clock.getDelta();
//
//       if (delta > interval) {
//         invalidate();
//         delta = delta % interval;
//       }
//     };
//
//     update();
//     return () => {
//       cancelAnimationFrame(raf);
//     };
//   }, [limit]);
//
//   return <group />;
// }

export function CameraManager() {
  // const item = useAtomValue(heldItemAtom);
  // const animationRested = useAtomValue(animationRestedAtom);

  useFrame((state, delta) => {
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
  });

  return (
    <group>
      {/* {(!animationRested || item === Item.None) && <FrameLimiter />} */}
    </group>
  );
}
