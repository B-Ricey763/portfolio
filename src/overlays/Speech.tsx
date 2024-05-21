import { ScrollArea } from "@mantine/core";
import ItemOverlay from "../ItemOverlay";
import { ContentCard, VideoSection } from "./ContentCard";

export default function Speech() {
  return (
    <ItemOverlay title="" size="sm">
      <ContentCard
        title="Salutatorian Graduation Speech"
        description="In May of 2023, I graduated from Blessed Trinity Catholic High School as my class's salutatorian. I was honored to give a speech during my commencement ceremony, which made me fall in love with public speaking and writing in general. I am very proud of the content and delivery of this speech, so have a watch!"
        width="100%"
      >
        {{
          visualSection: (
            <VideoSection link="https://www.youtube.com/embed/HfslFcC29EA?si=dK1ojunzDrq-zO6r&amp;start=2352" />
          ),
          button: <div />,
        }}
      </ContentCard>
    </ItemOverlay>
  );
}
