import { atom } from "jotai";
import { clamp } from "three/src/math/MathUtils.js";

export const heldItemAtom = atom("");
export const maxPageTurnsAtom = atom(0);

const localPageTurnsAtom = atom(0);

// Idk if this is the right way to do it
export const pageTurnsAtom = atom(
  (get) => get(localPageTurnsAtom),
  (get, set, newPage: number) =>
    set(localPageTurnsAtom, clamp(newPage, 0, get(maxPageTurnsAtom))),
);
