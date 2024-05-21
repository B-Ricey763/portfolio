import {
  type ContainerProps,
  Container,
  Paper,
  Stack,
  Group,
  Title,
  CloseButton,
  ScrollArea,
} from "@mantine/core";
import { useAtomValue, useSetAtom } from "jotai";
import type react from "react";
import { animationRestedAtom, heldItemAtom } from "./Atoms";
import { Item } from "./Items";

type ItemOverlayProps = {
  title: string;
  scrollAreaHeight?: string | number;
};

export default function ItemOverlay({
  title,
  children,
  scrollAreaHeight = "50vh",
  ...props
}: react.PropsWithChildren & ItemOverlayProps & ContainerProps) {
  const setItem = useSetAtom(heldItemAtom);
  return (
    <Container {...props} p="xl">
      <Paper
        shadow="xs"
        p="sm"
        bg="rgba(0, 0, 0, 0.5)"
        withBorder
        onClick={(e) => {
          e.stopPropagation();
        }} // Prevent clicks from closing the overlay
      >
        <Stack>
          <Group justify="space-between">
            <Title order={2}> {title} </Title>
            <CloseButton onClick={() => setItem(Item.None)} />
          </Group>
          <ScrollArea
            w="100%"
            h={scrollAreaHeight}
            type="always"
            scrollbars="xy"
          >
            {children}
          </ScrollArea>
        </Stack>
      </Paper>
    </Container>
  );
}
