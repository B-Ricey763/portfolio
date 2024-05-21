import { Center, Overlay, Stack, Text, Title } from "@mantine/core";
import { IconRotate } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function MobilePortraitScreen() {
  const [portrait, setPortrait] = useState(false);

  const handleOrientationChanged = (e: MediaQueryListEvent) => {
    setPortrait(e.matches);
  };

  useEffect(() => {
    // Get intially
    const portrait = window.matchMedia("(orientation: portrait)").matches;
    setPortrait(portrait);

    // Set reoccuring
    window
      .matchMedia("(orientation: portrait)")
      .addEventListener("change", handleOrientationChanged);
    return () =>
      window
        .matchMedia("(orientation: portrait)")
        .removeEventListener("change", handleOrientationChanged);
  }, [handleOrientationChanged]);

  return (
    portrait && (
      <Overlay color="#000" backgroundOpacity={0.85}>
        <Center h={"100vh"} w={"100vw"}>
          <Stack align="center">
            <Title order={3}>Rotate phone for the best experience</Title>
            <IconRotate size={100} />
          </Stack>
        </Center>
      </Overlay>
    )
  );
}
