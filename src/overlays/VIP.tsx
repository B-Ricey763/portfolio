import { WebsiteButton } from "../ButtonTemplates";
import ItemOverlay from "../ItemOverlay";
import { ContentCard, ImageSection } from "./ContentCard";

export default function VIP() {
  return (
    <ItemOverlay title="Vertically Integrated Project" size="sm">
      <ContentCard
        title="Low Cost Aerial Autonomy"
        description="I worked with researchers to characterize the flight dynamics model of a P51 Mustang and bring it into a 3D environment to dogfight with F16s. We then ported the Monte Carlo Tree Search code from the F16 to the P51 to demonstrate the versatility of the algorithm on different flight platforms. "
      >
        {{
          visualSection: <ImageSection link="vip_screenshot.png" />,
          button: <WebsiteButton link="https://www.vip.gatech.edu/teams/vwl" />,
        }}
      </ContentCard>
    </ItemOverlay>
  );
}
