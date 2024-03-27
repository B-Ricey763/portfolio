import { createContext } from "react";

export const ItemContext = createContext({
  item: "",
  setItem: (_item: string) => {},
});
