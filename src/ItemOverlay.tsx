import {
  BoxProps,
  CloseButton,
  Container,
  ContainerProps,
  Group,
  Paper,
  Stack,
  Title,
} from "@mantine/core";
import { PropsWithChildren } from "react";
import { OverlayProps } from "./Desk";

type ItemOverlayProps = {
  title: string;
};

export default function ItemOverlay({
  itemHeld,
  setItemHeld,
  ...props
}: PropsWithChildren & OverlayProps & ItemOverlayProps & ContainerProps) {
  return (
    <Container {...props}>
      <Paper shadow="xs" p="sm" bg="rgba(0, 0, 0, 0.5)" withBorder>
        <Stack>
          <Group justify="space-between">
            <Title order={2}> {props.title} </Title>
            <CloseButton onClick={() => setItemHeld("")} />
          </Group>
          {props.children}
        </Stack>
      </Paper>
    </Container>
  );
}
