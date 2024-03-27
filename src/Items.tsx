import BombFactoryTycoon from "./overlays/BombFactoryTycoon";
import ColorChaos from "./overlays/ColorChaos";
import GeorgiaTech from "./overlays/GeorgiaTech";
import JavaProjects from "./overlays/JavaProjects";
import NimGameAI from "./overlays/NimGameAI";
import Speech from "./overlays/Speech";

export enum Item {
  CoffeeCup = "CoffeeCup",
  ColorTile = "ColorTile",
  Bomb = "Bomb",
  GTLogo = "GTLogo",
  Coins = "Coins",
  GraduationCap = "GraduationCap",
}

export const ItemOverlayMap: { [key: string]: JSX.Element } = {
  [Item.CoffeeCup]: <JavaProjects />,
  [Item.ColorTile]: <ColorChaos />,
  [Item.Bomb]: <BombFactoryTycoon />,
  [Item.GTLogo]: <GeorgiaTech />,
  [Item.Coins]: <NimGameAI />,
  [Item.GraduationCap]: <Speech />,
};
