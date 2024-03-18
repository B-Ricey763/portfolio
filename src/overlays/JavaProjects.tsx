import { Center, Container, Title, Text, Paper, Grid, Card } from "@mantine/core";

export default function JavaProjects() {
  return (
    <>
      <Center>
        <Title order={2} > Java Projects </Title>
      </Center>
      <Grid>
        <Grid.Col span={4}>
          <Card shadow="xs" padding="xl" radius="lg" withBorder>

          </Card>
        </Grid.Col>
      </Grid>
    </>
  );
}

