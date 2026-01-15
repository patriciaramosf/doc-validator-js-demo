import { Container, Text } from '@mantine/core';

interface PageIntroProps {
  title: string;
  description: string;
};

export default function PageIntro({ title, description }: PageIntroProps) {
  return (
    <Container size="lg">
      <Text component="h1" size="xl">{title}</Text>
      <Text size="md">{description}</Text>
    </Container>
  );
}