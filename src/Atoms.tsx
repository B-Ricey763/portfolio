import { atom } from "jotai";
import { clamp } from "three/src/math/MathUtils.js";
import { Item } from "./Items";

export const heldItemAtom = atom(Item.None);
export const maxPageTurnsAtom = atom(0);
export const uniqueHeldItemsAtom = atom([Item.None]);

const localPageTurnsAtom = atom(0);

// Idk if this is the right way to do it
export const pageTurnsAtom = atom(
  (get) => get(localPageTurnsAtom),
  (get, set, newPage: number) => {
    set(localPageTurnsAtom, clamp(newPage, 0, get(maxPageTurnsAtom)));
  },
);
