import { Stack } from "@mantine/core";
import BookOverlay from "../BookOverlay";
import { YouTubeButton } from "../ButtonTemplates";

export default function YouTube() {
  return (
    <BookOverlay>
      <Stack justify="flex-end" align="stretch" h="100vh" p="lg" w="30vw">
        <YouTubeButton link="https://www.youtube.com/@BRicey" size="xl">
          Go to Channel
        </YouTubeButton>
      </Stack>
    </BookOverlay>
  );
}
