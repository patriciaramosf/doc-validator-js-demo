import { MantineProvider, createTheme, AppShell, Container, Flex } from '@mantine/core';
import Header from './components/Header';
import PageIntro from './components/PageIntro';

const theme = createTheme({
  primaryColor: 'red',
});

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell
        header={{ height: 60 }}
        padding="md"
      >
        <AppShell.Header withBorder={true}>
          <Header />
        </AppShell.Header>

        <AppShell.Main>
          <Flex direction="column" justify="center">
            <PageIntro
              title="Fast Document Validation"
              description="Open-source JavaScript library
              to quickly validate Spanish and Portuguese
              documents (DNI, NIE, passports). More countries coming soon!"
            />
            <Container size="lg">
              Contenido
            </Container>
          </Flex>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
