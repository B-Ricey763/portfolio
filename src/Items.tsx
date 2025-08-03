import BombFactoryTycoon from "./overlays/BombFactoryTycoon";
import ColorChaos from "./overlays/ColorChaos";
import GBAGame from "./overlays/GBAGame";
import { GHEvolution } from "./overlays/GHEvolution";
import GeorgiaTech from "./overlays/GeorgiaTech";
import JavaProjects from "./overlays/JavaProjects";
import Mic from "./overlays/Mic";
import NimGameAI from "./overlays/NimGameAI";
import Profisee from "./overlays/Profisee";
import { DownloadResumeButton } from "./overlays/ResumeOverlay";
import Speech from "./overlays/Speech";
import VIP from "./overlays/VIP";
import Web from "./overlays/Web";
import AMDVR from "./overlays/AMDVR";
import EXO from "./overlays/Exo";
import GTRI from "./overlays/GTRI";
import YouTube from "./overlays/YouTube";

// HACK: For some reason, if you import this enum BEFORE importing an Atom, the entire app will break
// Remember this when you run into weird errors

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
  P51 = "P51",
  B29 = "B29",
  VR = "VR",
  EXO = "EXO",
  GTRI = "GTRI",
  None = "",
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
  [Item.P51]: <VIP />,
  [Item.B29]: <GBAGame />,
  [Item.VR]: <AMDVR />,
  [Item.EXO]: <EXO />,
  [Item.GTRI]: <GTRI />,
};
