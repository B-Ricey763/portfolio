import { Grid } from "@mantine/core";
import ItemOverlay from "../ItemOverlay";
import ImageCard from "./ImageCard";
import { WebsiteButton } from "../ButtonTemplates";

export default function ColorChaos() {
  return (
    <ItemOverlay title="ColorChaos: 2 of the Best Games of my Career" size="lg">
      <Grid>
        <Grid.Col span={6}>
          <ImageCard
            imagePath="roblox/ColorChaos1.png"
            title="ColorChaos"
            description="My very first game I created, and probably the first big project I ever completed, this game has a very special place in my heart for being the hook that yanked me into the world of programming, leading to everything I've learned thus far."
            button={
              <WebsiteButton link="https://www.roblox.com/games/484025790/Color-Chaos" />
            }
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <ImageCard
            imagePath="roblox/ColorChaosTwoGameIcon.png"
            title="ColorChaos: THE NEXT GENERATION"
            description="My most popular roblox game ever, with nearly 2 million visits and 60 concurrent players at its peak, this project was a huge success and one of my most polished games to date."
            button={
              <WebsiteButton link="https://www.roblox.com/games/4649992689/Color-Chaos-THE-NEXT-GENERATION" />
            }
          />
        </Grid.Col>
      </Grid>
    </ItemOverlay>
  );
}
