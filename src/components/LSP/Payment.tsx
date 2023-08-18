import { Box, Text, Divider, SimpleGrid, Group, Button} from '@mantine/core';
import PrintPDF from '../PrintPDF';
import { motion } from 'framer-motion';

interface PaymentProps {
  onClose: () => void;
  wage: number | '';
  yearsOfService: number | 0;
  startDate: Date | null;
  endDate: Date | null;
}

export default function Payment(props: PaymentProps) {
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
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
                    borderRadius: theme.radius.md,
                })}
            >
                {/* below is the legacy code
                Total Payment = $
                {((Number(wage) * 2) / 3 * yearsOfService)
                    .toFixed(2)
                @@ -46,32 +49,73 @@ export default function Payment(props: PaymentProps) {
                Monthly Wage = ${wage} HKD
                <hr />
                Formula = ${wage} * (2/3) * {yearsOfService.toFixed(2)}
                <Space h="sm" />   
                */}
                <Text
                    align="left"
                    size="xl"
                    fw={700}
                    color="white"
                    mt="lg"
                >Long Service Payment Due </Text>

                <Text
                    color="#90D2FF"
                    ta="left"
                    fz="lg"
                    fw={700}
                > $  {((Number(wage) * 2) / 3 * yearsOfService)
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
                    mb="xl">
                    <Text color="white" fz="sm">Last month's wage </Text>
                    <Text color="white">${wage} HKD </Text>
                    <Text color="white" fz="sm">Years of service </Text>
                    <Text color="white">{(yearsOfService).toFixed(2)} years </Text>
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
            whileTap={{ scale: 0.8 }}
            >
                <Button
                fullWidth
                m="auto"
                mt="sm"
                size="md"
                radius="md"
                variant="white"
                color="dark"
                onClick={handleBack}
                >
                    Calculate Again
                </Button>
            </motion.div>
            </Box>
        </motion.div>
    )
}