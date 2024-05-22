// @ts-nocheck this file is a dumpster fire I'll worry about it later

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useAnimations, useGLTF, useTexture } from "@react-three/drei";
import { type ObjectMap, useFrame } from "@react-three/fiber";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { type MutableRefObject, useEffect, useRef } from "react";
import * as THREE from "three";
import type { GLTF } from "three-stdlib";
import { heldItemAtom, pageTurnsAtom } from "./Atoms";
import { Item } from "./Items";

type GLTFResult = GLTF & {
  nodes: {
    Plane002: THREE.Mesh;
    Plane002_1: THREE.Mesh;
    Plane005: THREE.Mesh;
    Plane005_1: THREE.Mesh;
    Plane006: THREE.Mesh;
    Plane006_1: THREE.Mesh;
  };
};

type ActionName = "Scene";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

type ThickMagazineProps = {
  pagePath: string;
  pageCount: number;
  isHeld: boolean;
};

const FRAMES_PER_SEC = 24;
const PAGE_FLIP_FRAMES = 30;
const calcFrame = (pg: number) => {
  return (PAGE_FLIP_FRAMES * pg) / FRAMES_PER_SEC;
};

type PageFlippingLogicProps = {
  actionRef: MutableRefObject<THREE.AnimationAction>;
  keyframeRef: MutableRefObject<number>;
};

function PageFlippingLogic({ actionRef, keyframeRef }: PageFlippingLogicProps) {
  const [currentPage, setCurrentPage] = useAtom(pageTurnsAtom);
  const setItem = useSetAtom(heldItemAtom);

  useEffect(() => {
    setCurrentPage(1);
  }, [setCurrentPage]);

  useEffect(() => {
    keyframeRef.current = calcFrame(currentPage);
  }, [currentPage, keyframeRef]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "q") {
      setCurrentPage(currentPage - 1);
    } else if (e.key === "e") {
      setCurrentPage(currentPage + 1);
    } else if (e.key === "Escape") {
      setItem(Item.None);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useFrame(() => {
    if (actionRef.current) {
      // HACK: should NOT have to do this every frame!
      actionRef.current.enabled = true;
      const diff = actionRef.current.time - keyframeRef.current;
      if (Math.abs(diff) < 0.1) {
        actionRef.current.timeScale = 0;
      } else if (diff > 0) {
        actionRef.current.timeScale = -2;
      } else {
        actionRef.current.timeScale = 2;
      }
    }
  });

  return <group />;
}

export default function ThickMagazine(
  props: JSX.IntrinsicElements["group"] & ThickMagazineProps,
) {
  // biome-ignore lint/style/noNonNullAssertion: Docs say so!
  const actionRef = useRef<THREE.AnimationAction>(null!);
  const keyframeRef = useRef(0);
  const { nodes, animations } = useGLTF("/ThickMagazine.glb") as GLTF &
    ObjectMap;
  const { ref, actions } = useAnimations(animations);
  const defaultMaterial = new THREE.MeshBasicMaterial({ color: "white" });
  const pageMaterials = new Array<THREE.MeshBasicMaterial>(5).fill(
    defaultMaterial,
  );
  const currentPage = useAtomValue(pageTurnsAtom);
  // HACK: The way the blender animation is setup, it finishes
  // at a hardcoded z value, so I can't add more pages without
  // manually editing the animation... five should be enough for all cases,
  // but it is a sad limitation of the situation.
  for (let i = 0; i < props.pageCount; i++) {
    const pageTexture = useTexture(`${props.pagePath}/Page ${i + 1}.png`);
    pageTexture.center = new THREE.Vector2(0.5, 0.5);
    pageTexture.rotation = Math.PI;
    // gotta flip every other page
    pageTexture.repeat.x = i % 2 === 0 ? -1 : 1;
    pageMaterials[i] = new THREE.MeshBasicMaterial({
      map: pageTexture,
      color: "white",
    });
  }
  useEffect(() => {
    actions.Test?.setLoop(THREE.LoopOnce, 1);
    actions.Test?.play();

    actionRef.current = actions.Test;
    actionRef.current.timeScale = 0;
  }, [actions.Test]);

  useEffect(() => {
    if (
      !props.isHeld &&
      currentPage > 0 &&
      actionRef.current &&
      keyframeRef.current
    ) {
      keyframeRef.current = 0;
      actionRef.current.timeScale = -5;
    }
  }, [props.isHeld, currentPage]);

  // HACK: I have to clone geometry because otherwise the
  // animations are shared between books
  for (const name in nodes) {
    nodes[name] = nodes[name].clone();
  }
  return (
    <group {...props} dispose={null} ref={ref}>
      {props.isHeld && (
        <PageFlippingLogic keyframeRef={keyframeRef} actionRef={actionRef} />
      )}
      <group name="Scene">
        <group name="Sheet1" position={[0, 0.02, 0]}>
          <mesh
            name="Plane002"
            geometry={nodes.Plane002.geometry.clone()}
            material={pageMaterials[0]}
            morphTargetDictionary={nodes.Plane002.morphTargetDictionary}
            morphTargetInfluences={nodes.Plane002.morphTargetInfluences}
          />
          <mesh
            name="Plane002_1"
            geometry={nodes.Plane002_1.geometry.clone()}
            material={pageMaterials[1]}
            morphTargetDictionary={nodes.Plane002_1.morphTargetDictionary}
            morphTargetInfluences={nodes.Plane002_1.morphTargetInfluences}
          />
        </group>
        <group name="Sheet2" position={[0, 0.01, 0]}>
          <mesh
            name="Plane005"
            geometry={nodes.Plane005.geometry.clone()}
            material={pageMaterials[2]}
            morphTargetDictionary={nodes.Plane005.morphTargetDictionary}
            morphTargetInfluences={nodes.Plane005.morphTargetInfluences}
          />
          <mesh
            name="Plane005_1"
            geometry={nodes.Plane005_1.geometry.clone()}
            material={pageMaterials[3]}
            morphTargetDictionary={nodes.Plane005_1.morphTargetDictionary}
            morphTargetInfluences={nodes.Plane005_1.morphTargetInfluences}
          />
        </group>
        <group name="Sheet3">
          <mesh
            name="Plane006"
            geometry={nodes.Plane006.geometry}
            material={pageMaterials[4]}
            morphTargetDictionary={nodes.Plane006.morphTargetDictionary}
            morphTargetInfluences={nodes.Plane006.morphTargetInfluences}
          />
          <mesh
            name="Plane006_1"
            geometry={nodes.Plane006_1.geometry}
            material={pageMaterials[5]}
            morphTargetDictionary={nodes.Plane006_1.morphTargetDictionary}
            morphTargetInfluences={nodes.Plane006_1.morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/ThickMagazine.glb");