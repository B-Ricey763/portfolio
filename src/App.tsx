import "@mantine/core/styles.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import Scene from "./Scene";
import OverlayManager from "./OverlayManager";
import { CameraManager } from "./CameraManager";

function App() {
  return (
    <>
      <OverlayManager />
      <Canvas camera={{ position: [0, 20, 20], fov: 70 }} shadows={true}>
        <Scene />
        <CameraManager />
      </Canvas>
    </>
  );
}

export default App;
