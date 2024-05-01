import { Text, Card, Image, Group, Center, Box } from "@mantine/core";

type ContentCardProps = {
  title: string;
  description: string;
  children: {
    visualSection: JSX.Element;
    button: JSX.Element;
  };
};

type VisualSectionProps = {
  link: string;
  height?: number;
};

export function ImageSection({ link, height = 250 }: VisualSectionProps) {
  return <Image height={height} src={link} />;
}

export function VideoSection({ link, height = 315 }: VisualSectionProps) {
  return (
    <Center>
      <iframe
        width="560"
        height={height}
        src={link}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </Center>
  );
}

export function ContentCard({
  title,
  description,
  children: { visualSection, button },
}: ContentCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="lg" withBorder w={350}>
      <Card.Section>{visualSection}</Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>

      <Box style={{ marginTop: "auto" }}>{button}</Box>
    </Card>
  );
}
