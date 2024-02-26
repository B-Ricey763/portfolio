import {
  Box,
  CameraControls,
  Html,
  Plane,
  Text,
  Torus,
} from "@react-three/drei";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Magazine from "./Magazine";
import { Suspense, useState } from "react";
import { clamp } from "three/src/math/MathUtils.js";
import TestPlane from "./TestPlane";
import PageText from "./PageText";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import PhysicsBook from "./Book";
import Book from "./Book";

function App() {
  const minPage = 0;
  const maxPage = 2;
  const [page, setPage] = useState(0);

  const cyclePage = (direction: number) => {
    const newPageNum = clamp(page + direction, minPage, maxPage);
    setPage(newPageNum);
  };

  return (
    <>
      <Canvas camera={{ position: [0, 3, 4] }}>
        <Suspense>
          <Physics debug colliders={"hull"} gravity={[0, -9.8, 0]}>
            <Book />
            <CuboidCollider args={[20, 1, 20]} position={[0, -2, 0]} />
          </Physics>
        </Suspense>
        <Magazine page={page} />
        <mesh position={[3, 0.5, 0]} onClick={() => cyclePage(1)}>
          <boxGeometry />
          <meshBasicMaterial color="red" />
        </mesh>
        <mesh position={[-3, 0.5, 0]} onClick={() => cyclePage(-1)}>
          <boxGeometry />
          <meshBasicMaterial color="green" />
        </mesh>
        <mesh position={[0, 2, -2]} onClick={() => cyclePage(-1)}>
          <boxGeometry />
          <meshBasicMaterial color="black" opacity={0.1} />
          <PageText />
        </mesh>
        <CameraControls />
        <ambientLight intensity={Math.PI / 2} />
      </Canvas>
    </>
  );
}

export default App;
