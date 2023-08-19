import { useMantineColorScheme, ActionIcon } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        mt={3}
        ml={5}
        radius= "md"
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          color: theme.colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.dark[6],
        })}
      >
        {colorScheme === 'dark' ? <IconSun size="1.2rem" /> : <IconMoonStars size="1.2rem" />}
      </ActionIcon>
  );
}