import {
  Container,
  Flex,
  Text,
  ActionIcon,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import { IconBrightnessUp, IconMoonStars } from '@tabler/icons-react';
export default function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <Container size="lg" py="md">
      <Flex justify="space-between" align="center">
        <Text>Logo</Text>
        <Flex gap="lg">
          <UnstyledButton size="sm">Get started</UnstyledButton>
          <ActionIcon
            variant="light"
            color="gray"
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {
              dark ?
                <IconMoonStars size={18} stroke={1.5} /> :
                <IconBrightnessUp size={18} stroke={1.5} />}
          </ActionIcon>
        </Flex>
      </Flex>
    </Container>
  );
}