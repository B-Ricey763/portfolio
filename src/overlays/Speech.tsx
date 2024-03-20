import { Card, Center, Group, Text } from "@mantine/core";
import { OverlayProps } from "../Desk";
import ItemOverlay from "../ItemOverlay";

export default function Speech(props: OverlayProps) {
  return (
    <ItemOverlay title="" {...props} size="sm">
      <Card shadow="sm" padding="sm" radius="lg" withBorder>
        <Card.Section>
          <Center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HfslFcC29EA?si=dK1ojunzDrq-zO6r&amp;start=2352"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </Center>
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>Salutatorian Graduation Speech</Text>
        </Group>

        <Text size="sm" c="dimmed">
          In May of 2023, I graduated from Blessed Trinity Catholic High School
          as my class's salutatorian. I was honored to give a speech during my
          commencement ceremony, which made me fall in love with public speaking
          and writing in general. I am very proud of the content and delivery of
          this speech, so have a watch!
        </Text>
      </Card>
    </ItemOverlay>
  );
}
