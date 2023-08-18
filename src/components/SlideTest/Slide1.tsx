// Slide1.tsx
import { Box, Button, rem } from '@mantine/core';
import { motion } from 'framer-motion';

interface Slide1Props {
  twoVisible: boolean, 
  handleOpen: () => void, 
}

export function Slide1({twoVisible, handleOpen}: Slide1Props) {

  return (
    <>
      {!twoVisible && <motion.div 
      key={"slide1"}
      initial={{ 
        opacity: 0,
        y: 100,
      }}
      animate={{ 
        opacity: 1,
        y: 0,
      }}
      exit={{ 
        opacity: 0,
        y: 100,
      }}
      transition={{
        duration: 0.3, 
      }}
      >
        
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
        </Box>
        
        {/* {twoVisible && <Slide2 onClose={handleClose} />} */}
        
      </motion.div>}
    </>
  );
}
