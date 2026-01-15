import {
  ActionIcon,
  Container,
  Flex,
  UnstyledButton,
  useMantineColorScheme,
  Text,
} from '@mantine/core';
import { IconBrightnessUp, IconMoonStars } from '@tabler/icons-react';
import { CreditCard } from 'react-kawaii';

export default function Header() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <Container size="lg" py="xs" px="md">
      <Flex justify="space-between" align="center">
        <Flex align="center">
          {/* <Logo /> */}
          <CreditCard size={70} mood="lovestruck" color="#c92a2a" />
          <Text size="lg" style={{ fontFamily: 'Winky Sans' }}>
            Doc Validator
          </Text>
        </Flex>

        <Flex gap="lg">
          <UnstyledButton
            size="sm"
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/patriciaramosf/doc-validator.js/blob/main/README.md">
              Get started
          </UnstyledButton>
          <ActionIcon
            variant="light"
            color="gray"
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {
              dark ?
                <IconBrightnessUp size={18} stroke={1.5} /> :
                <IconMoonStars size={18} stroke={1.5} />}
          </ActionIcon>
        </Flex>
      </Flex>
    </Container>
  );
}