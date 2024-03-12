import { CameraControls, Sphere, useHelper, } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./Scene";


function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 8, 8] }}>
        <Scene />
        <CameraControls minDistance={5} maxDistance={100} />
      </Canvas>
    </>
  );
}

export default App;
