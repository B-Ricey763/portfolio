import { MantineProvider, Transition } from "@mantine/core";
import { useAtom } from "jotai";
import {
  type KeyboardEvent,
  type MouseEvent,
  useEffect,
  useState,
} from "react";
// For some odd reason, if you swap the order of imports of Item and heldItemAtom
// the app will completely break
import { heldItemAtom } from "./Atoms";
import { Item, ItemOverlayMap } from "./Items";
import MobilePortraitScreen from "./MobilePortraitScreen";
import SourceCodeButton from "./SourceCodeButton";

export default function OverlayManager() {
  const [item, setItem] = useAtom(heldItemAtom);
  const [livingItem, setLivingItem] = useState("");

  useEffect(() => {
    if (item !== Item.None) {
      setLivingItem(item);
    }
  }, [item]);

  const onClickAway = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setItem(Item.None);
  };

  // FIXME: I think it's not focused or something, but this ain't working
  // This doesn't work for some reason but it's the effort that counts
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      setItem(Item.None);
    }
  };

  return (
    <MantineProvider defaultColorScheme="dark">
      <SourceCodeButton />
      <MobilePortraitScreen />
      <Transition
        duration={500}
        timingFunction="ease"
        transition="pop"
        mounted={item !== Item.None}
      >
        {(styles) => (
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: 10,
              // HACK: For some reason, Matine is greedy and keeps all of the pointer events
              // to itself, so we have to check specifically for the resume to avoid
              // capturing events IDK
              pointerEvents: item === Item.Resume ? "none" : "auto",
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
