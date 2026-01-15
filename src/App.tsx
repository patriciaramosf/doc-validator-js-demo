import { MantineProvider, AppShell, Container } from '@mantine/core';
import Header from './components/Header';

export default function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <AppShell
        header={{ height: 60 }}
        padding="md"
        styles={{
          main: {},
        }}
      >
        <AppShell.Header withBorder={true}>
          <Header />
        </AppShell.Header>

        <AppShell.Main>
          <Container size="lg">
            Contenido
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
