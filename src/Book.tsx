import { useContext, useEffect, useState } from "react";
import * as THREE from "three";
import { clamp } from "three/src/math/MathUtils.js";
import BookOverlay from "./BookOverlay";
import Pickup from "./Pickup";
import ThickMagazine from "./ThickMagazine";
import { ItemContext } from "./ItemContext";

const BOOK_SCALE = 1.5;

type BookProps = {
  pagePath: string;
  pageCount: number;
  rotationOffset: THREE.Quaternion;
  userData: { name: string };
};

export default function Book({
  pagePath,
  pageCount,
  userData,
  ...props
}: BookProps & JSX.IntrinsicElements["group"]) {
  const minPage = 0;
  const maxPageTurns = Math.floor((pageCount - 1) / 2);
  const [page, setPage] = useState(0);
  const { item } = useContext(ItemContext);

  const cyclePage = (direction: number) => {
    const newPageNum = clamp(page + direction, minPage, maxPageTurns);
    setPage(newPageNum);
  };

  // Close the book when you put it down
  useEffect(() => {
    if (item !== userData.name) {
      setPage(0);
    }
  }, [item, userData.name]);

  return (
    <Pickup
      yOffset={0}
      overlay={
        <BookOverlay
          cyclePage={cyclePage}
          percentComplete={page / maxPageTurns}
          link="https://www.youtube.com/@BRicey"
        />
      }
      userData={userData}
      {...props}
    >
      <ThickMagazine
        scale={BOOK_SCALE}
        pagePath={pagePath}
        pageCount={pageCount}
        cyclePage={cyclePage}
        currentPage={page}
        isHeld={item === userData.name}
      />
    </Pickup>
  );
}
