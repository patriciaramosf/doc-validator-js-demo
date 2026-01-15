import { Container, Text, Button, Flex, Title } from '@mantine/core';

interface PageIntroProps {
  title: string;
  description: string;
};

export default function PageIntro({ title, description }: PageIntroProps) {
  return (
    <Container size="sm" className="page-intro-container">
      <Flex direction="column" justify="center" align="center" gap="md">

        <Title ta="center" component="h1" size="xl">{title}</Title>
        <Text ta="center" size="md">{description}</Text>
        <Button
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/patriciaramosf/doc-validator.js/blob/main/README.md">
            Get started
        </Button>
      </Flex>
    </Container>
  );
}