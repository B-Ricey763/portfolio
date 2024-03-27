import { MantineProvider, Transition } from "@mantine/core";
import {
  KeyboardEvent,
  MouseEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { ItemContext } from "./ItemContext";
import { ItemOverlayMap } from "./Items";

export default function OverlayManager() {
  const { item, setItem } = useContext(ItemContext);
  const [livingItem, setLivingItem] = useState("");

  useEffect(() => {
    if (item !== "") {
      setLivingItem(item);
    }
  }, [item]);

  const onClickAway = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setItem("");
  };

  // FIXME: I think it's not focused or something, but this ain't working
  // This doesn't work for some reason but it's the effort that counts
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      setItem("");
    }
  };

  return (
    <MantineProvider defaultColorScheme="dark">
      <Transition
        duration={500}
        timingFunction="ease"
        transition="pop"
        mounted={item !== ""}
      >
        {(styles) => (
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: 10,
              ...styles,
            }}
            onClick={onClickAway}
            onKeyDown={onKeyDown}
          >
            {ItemOverlayMap[livingItem]}
          </div>
        )}
      </Transition>
    </MantineProvider>
  );
}
