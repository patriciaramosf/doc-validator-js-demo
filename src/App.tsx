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
            title="Fast Document Validation"
            description="Open-source JavaScript library
            to quickly validate Spanish and Portuguese
            documents (DNI, NIE, passports). More countries coming soon!"
          />
          <Container size="lg">
            Contenido
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
