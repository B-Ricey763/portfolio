import { useSpring, animated } from "@react-spring/three";
import { Text } from "@react-three/drei";
import type * as THREE from "three";

const AnimatedText = animated(Text);

type HelpTextProps = {
  initialPosition: THREE.Vector3Tuple;
  goalPosition: THREE.Vector3Tuple;
};

export default function HelpText({
  initialPosition,
  goalPosition,
  position,
  ...props
}: JSX.IntrinsicElements["group"] & HelpTextProps) {
  const springs = useSpring({
    from: { position: initialPosition },
    to: { position: goalPosition },
    loop: { reverse: true },
    config: { duration: 500 },
  });
  return (
    <AnimatedText
      color="white"
      font="/Inter-Bold.woff"
      fontSize={0.7}
      anchorX="center"
      position={springs.position}
      rotation={props.rotation}
    >
      {"← CLICK TO PICK UP"}
    </AnimatedText>
  );
}
