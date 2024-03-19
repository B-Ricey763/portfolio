import { Button, Center, Container, Flex, Group, Stack } from "@mantine/core";
import { OverlayProps } from "./Desk";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

type BookOverlayProps = {
  link: string;
  cyclePage: (direction: number) => void;
}

export default function BookOverlay({ link, cyclePage }: OverlayProps & BookOverlayProps) {
  return (
    <Stack h={'100vh'} justify="flex-end">
      <Group justify="center" p="xl">
        <Button onClick={() => cyclePage(-1)} leftSection={<IconArrowLeft />} color="teal">
          Previous Page (Q)
        </Button>
        <Button component="a" href={link}>
          Go to Project (Enter)
        </Button>
        <Button onClick={() => cyclePage(1)} rightSection={<IconArrowRight />} color="teal">
          Next Page (E)
        </Button>
      </Group>
    </Stack>
  )
}
