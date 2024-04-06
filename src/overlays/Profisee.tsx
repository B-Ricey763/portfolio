import { Box, Text, Container, Group, Kbd, Paper, Button } from "@mantine/core";
import { WebsiteButton } from "../ButtonTemplates";
import { IconWorld } from "@tabler/icons-react";

export default function Profisee() {
  return (
    <Box bottom={0} pos="absolute" w="100%">
      <Group justify="center">
        <Paper p="sm" m="sm">
          Previous Page = <Kbd>Q</Kbd>
        </Paper>
        <Button
          component="a"
          href={"https://profisee.com/"}
          color="blue"
          radius="md"
          leftSection={<IconWorld size={18} />}
          size="lg"
        >
          Website
        </Button>
        <Paper p="sm" m="sm">
          Next Page = <Kbd>E</Kbd>
        </Paper>
      </Group>
    </Box>
  );
}
