import { Button, Group } from "@mantine/core";
import {
  IconArrowLeft,
  IconArrowRight,
  IconSquareLetterE,
  IconSquareLetterQ,
} from "@tabler/icons-react";

type BookOverlayProps = {
  link: string;
  cyclePage: (direction: number) => void;
  percentComplete: number;
};

export default function BookOverlay({
  link,
  cyclePage,
  percentComplete: completionPercentage,
}: BookOverlayProps) {
  return (
    <Group justify="center" p="xl">
      <Button
        onClick={() => cyclePage(-1)}
        leftSection={<IconArrowLeft />}
        rightSection={<IconSquareLetterQ />}
        color="teal"
        disabled={completionPercentage === 0}
      >
        Previous Page
      </Button>
      <Button component="a" href={link}>
        Go to Project (Enter)
      </Button>
      <Button
        onClick={() => cyclePage(1)}
        rightSection={<IconArrowRight />}
        leftSection={<IconSquareLetterE />}
        color="teal"
        disabled={completionPercentage === 1}
      >
        Next Page
      </Button>
    </Group>
  );
}
