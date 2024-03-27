import {
  CloseButton,
  Container,
  ContainerProps,
  Group,
  Paper,
  Stack,
  Title,
} from "@mantine/core";
import { PropsWithChildren, useContext } from "react";
import { ItemContext } from "./ItemContext";

type ItemOverlayProps = {
  title: string;
};

export default function ItemOverlay({
  title,
  children,
  ...props
}: PropsWithChildren & ItemOverlayProps & ContainerProps) {
  const { setItem } = useContext(ItemContext);

  return (
    <Container {...props} p="xl">
      <Paper
        shadow="xs"
        p="sm"
        bg="rgba(0, 0, 0, 0.5)"
        withBorder
        onClick={(e) => e.stopPropagation()} // Prevent clicks from closing the overlay
      >
        <Stack>
          <Group justify="space-between">
            <Title order={2}> {title} </Title>
            <CloseButton onClick={() => setItem("")} />
          </Group>
          {children}
        </Stack>
      </Paper>
    </Container>
  );
}
