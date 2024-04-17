import { Button, Stack } from "@mantine/core";
import BookOverlay from "../BookOverlay";
import { IconWorld } from "@tabler/icons-react";

export default function Profisee() {
  return (
    <BookOverlay>
      <Stack justify="flex-end" align="stretch" h="100vh" p="lg">
        <Button
          size="lg"
          component="a"
          href="https://profisee.com/"
          leftSection={<IconWorld />}
        >
          Profisee's Website
        </Button>
      </Stack>
    </BookOverlay>
  );
}
