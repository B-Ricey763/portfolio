import { Button } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandYoutube,
  IconWorld,
} from "@tabler/icons-react";

type ButtonTempProps = {
  link: string;
  children?: string;
  mt?: string;
  size?: string;
};

export const GithubButton = ({
  link,
  children = "GitHub",
  mt = "md",
  size = "sm",
}: ButtonTempProps) => (
  <Button
    component="a"
    href={link}
    target="_blank"
    size={size}
    color="blue"
    fullWidth
    mt={mt}
    radius="md"
    leftSection={<IconBrandGithub size={18} />}
  >
    {children}
  </Button>
);

export const WebsiteButton = ({
  link,
  children = "Website",
  mt = "md",
  size = "sm",
}: ButtonTempProps) => (
  <Button
    size={size}
    component="a"
    href={link}
    target="_blank"
    color="blue"
    fullWidth
    mt={mt}
    radius="md"
    leftSection={<IconWorld size={18} />}
  >
    {children}
  </Button>
);

export const YouTubeButton = ({
  link,
  children = "Video",
  mt = "md",
  size = "sm",
}: ButtonTempProps) => (
  <Button
    size={size}
    component="a"
    href={link}
    target="_blank"
    color="red"
    fullWidth
    mt={mt}
    radius="md"
    leftSection={<IconBrandYoutube size={18} />}
  >
    {children}
  </Button>
);
