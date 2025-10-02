import { Card, Group, Text } from "@mantine/core";
import ItemOverlay from "../ItemOverlay";

const ClassCard = ({
  name,
  description,
}: { name: string; description: string }) => (
  <Card shadow="sm" padding="md" radius="md" withBorder>
    <Text fw={500}>{name}</Text>
    <Text size="sm" c="dimmed">
      {description}
    </Text>
  </Card>
);

export default function GeorgiaTech() {
  return (
    <ItemOverlay
      title="Classes & Organizations"
      size="md"
      scrollAreaHeight={220}
    >
      <Text>
        I am a student at Georgia Tech studying Computer Science with a
        concentration in Systems {"&"} Architecture and CS Theory, planning to
        graduate in December 2026. Some of my relevant coursework and campus
        involement are:
      </Text>
      <Group grow={true} align="stretch" justify="center">
        <ClassCard
          name="Teacher's Assistant for CS 2110 Computer Organization and Programming"
          description="Teaching students the basics of computer architecture from transistors to circuits, computers, assembly, and eventually C"
        />
        <ClassCard
          name="Flowers Invention Studio Prototype Instructor"
          description="Guide users to utilize woodworking, metal working, 3D printing, and more to realize their creative or practical projects."
        />
        <ClassCard
          name="CS 3210 Operating Systems"
          description="Learned general OS concepts and added optimizations to a unix-like operating system such as lazy page allocation and copy on write"
        />
      </Group>
    </ItemOverlay>
  );
}
