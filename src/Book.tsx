import { useEffect } from "react";
import type { Quaternion } from "three";
import Pickup from "./Pickup";
import ThickMagazine from "./ThickMagazine";
import { useAtomValue, useSetAtom } from "jotai";
import { heldItemAtom, maxPageTurnsAtom, pageTurnsAtom } from "./Atoms";

const BOOK_SCALE = 1.5;

type BookProps = {
  pagePath: string;
  pageCount: number;
  rotationOffset: Quaternion;
  itemName: string;
};

export default function Book({
  pagePath,
  pageCount,
  userData,
  itemName,
  ...props
}: BookProps & JSX.IntrinsicElements["group"]) {
  const setMaxPageTurns = useSetAtom(maxPageTurnsAtom);
  const setPageTurn = useSetAtom(pageTurnsAtom);
  const item = useAtomValue(heldItemAtom);

  // Close the book when you put it down
  useEffect(() => {
    if (item !== itemName) {
      setPageTurn(0);
    } else {
      setMaxPageTurns(Math.floor(pageCount / 2));
    }
  }, [item, itemName, setPageTurn, setMaxPageTurns, pageCount]);

  return (
    <Pickup yOffset={0} itemName={itemName} {...props}>
      <ThickMagazine
        scale={BOOK_SCALE}
        pagePath={pagePath}
        pageCount={pageCount}
        isHeld={item === itemName}
      />
    </Pickup>
  );
}
