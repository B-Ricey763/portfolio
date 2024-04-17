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
import { Button, Container, Stack } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";

const AnimatedPlane = animated(Plane);
const AnimatedText = animated(Text);

export function DownloadResumeButton() {
  return (
    <Container>
      <Stack justify="flex-end" align="stretch" h="100vh" p="lg">
        <Button
          size="lg"
          component="a"
          href="resume.pdf"
          download="Bryce_Hanna_Resume.pdf"
          style={{ pointerEvents: "all" }}
          rightSection={<IconDownload />}
        >
          Download Resume
        </Button>
      </Stack>
    </Container>
  );
}

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
      position-y={0.04}
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
        yPos={positionOnPage(0.59)}
        size={0.43}
        item={Item.GTLogo}
      />
      <LearnMoreButton
        yPos={positionOnPage(1.8)}
        size={0.5}
        item={Item.Profisee}
      />
      <LearnMoreButton
        yPos={positionOnPage(2.28)}
        size={0.4}
        item={Item.YouTube}
      />
      <LearnMoreButton
        yPos={positionOnPage(3.845)}
        size={0.32}
        item={Item.GHEvolution}
      />
      <LearnMoreButton
        yPos={positionOnPage(4.25)}
        size={0.45}
        item={Item.ColorTile}
      />
    </>
  );
}
