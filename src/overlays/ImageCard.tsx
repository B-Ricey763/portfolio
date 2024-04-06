import { Text, Card, Image, Group, Button } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";

type ImageCardProps = {
  imagePath: string;
  title: string;
  description: string;
  button: JSX.Element;
};

export default function ImageCard({
  imagePath,
  title,
  description,
  button,
}: ImageCardProps) {
  return (
    <Card shadow="sm" padding="sm" radius="lg" withBorder>
      <Card.Section>
        <Image height={250} src={imagePath} />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
      </Group>

      <Text size="sm" c="dimmed">
        {description}
      </Text>

      {button}
    </Card>
  );
}
