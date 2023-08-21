import { Box, Text, Divider, SimpleGrid, Group, Button} from '@mantine/core';
import PrintPDF from './PrintPDF';
import { motion } from "framer-motion";
import { useMantineTheme } from '@mantine/core';

interface PaymentProps {
  onClose: () => void;
  wage: number | '';
  yearsOfService: number | 0;
  startDate: Date | null;
  endDate: Date | null;
}

export default function Payment(props: PaymentProps) {
    const theme = useMantineTheme();
    const { onClose, wage, yearsOfService, startDate, endDate } = props;
    const handleBack = () => {
        onClose();
      };

    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        >
             <Box
                p="xl"
                m="lg"
                mt="xl"
                sx={(theme) => ({
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                    borderRadius: theme.radius.md,
                    // boxShadow: 'offset-x , offset-y , blur-radius , spread-radius , color' ,
                    boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2)', 
                })}
            >
                <Text
                    align="left"
                    size="xl"
                    fw={700}
                    mt="lg"
                    sx={(theme) => ({
                        color: theme.colorScheme === 'dark' ? "white" : theme.colors.dark[5],
                    })}
                >
                    Long Service Payment Due 
                </Text>

                <Text
                    ta="left"
                    fz="lg"
                    fw={700}
                    sx={(theme) => ({
                        color: theme.colorScheme === 'dark' ? "#90D2FF" : theme.colors.blue[6],
                    })}
                > 
                    $  {((Number(wage) * 2) / 3 * yearsOfService)
                        .toFixed(0)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} HKD
                </Text>

                <Text
                    ta="left"
                    fz="xs"
                    fw={350}
                    fs="italic"
                    mb="sm"
                > ( ${wage} * 2/3 * {(yearsOfService).toFixed(2)} )
                </Text>

                <Divider
                    my="lg"
                    size="sm"
                />

                <SimpleGrid
                    cols={2}
                    spacing="xl"
                    verticalSpacing="xs"
                    mb="xl"
                    color='white'
                    >
                    <Text fz="sm" sx={(theme) => ({
                        color: theme.colorScheme === 'dark' ? "white" : theme.colors.dark[5],
                    })}>
                        Last month's wage </Text>
                    <Text sx={(theme) => ({
                        color: theme.colorScheme === 'dark' ? "white" : theme.colors.dark[5],
                    })}>
                        ${wage} HKD </Text>
                    <Text fz="sm" sx={(theme) => ({
                        color: theme.colorScheme === 'dark' ? "white" : theme.colors.dark[5],
                    })}>
                        Years of service </Text>
                    <Text sx={(theme) => ({
                        color: theme.colorScheme === 'dark' ? "white" : theme.colors.dark[5],
                    })}>
                        {(yearsOfService).toFixed(2)} years </Text>
                </SimpleGrid>

                <Group position="center">
                    <PrintPDF
                        wage={wage}
                        yearsOfService={yearsOfService}
                        startDate={startDate}
                        endDate={endDate}
                    />
                </Group>

            <motion.div
            whileTap={{ scale: 0.9 }}
            >
                <Button
                fullWidth
                m="auto"
                mt="sm"
                size="md"
                radius="md"
                variant= {theme.colorScheme === 'dark' ? "white" : "filled"}
                color='dark'
                onClick={handleBack}
                >
                    Calculate Again
                </Button>
            </motion.div>
            </Box>
        </motion.div>
    )
}