import { MantineProvider, AppShell, Container } from '@mantine/core';
import Header from './components/Header';
import PageIntro from './components/PageIntro';

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
          <PageIntro
            title="Bienvenido a mi app"
            description="Este párrafo explica qué hace la app y cómo usarla."
          />
          <Container size="lg">
            Contenido
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
