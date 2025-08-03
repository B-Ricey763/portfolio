import { Button, Stack } from "@mantine/core";
import BookOverlay from "../BookOverlay";
import { IconWorld } from "@tabler/icons-react";

export default function GTRI() {
  return (
    <BookOverlay>
      <Stack justify="flex-end" align="stretch" h="100vh" p="lg">
        <Button
          size="lg"
          component="a"
          target="_blank"
          href="https://www.gtri.gatech.edu/laboratories/sensors-and-electromagnetic-applications-laboratory"
          leftSection={<IconWorld />}
        >
          GTRI SEAL Website
        </Button>
      </Stack>
    </BookOverlay>
  );
}
