import { useState } from 'react';
import { Box, Button, rem } from '@mantine/core';
import { Slide2 } from './Slide2';
// import css
// import './slide.css';
import { motion } from 'framer-motion';

export function Slide1() {
  const [opened, setOpened] = useState(false); 

  const handleClose = () => {
    setOpened(false);
  };

  const handleOpen = () => {
    setOpened(true);
  };

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    >
      {!opened && 
      <Box
      h={rem(400)}
      bg={"gray"}
      p = "xl"
      m = "lg"
      mt = "xl"
      sx={(theme) => ({
        // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
        borderRadius: theme.radius.md,
      })}
      >
        <motion.div
        whileTap={{ scale: 0.9 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
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
        </motion.div>
      </Box>}
      
      {opened && <Slide2 onClose={handleClose} />}
      
    </motion.div>
  );
}
