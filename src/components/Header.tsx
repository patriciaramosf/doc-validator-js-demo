import {
  ActionIcon,
  Container,
  Flex,
  UnstyledButton,
  useMantineColorScheme,
  Text,
} from '@mantine/core';
import { IconBrightnessUp, IconMoonStars } from '@tabler/icons-react';
import Logo from './Logo';

export default function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <Container size="lg" py="xs" px="md">
      <Flex justify="space-between" align="center">
        <Flex align="center" gap="xs">
          <Logo />
          <Text fw={700} size="lg">
            Doc Validator
          </Text>
        </Flex>

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