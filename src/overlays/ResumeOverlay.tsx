import { MeshBasicMaterial } from "three";
import { Text, Plane, useCursor } from "@react-three/drei";
import { PAGE_HEIGHT, PAGE_WIDTH } from "../Resume";
import { Item } from "../Items";
import type { ThreeEvent } from "@react-three/fiber";
import { useState } from "react";
import { useSpring, animated, config } from "@react-spring/three";
import { useSetAtom } from "jotai";
import { heldItemAtom } from "../Atoms";
import { Button, Container, Group, Stack } from "@mantine/core";
import {
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconBrandYoutubeFilled,
  IconDownload,
  IconMailFilled,
} from "@tabler/icons-react";

const AnimatedPlane = animated(Plane);
const AnimatedText = animated(Text);

export function DownloadResumeButton() {
  return (
    <Container>
      <Stack
        justify="center"
        align="stretch"
        p="lg"
        style={{
          position: "absolute",
          left: 0,
        }}
      >
        <Button
          size="lg"
          color="lime"
          component="a"
          target="_blank"
          href="resume.pdf"
          download="Bryce_Hanna_Resume.pdf"
          style={{ pointerEvents: "all" }}
          leftSection={<IconDownload />}
        >
          Download Resume
        </Button>
        <Button
          size="lg"
          color="cyan"
          component="a"
          target="_blank"
          href="mailto:bhanna30@gatech.edu"
          style={{ pointerEvents: "all" }}
          leftSection={<IconMailFilled />}
        >
          Email
        </Button>
        <Button
          size="lg"
          target="_blank"
          color="red"
          component="a"
          href="https://www.youtube.com/@BRicey"
          style={{ pointerEvents: "all" }}
          leftSection={<IconBrandYoutubeFilled />}
        >
          YouTube
        </Button>
        <Button
          size="lg"
          color="blue"
          target="_blank"
          component="a"
          href="https://www.linkedin.com/in/bryce-hanna/"
          style={{ pointerEvents: "all" }}
          leftSection={<IconBrandLinkedin />}
        >
          LinkedIn
        </Button>
        <Button
          size="lg"
          color="black"
          target="_blank"
          component="a"
          href="https://github.com/B-Ricey763"
          style={{ pointerEvents: "all" }}
          leftSection={<IconBrandGithubFilled />}
        >
          Github
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
  // const uniqueHeldItems = useAtomValue(uniqueHeldItemsAtom);
  // could use this eventually
  // const wasNeverSelected = uniqueHeldItems.indexOf(item) === -1;

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
        position-z={0.01}
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

const PROFISEE_Y = positionOnPage(1.8);
// const HELP_INTIIAL = new THREE.Vector3(2, 0, PROFISEE_Y);
// const HELP_GOAL = HELP_INTIIAL.clone();

// This is a little different overlay since it is actually a part of the 3d environment
export default function ResumeOverlay() {
  // const uniqueHeldItems = useAtomValue(uniqueHeldItemsAtom);
  return (
    <>
      <LearnMoreButton
        yPos={positionOnPage(0.66)}
        size={0.37}
        item={Item.GTLogo}
      />
      <LearnMoreButton yPos={PROFISEE_Y} size={0.5} item={Item.Profisee} />
      <LearnMoreButton
        yPos={positionOnPage(2.28)}
        size={0.4}
        item={Item.YouTube}
      />
      <LearnMoreButton yPos={positionOnPage(2.7)} size={0.4} item={Item.P51} />
      <LearnMoreButton
        yPos={positionOnPage(3.19)}
        size={0.36}
        item={Item.None}
      />
      <LearnMoreButton yPos={positionOnPage(3.53)} size={0.3} item={Item.B29} />
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
