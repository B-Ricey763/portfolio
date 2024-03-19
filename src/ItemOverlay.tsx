import { CloseButton, Container, Group, ModalCloseButton, Paper, Stack, Title } from "@mantine/core";
import { PropsWithChildren } from "react";
import { OverlayProps } from "./Desk";

type ItemOverlayProps = {
  title: string;
}

export default function ItemOverlay(props: PropsWithChildren & OverlayProps & ItemOverlayProps) {
  return (
    <Container p="xl" size="lg" >
      <Paper shadow="xs" p="sm" bg='rgba(0, 0, 0, 0.5)' withBorder>
        <Stack>
          <Group justify="space-between">
            <Title order={2} > {props.title} </Title>
            <CloseButton onClick={() => props.setItemHeld("")} />
          </Group>
          {props.children}
        </Stack>
      </Paper>
    </Container>
  );
}
