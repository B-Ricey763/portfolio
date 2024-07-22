import "@mantine/core/styles.css";
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import { CameraManager } from "./CameraManager";
import OverlayManager from "./OverlayManager";
import Scene from "./Scene";

function App() {
  return (
    <>
      <OverlayManager />
      <Canvas
        camera={{ position: [0, 20, 20], fov: 70 }}
        shadows={true}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <CameraManager />
      </Canvas>
      <Loader />
    </>
  );
}

export default App;
