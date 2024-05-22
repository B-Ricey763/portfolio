import { Container, Group, Stack } from "@mantine/core";
import BookOverlay from "../BookOverlay";
import { GithubButton, YouTubeButton } from "../ButtonTemplates";

export function GHEvolution() {
  return (
    <BookOverlay>
      <Group h="100vh" align="flex-end" p="md" grow w="60vw">
        <GithubButton link="https://github.com/B-Ricey763/ghevolution">
          Repository
        </GithubButton>
        <YouTubeButton link="https://youtu.be/uzusbTeSKD4?si=oOfNdqFtHjdwmXXN">
          My Video
        </YouTubeButton>
        <YouTubeButton link="https://youtu.be/N3tRFayqVtk?si=6M5VEUhxhzq_TRrc">
          Inspiration
        </YouTubeButton>
      </Group>
    </BookOverlay>
  );
}
