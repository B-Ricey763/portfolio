import { Stack } from "@mantine/core";
import BookOverlay from "../BookOverlay";
import { GithubButton, YouTubeButton } from "../ButtonTemplates";

export function GHEvolution() {
  return (
    <BookOverlay>
      <Stack justify="flex-end" align="stretch" h="100vh" p="lg" w="30vw">
        <GithubButton link="https://github.com/B-Ricey763/ghevolution" mt="xs">
          Go to the Repo
        </GithubButton>
        <YouTubeButton
          link="https://youtu.be/uzusbTeSKD4?si=oOfNdqFtHjdwmXXN"
          mt=""
        >
          Roblox Video
        </YouTubeButton>
        <YouTubeButton
          link="https://youtu.be/N3tRFayqVtk?si=6M5VEUhxhzq_TRrc"
          mt=""
        >
          Inspiration Video
        </YouTubeButton>
      </Stack>
    </BookOverlay>
  );
}
