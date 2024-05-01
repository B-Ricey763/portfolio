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
    <ItemOverlay title="Student at Georgia Institute of Technology" size="md">
      <Text>
        I am a student at Georgia Tech studying Computer Science with a
        concentration in Systems {"&"} Architecture and CS Theory, planning to
        graduate in 2026. Some of my favorite classes I have taken so far
        include:
      </Text>
      <Group grow={true} align="stretch">
        <ClassCard
          name="CS 1332 Data Structures and Algorithms"
          description="Learning and creating fundemental data structures like linked lists, trees, and graphs"
        />
        <ClassCard
          name="CS 2110 Computer Organization and Programming"
          description="Starting from transistors and building up knowledge of circuits, computers, assembly, and eventually C"
        />
        <ClassCard
          name="MATH 1564 Linear Algebra with Abstract Vector Spaces"
          description="Using proofs and set theory to understand the properties of vector spaces and linear transformations"
        />
      </Group>
    </ItemOverlay>
  );
}
