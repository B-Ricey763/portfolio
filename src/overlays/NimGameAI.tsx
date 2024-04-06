import { GithubButton } from "../ButtonTemplates";
import ItemOverlay from "../ItemOverlay";
import ImageCard from "./ImageCard";

export default function NimGameAI() {
  return (
    <ItemOverlay title="Nim Game AI" size="xs">
      <ImageCard
        title="Nim, a subtraction game, with an AI that always wins"
        imagePath="NimGameAI.png"
        description="Nim is a mathematical subtraction game that you can win using combinatorial game theory. I created the game in the terminal that has an AI that will always win. In addition, the project is made in rust, so, ya know, it's blazingly fast :)"
        button={
          <GithubButton link="https://github.com/B-Ricey763/nim-game-ai" />
        }
      />
    </ItemOverlay>
  );
}
