import { MantineProvider, Card, Text, Button, Container } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <Container size="md" style={{ paddingTop: 40 }}>
        <Card shadow="sm" padding="lg">
          <Text size="lg" style={{ marginBottom: 10 }}>
            ¡Mantine funciona!
          </Text>
          <Button color="blue" fullWidth>
            Haz clic
          </Button>
        </Card>
      </Container>
    </MantineProvider>
  );
}

export default App;
