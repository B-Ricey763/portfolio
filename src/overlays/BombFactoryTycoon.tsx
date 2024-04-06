import { Grid } from "@mantine/core";
import ItemOverlay from "../ItemOverlay";
import ImageCard from "./ImageCard";
import { WebsiteButton, YouTubeButton } from "../ButtonTemplates";

export default function BombFactoryTycoon() {
  return (
    <ItemOverlay title="Tycoons" size="lg">
      <Grid>
        <Grid.Col span={6}>
          <ImageCard
            imagePath="roblox/BombFactoryTycoon.png"
            title="Bomb Factory Tycoon"
            description="This was my first take on the common Roblox game format of a tycoon, where you earn money over time to unlock more structures and droppers. This was a very difficult programming challenge due to the infinite scalability of tycoons, ultimately inspiring me to make my most successful YouTube series to date."
            button={
              <WebsiteButton link="https://www.roblox.com/games/482740177/Bomb-Factory-Tycoon" />
            }
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <ImageCard
            imagePath="youtube/TycoonThumbnail1.png"
            title="How to make a Tycoon YouTube Series"
            description="My most popular YouTube series to date, with over 300,000 views. It uses programming techniques such as Object Oriented Programming, object composition, encapsulation, and game loops to teach viewers how to make their very own tycoon game. This is what got my channel 'on the map'"
            button={
              <YouTubeButton
                link={
                  "https://youtube.com/playlist?list=PLXSd5YZgxaXRMUSWybIRkELeIQLXJNZM7&si=9-aMZR4DzuC6Z1LO"
                }
              />
            }
          />
        </Grid.Col>
      </Grid>
    </ItemOverlay>
  );
}
