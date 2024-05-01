import { Box, useTexture } from "@react-three/drei";
import { MeshBasicMaterial } from "three";
import Pickup from "./Pickup";
import { Item } from "./Items";
import * as THREE from "three";
import ResumeOverlay from "./overlays/ResumeOverlay";
import { useAtom } from "jotai";
import { heldItemAtom } from "./Atoms";

export const PAGE_WIDTH = 3.5; // exported for use in ResumeOverlay
export const PAGE_HEIGHT = PAGE_WIDTH * 1.29; // ratio for US-letter

const WHITE_MATERIAL = new MeshBasicMaterial({ color: "white" });

export default function Resume(props: JSX.IntrinsicElements["group"]) {
  const pageTexture = useTexture("resume.png");
  const [item, setItem] = useAtom(heldItemAtom);

  // Only the top face should have the resume png
  const materials = [
    WHITE_MATERIAL,
    WHITE_MATERIAL,
    new MeshBasicMaterial({ map: pageTexture }), // positive y face
    WHITE_MATERIAL,
    WHITE_MATERIAL,
    WHITE_MATERIAL,
    WHITE_MATERIAL,
  ];

  return (
    <Pickup
      itemName={Item.Resume}
      rotationOffset={new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(1, 0, 0),
        Math.PI / 2,
      )}
      yOffset={0}
      scaleFactor={1.5}
      {...props}
    >
      <Box
        args={[PAGE_WIDTH, 0.05, PAGE_HEIGHT]}
        material={materials}
        onPointerMissed={() => setItem(Item.None)}
      />
      {item === Item.Resume && <ResumeOverlay />}
    </Pickup>
  );
}
