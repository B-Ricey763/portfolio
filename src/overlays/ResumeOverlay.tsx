import { MeshBasicMaterial } from "three";
import { Text, Plane, useCursor } from "@react-three/drei";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../Resume";
import * as THREE from "three";
import { Item } from "../Items";
import { ThreeEvent } from "@react-three/fiber";
import { useContext, useState } from "react";
import { ItemContext } from "../ItemContext";
import { useSpring, animated, config } from "@react-spring/three";
import { useSetAtom } from "jotai";
import { heldItemAtom } from "../Atoms";

const AnimatedPlane = animated(Plane);
const AnimatedText = animated(Text);

type LearmMoreProps = {
  yPos: number;
  size: number;
  item: Item;
};
function LearnMoreButton({ yPos, size, item }: LearmMoreProps) {
  const [hovered, setHovered] = useState(false);
  const setItem = useSetAtom(heldItemAtom);
  useCursor(hovered);

  const springs = useSpring({
    opacity: hovered ? 0.5 : 0,
    fgOpacity: hovered ? 1 : 0,
    config: config.stiff,
  });
  const onButtonClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setItem(item);
  };

  return (
    <AnimatedPlane
      args={[PAGE_WIDTH, size]}
      position-y={0.1}
      position-z={yPos}
      material={
        new MeshBasicMaterial({
          transparent: true,
          color: "black",
        })
      }
      material-opacity={springs.opacity}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={onButtonClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <AnimatedText
        color="white"
        font="/Inter-Bold.woff"
        fontSize={0.3}
        fillOpacity={springs.fgOpacity}
        anchorX="center"
        position-z={0.05}
        onClick={onButtonClick}
      >
        LEARN MORE
      </AnimatedText>
    </AnimatedPlane>
  );
}

function positionOnPage(yPos: number) {
  return -PAGE_HEIGHT / 2 + yPos;
}

// This is a little different overlay since it is actually a part of the 3d environment
export default function ResumeOverlay() {
  return (
    <>
      <LearnMoreButton
        yPos={positionOnPage(0.72)}
        size={0.45}
        item={Item.GTLogo}
      />
      <LearnMoreButton
        yPos={positionOnPage(1.8)}
        size={0.45}
        item={Item.Profisee}
      />
      <LearnMoreButton
        yPos={positionOnPage(4.15)}
        size={0.45}
        item={Item.ColorTile}
      />
    </>
  );
}
