// ResultBox.tsx
import { Box, Button, rem } from '@mantine/core';
import './slide.css';

type ResultBoxProps = {
    onClose: () => void;
  };

export function Slide2({ onClose }: ResultBoxProps) {
    const handleBack = () => {
        onClose();
      };

    return (
        <div className="result-box">
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
                <Button
                fullWidth
                m="auto"
                size="md"
                radius="md"
                variant="white"
                color="dark"
                onClick={handleBack}
                >Back</Button>
            </Box>
        </div>
    )
}