import "@mantine/core/styles.css";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import "./App.css";
import Scene from "./Scene";
import OverlayManager from "./OverlayManager";
import { ItemContext } from "./ItemContext";

function App() {
  const [item, setItem] = useState("");

  return (
    <ItemContext.Provider value={{ item, setItem }}>
      <OverlayManager />
      <Suspense>
        <Canvas camera={{ position: [0, 20, 20], fov: 70 }}>
          <Scene />
        </Canvas>
      </Suspense>
    </ItemContext.Provider>
  );
}

export default App;
