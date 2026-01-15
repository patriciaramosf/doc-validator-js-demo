import {
  Container,
  Flex,
  ActionIcon,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import { IconBrightnessUp, IconMoonStars } from '@tabler/icons-react';
import Logo from './Logo';

export default function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <Container size="lg" py="md">
      <Flex justify="space-between" align="center">
        {/* <Image width={40} height={40} src={redDemon}/> */}
        <Logo/>
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