import { Button } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandYoutube,
  IconGlobe,
  IconWorld,
} from "@tabler/icons-react";

export const GithubButton = ({ link }: { link: string }) => (
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
);

export const WebsiteButton = ({ link }: { link: string }) => (
  <Button
    component="a"
    href={link}
    color="blue"
    fullWidth
    mt="md"
    radius="md"
    leftSection={<IconWorld size={18} />}
  >
    Website
  </Button>
);

export const YouTubeButton = ({ link }: { link: string }) => (
  <Button
    component="a"
    href={link}
    color="red"
    fullWidth
    mt="md"
    radius="md"
    leftSection={<IconBrandYoutube size={18} />}
  >
    Video
  </Button>
);
