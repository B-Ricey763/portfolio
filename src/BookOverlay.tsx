import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import {
  Group,
  Button,
  Text,
  Tooltip,
  Kbd,
  Transition,
  Box,
  Stack,
} from "@mantine/core";
import { useAtom, useAtomValue } from "jotai";
import { maxPageTurnsAtom, pageTurnsAtom } from "./Atoms";
import type { MouseEvent, PropsWithChildren } from "react";

const ICON_SIZE = 200;
const PG_BUTTON_WIDTH = "15vw";

export default function BookOverlay({ children }: PropsWithChildren) {
  const [pageTurns, setPageTurns] = useAtom(pageTurnsAtom);
  const maxPageTurns = useAtomValue(maxPageTurnsAtom);

  const prevPage = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setPageTurns(pageTurns - 1);
  };

  const nextPage = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setPageTurns(pageTurns + 1);
  };

  const firstPage = pageTurns === 0;
  const lastPage = pageTurns === maxPageTurns;

  return (
    <Group justify={"space-between"} h="100vh">
      <Box w={PG_BUTTON_WIDTH} h="100vh">
        <Transition mounted={!firstPage} transition="slide-right" keepMounted>
          {(styles) => (
            <div style={styles}>
              <Tooltip
                color="dark"
                label={
                  <Text>
                    <Kbd>Q</Kbd> Previous Page
                  </Text>
                }
                position="right"
              >
                <Button
                  h="100vh"
                  w="100%"
                  variant="light"
                  color="dark"
                  onClick={prevPage}
                >
                  <IconArrowLeft size={ICON_SIZE} />
                </Button>
              </Tooltip>
            </div>
          )}
        </Transition>
      </Box>
      {children}
      <Box w={PG_BUTTON_WIDTH} h="100vh">
        <Transition mounted={!lastPage} transition="slide-left">
          {(styles) => (
            <div style={styles}>
              <Tooltip
                color="dark"
                label={
                  <Text>
                    <Kbd>E</Kbd> Next Page
                  </Text>
                }
                position="left"
              >
                <Button
                  h="100vh"
                  w="100%"
                  variant="light"
                  color="dark"
                  onClick={nextPage}
                >
                  <IconArrowRight size={ICON_SIZE} />
                </Button>
              </Tooltip>
            </div>
          )}
        </Transition>
      </Box>
    </Group>
  );
}
