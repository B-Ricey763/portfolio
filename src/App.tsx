import { CameraControls, Sphere, } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CuboidCollider, Physics } from "@react-three/rapier";
import { Suspense } from "react";
import "./App.css";
import Book from "./Book";
import ThickMagazine from "./ThickMagazine";
import { Desk } from "./desk";


// <Book>
//   <ThickMagazine />
// </Book>

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 8, 8] }}>
        <Suspense>
          <Desk />
        </Suspense>
        <CameraControls minDistance={5} maxDistance={100} />
        <pointLight position={[0, 50, 20]} intensity={0} >
          <Sphere />
        </pointLight>
        <rectAreaLight position={[0, 50, 20]} width={10} height={10} intensity={100} />
      </Canvas>
    </>
  );
}

export default App;
