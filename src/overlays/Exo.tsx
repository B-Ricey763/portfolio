import { Group } from "@mantine/core";
import ItemOverlay from "../ItemOverlay";
import { ContentCard, ImageSection } from "./ContentCard";

export default function Exo() {
  return (
    <ItemOverlay title="Navigation with Exo and GPS" size="lg">
      <Group align="stretch" wrap="wrap" justify="center">
        <ContentCard
          title="Intuitive Steering Assistance from an Active Wearable Exoskeleton"
          description="I refactored and tested the navaid software utilizing a Raspberry Pi and python multiprocessing to control an exoskeleton to guide a user to a location in the world using their GPS position. I participated in user tests and iterated on the software, adding map matching, IMU orientation data, and depth camera information to guide users to the desired location on the map while avoiding obstacles."
          width={430}
        >
          {{
            visualSection: <ImageSection link="exo-irl.jpeg" />,
            button: <></>,
          }}
        </ContentCard>
        <ContentCard
          title="GPS Status Dashboard"
          description="I created a GPS debugging dashboard with live position view and map overlay without an internet connection using Martin for map tile serving and React Maplibre GL for map rendering, served over a FastAPI server. Using Redis, the dashboard can accurately display the system's intended waypoints and imu position in real time."
          width={430}
        >
          {{
            visualSection: <ImageSection link="exo-gps-dashboard.png" />,
            button: <></>,
          }}
        </ContentCard>
      </Group>
    </ItemOverlay>
  );
}
