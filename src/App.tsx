import "@mantine/core/styles.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./App.css";
import Scene from "./Scene";

function App() {
  return (
    <Suspense>
      <Canvas camera={{ position: [0, 20, 20], fov: 70 }}>
        <Scene />
      </Canvas>
    </Suspense>
  );
}

export default App;
