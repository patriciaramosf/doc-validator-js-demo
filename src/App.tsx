import { MantineProvider, createTheme, AppShell } from '@mantine/core';
import Header from './components/Header';
import PageIntro from './components/PageIntro';
import Form  from './components/Form';

const theme = createTheme({
  primaryColor: 'red',
  primaryShade: 5,
  fontFamily: 'Inter, sans-serif',
  headings: { fontFamily: 'Winky Sans, sans-serif' },
});

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell
        header={{ height: 80 }}
        padding="md"
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
          <Form/>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
