import BombFactoryTycoon from "./overlays/BombFactoryTycoon";
import ColorChaos from "./overlays/ColorChaos";
import { GHEvolution } from "./overlays/GHEvolution";
import GeorgiaTech from "./overlays/GeorgiaTech";
import JavaProjects from "./overlays/JavaProjects";
import Mic from "./overlays/Mic";
import NimGameAI from "./overlays/NimGameAI";
import Profisee from "./overlays/Profisee";
import { DownloadResumeButton } from "./overlays/ResumeOverlay";
import Speech from "./overlays/Speech";
import Web from "./overlays/Web";
import YouTube from "./overlays/YouTube";

export enum Item {
  CoffeeCup = "CoffeeCup",
  ColorTile = "ColorTile",
  Bomb = "Bomb",
  GTLogo = "GTLogo",
  Coins = "Coins",
  GraduationCap = "GraduationCap",
  Profisee = "Profisee",
  GHEvolution = "GHEvolution",
  Resume = "Resume",
  Mic = "Mic",
  Web = "Web",
  YouTube = "YouTube",
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
  [Item.GHEvolution]: <GHEvolution />,
  [Item.Web]: <Web />,
  [Item.Resume]: <DownloadResumeButton />,
  [Item.YouTube]: <YouTube />,
};
