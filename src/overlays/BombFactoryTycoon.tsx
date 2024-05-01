import { Group } from "@mantine/core";
import ItemOverlay from "../ItemOverlay";
import { ContentCard, ImageSection, VideoSection } from "./ContentCard";
import { WebsiteButton, YouTubeButton } from "../ButtonTemplates";

export default function BombFactoryTycoon() {
  return (
    <ItemOverlay title="Tycoons" size="lg">
      <Group grow={true} align="stretch">
        <ContentCard
          title="Bomb Factory Tycoon"
          description="This was my first take on the common Roblox game format of a tycoon, where you earn money over time to unlock more structures and droppers. This was a very difficult programming challenge due to the infinite scalability of tycoons, ultimately inspiring me to make my most successful YouTube series to date."
        >
          {{
            visualSection: <ImageSection link="roblox/BombFactoryTycoon.png" />,
            button: (
              <WebsiteButton link="https://www.roblox.com/games/3053049398/Bomb-Factory-Tycoon" />
            ),
          }}
        </ContentCard>
        <ContentCard
          title="How to make a Tycoon YouTube Series"
          description="My most popular YouTube series to date, with over 300,000 views. It uses programming techniques such as Object Oriented Programming, object composition, encapsulation, and game loops to teach viewers how to make their very own tycoon game. This is what got my channel 'on the map'"
        >
          {{
            visualSection: (
              <VideoSection link="https://www.youtube.com/embed/Gart69xNY-M?si=dtm6rPtRX1CRw2_t" />
            ),
            button: (
              <YouTubeButton
                link={
                  "https://youtube.com/playlist?list=PLXSd5YZgxaXRMUSWybIRkELeIQLXJNZM7&si=9-aMZR4DzuC6Z1LO"
                }
              />
            ),
          }}
        </ContentCard>
      </Group>
    </ItemOverlay>
  );
}
