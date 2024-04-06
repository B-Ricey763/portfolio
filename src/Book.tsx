import { useContext, useEffect, useState } from "react";
import * as THREE from "three";
import { clamp } from "three/src/math/MathUtils.js";
import Pickup from "./Pickup";
import ThickMagazine from "./ThickMagazine";
import { ItemContext } from "./ItemContext";

const BOOK_SCALE = 1.5;

type BookProps = {
  pagePath: string;
  pageCount: number;
  rotationOffset: THREE.Quaternion;
  itemName: string;
};

export default function Book({
  pagePath,
  pageCount,
  userData,
  itemName,
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
    if (item !== itemName) {
      setPage(0);
    }
  }, [item, itemName]);

  return (
    <Pickup yOffset={0} itemName={itemName} {...props}>
      <ThickMagazine
        scale={BOOK_SCALE}
        pagePath={pagePath}
        pageCount={pageCount}
        cyclePage={cyclePage}
        currentPage={page}
        isHeld={item === itemName}
      />
    </Pickup>
  );
}
