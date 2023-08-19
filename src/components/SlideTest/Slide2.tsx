// Slide2.tsx
import { Box, Button, rem } from '@mantine/core';
import { motion} from 'framer-motion';

type ResultBoxProps = {
    isVisible: boolean;
    onClose: () => void;
  };

export function Slide2({ isVisible, onClose }: ResultBoxProps) {
    const handleBack = () => {
        onClose();
      };

    return (
      <>
        {isVisible && <motion.div 
        key={"slide2"}
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
          // delay: 0.6 
        }}
        >
            <Box
            h={rem(400)}
            p = "xl"
            m = "lg"
            mt = "xl"
                sx={(theme) => ({
                  backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
                  borderRadius: theme.radius.md,
                })}
            >
              <motion.div
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              >
                <Button
                fullWidth
                m="auto"
                size="md"
                radius="md"
                variant="white"
                color="dark"
                onClick={handleBack}
                >Back</Button>
              </motion.div>
            </Box>
        </motion.div>}
      </>
    )
}