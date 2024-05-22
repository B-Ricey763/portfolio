import { YouTubeButton } from "../ButtonTemplates";
import ItemOverlay from "../ItemOverlay";
import { ContentCard, VideoSection } from "./ContentCard";

export default function Mic() {
  return (
    <ItemOverlay title="YouTube" size="sm" scrollAreaHeight="54vh">
      <ContentCard
        title="B Ricey: Educational Programming Tutorials"
        description="With over 150 videos, 15,000 subscribers, and 2+ million views, my YouTube channel is where I create, script, record, and edit informative programming tutoirals that teach concepts like Object Oriented Programming, Composition, vector math, and 3D graphics through the Roblox Studio Game Engine."
      >
        {{
          visualSection: (
            <VideoSection link="https://www.youtube-nocookie.com/embed/Gart69xNY-M?si=Kuab4TarzmX_0Inp" />
          ),
          button: (
            <YouTubeButton link="https://www.youtube.com/@BRicey">
              YouTube Channel
            </YouTubeButton>
          ),
        }}
      </ContentCard>
    </ItemOverlay>
  );
}
