import BombFactoryTycoon from "./overlays/BombFactoryTycoon";
import ColorChaos from "./overlays/ColorChaos";
import GeorgiaTech from "./overlays/GeorgiaTech";
import JavaProjects from "./overlays/JavaProjects";
import Mic from "./overlays/Mic";
import NimGameAI from "./overlays/NimGameAI";
import Profisee from "./overlays/Profisee";
import Speech from "./overlays/Speech";
import Web from "./overlays/Web";

export enum Item {
  CoffeeCup = "CoffeeCup",
  ColorTile = "ColorTile",
  Bomb = "Bomb",
  GTLogo = "GTLogo",
  Coins = "Coins",
  GraduationCap = "GraduationCap",
  Profisee = "Profisee",
  Resume = "Resume",
  Mic = "Mic",
  Web = "Web",
}

export const ItemOverlayMap: { [key: string]: JSX.Element } = {
  [Item.CoffeeCup]: <JavaProjects />,
  [Item.ColorTile]: <ColorChaos />,
  [Item.Bomb]: <BombFactoryTycoon />,
  [Item.GTLogo]: <GeorgiaTech />,
  [Item.Coins]: <NimGameAI />,
  [Item.GraduationCap]: <Speech />,
  [Item.Profisee]: <Profisee />,
  [Item.Mic]: <Mic />,
  [Item.Web]: <Web />,
};
