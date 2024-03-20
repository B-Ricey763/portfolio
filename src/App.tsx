import { CameraControls, Sphere, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./Scene";
import { Suspense } from "react";
import "@mantine/core/styles.css";

function App() {
  return (
    <Suspense>
      <Canvas camera={{ position: [0, 30, 20] }}>
        <Scene />
        <CameraControls minDistance={5} maxDistance={100} />
      </Canvas>
    </Suspense>
  );
}

export default App;
