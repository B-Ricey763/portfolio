import { GithubButton } from "../ButtonTemplates";
import ItemOverlay from "../ItemOverlay";
import { ContentCard, ImageSection } from "./ContentCard";

export default function GBAGame() {
  return (
    <ItemOverlay title="Game Boy Advanced" size="sm" scrollAreaHeight={"65vh"}>
      <ContentCard
        title="B29 Superfortress GBA Game"
        description="Reminscent of the flash game TU-95, I created a Game Boy Advanced game using C where you fly the most infamous WWII bomber tasked with destroying a V2 Rocket launch site. I used the bitmap draw mode for this project, so performance optimization was omnipresent, and I had to utilize the Direct Memory Access feature of the GBA to get quicker video buffer writes."
      >
        {{
          visualSection: <ImageSection link="b29gba.gif" height={400} />,
          button: (
            <GithubButton link="https://github.com/B-Ricey763/b29-gba-game" />
          ),
        }}
      </ContentCard>
    </ItemOverlay>
  );
}
