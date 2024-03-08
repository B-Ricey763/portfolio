import { CameraControls, } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CuboidCollider, Physics } from "@react-three/rapier";
import { Suspense } from "react";
import "./App.css";
import Book from "./Book";
import ThickMagazine from "./ThickMagazine";



function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 8, 8] }}>
        <Suspense>
          <Physics debug colliders={"hull"} gravity={[0, -9.8, 0]}>
            <Book>
              <ThickMagazine />
            </Book>
            <CuboidCollider args={[20, 1, 20]} position={[0, -2, 0]} />
          </Physics>
        </Suspense>

        <CameraControls minDistance={5} maxDistance={100} />
        <ambientLight intensity={Math.PI / 2} />
      </Canvas>
    </>
  );
}

export default App;
