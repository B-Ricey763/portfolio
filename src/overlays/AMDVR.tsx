import { Group } from "@mantine/core";
import ItemOverlay from "../ItemOverlay";
import { ContentCard, ImageSection } from "./ContentCard";

export default function AMDVR() {
  return (
    <ItemOverlay
      title="Age-related Macular Degeneration (AMD) with XR"
      size="lg"
    >
      <Group align="stretch" wrap="wrap" justify="center">
        <ContentCard
          title="Unity XR Application for Diagnosing and Treating Age-related macular degeneration"
          description="I worked with a doctor from Emory hospital in conjunction with Professor Michael Nitsche to create a mixed reality (XR) application using the Unity game engine in C# to diagnose and treat Age-related Macular Degeneration. In addition, I collaborated with designers to make a user friendly and inuitive interface catered towards elderly, who are the most afflicted by AMD."
          width={430}
        >
          {{
            visualSection: (
              <ImageSection link="amd-vr-prl-training-screenshot.png " />
            ),
            button: <> </>,
          }}
        </ContentCard>
        <ContentCard
          title="Doctor Dashboard to interface with Unity XR App"
          description="I developed a Doctor Dashboard using React and Typescript that consumes data from the Unity app in real time, providing medical professionals with statistics and data necessary to evaluate patients remotely. Through a SQLite database and server hosted on a VPS, the unity app could communicate over HTTP to transfer test and training results that could be visualized with Rechart."
          width={430}
        >
          {{
            visualSection: (
              <ImageSection link="amd-vr-dashboard-screenshot.png" />
            ),
            button: <> </>,
          }}
        </ContentCard>
      </Group>
    </ItemOverlay>
  );
}
