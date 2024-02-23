import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

type TestPlaneProps = {
  size: number;
};

export default function TestPlane({ size }: TestPlaneProps) {
  const colorMap = useLoader(THREE.TextureLoader, "checker.png");
  colorMap.wrapS = THREE.RepeatWrapping;
  colorMap.wrapT = THREE.RepeatWrapping;
  colorMap.magFilter = THREE.NearestFilter;
  colorMap.colorSpace = THREE.SRGBColorSpace;
  const repeats = size / 2;
  colorMap.repeat.set(repeats, repeats);
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[size, size]} />
      <meshPhongMaterial map={colorMap} side={THREE.DoubleSide} />
    </mesh>
  );
}
