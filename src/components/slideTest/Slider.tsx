import { useState } from 'react';
import { Box, Button, rem } from '@mantine/core';
import { ResultBox } from './ResultBox';
// import css
import './slide.css';

export function Slider() {
  const [opened, setOpened] = useState(false); 

  const handleClose = () => {
    setOpened(false);
  };

  const handleOpen = () => {
    setOpened(true);
  };

  return (
    <div className={`slider ${opened ? 'slider-open' : 'slider-closed'}`}>
      {!opened && 
      <Box
      h={rem(400)}
      bg={"teal"}
      p = "xl"
      m = "lg"
      mt = "xl"
      sx={(theme) => ({
        // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        borderRadius: theme.radius.md,
      })}
      >
        <Button 
        fullWidth
        m="auto"
        size="md"
        radius="md"
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan' }}
        onClick={handleOpen}>
          Show
        </Button>
      </Box>}
      
      {opened && <ResultBox onClose={handleClose} />}
      
    </div>
  );
}
