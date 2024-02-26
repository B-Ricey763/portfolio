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
import ThickMagazine from "./ThickMagazine"
import { Suspense, useState } from "react";
import { clamp } from "three/src/math/MathUtils.js";
import TestPlane from "./TestPlane";
import PageText from "./PageText";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import PhysicsBook from "./Book";
import Book from "./Book";

function App() {


  return (
    <>
      <Canvas camera={{ position: [0, 3, 4] }}>
        <Suspense>
          <Physics debug colliders={"hull"} gravity={[0, -9.8, 0]}>
            <Book>
              <ThickMagazine/>
            </Book>
            <CuboidCollider args={[20, 1, 20]} position={[0, -2, 0]} />
          </Physics>
        </Suspense>


        <CameraControls />
        <ambientLight intensity={Math.PI / 2} />
      </Canvas>
    </>
  );
}

export default App;
