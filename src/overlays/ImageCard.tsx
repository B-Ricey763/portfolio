import { Text, Card, Image, Group, Button } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";


type ImageCardProps = {
  imagePath: string;
  title: string;
  description: string;
  link: string;
}

export default function ImageCard({ imagePath, title, description, link }: ImageCardProps) {
  return (
    <Card shadow="sm" padding="sm" radius="lg" withBorder>
      <Card.Section>
        <Image
          height={250}
          src={imagePath}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
      </Group>

      <Text size="sm" c="dimmed">{description}</Text>

      <Button
        component="a"
        href={link}
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        rightSection={<IconBrandGithub size={18} />}
      >
        GitHub
      </Button>
    </Card>
  )
}
