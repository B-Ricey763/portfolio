import { useTexture } from "@react-three/drei";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { clamp } from "three/src/math/MathUtils.js";
import BookOverlay from "./BookOverlay";
import Pickup from "./Pickup";
import ThickMagazine from "./ThickMagazine";

type BookProps = {
  itemHeld: string;
  setItemHeld: (item: string) => void;
  pagePath: string;
  pageCount: number;
  rotationOffset: THREE.Quaternion;
  userData: { name: string };
};

export default function Book({
  itemHeld,
  setItemHeld,
  pagePath,
  pageCount,
  userData,
  ...props
}: BookProps & JSX.IntrinsicElements["group"]) {
  const minPage = 0;
  const maxPage = pageCount - 1;
  const [page, setPage] = useState(0);

  const cyclePage = (direction: number) => {
    const newPageNum = clamp(
      page + direction,
      minPage,
      Math.floor(maxPage / 2),
    );
    setPage(newPageNum);
  };

  // Clos  the book when you put it down
  useEffect(() => {
    if (itemHeld !== userData.name) {
      setPage(0);
    }
  }, [itemHeld, userData.name]);

  return (
    <Pickup
      yOffset={0}
      overlay={
        <BookOverlay
          itemHeld={itemHeld}
          setItemHeld={setItemHeld}
          cyclePage={cyclePage}
          link="https://www.youtube.com/@BRicey"
        />
      }
      itemHeld={itemHeld}
      setItemHeld={setItemHeld}
      userData={userData}
      {...props}
    >
      <ThickMagazine
        pagePath={pagePath}
        pageCount={pageCount}
        cyclePage={cyclePage}
        currentPage={page}
        isHeld={itemHeld === userData.name}
      />
    </Pickup>
  );
}
