import { Box, Space, Group, Button} from '@mantine/core';
import PrintPDF from './PrintPDF';

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
        <div className="result-box">
            <Box
            p = "xl"
            m = "lg"
            mt = "xl"
                sx={(theme) => ({
                    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
                    borderRadius: theme.radius.md,
                })}
            >
            Total Payment = $
            {((Number(wage) * 2) / 3 * yearsOfService)
                .toFixed(2)
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} HKD
            <Space />
            Years of Service = {yearsOfService.toFixed(2)} years
            <hr />
            Start Working Date = {startDate ? startDate.toLocaleDateString() : null}
            <Space />
            End Working Date = {endDate ? endDate.toLocaleDateString() : null}
            <Space />
            Monthly Wage = ${wage} HKD
            <hr />
            Formula = ${wage} * (2/3) * {yearsOfService.toFixed(2)}
            <Space h="sm" />
            <Group position="center">
                <PrintPDF
                wage={wage}
                yearsOfService={yearsOfService}
                startDate={startDate}
                endDate={endDate}
                />
            </Group>
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
            </Box>
        </div>
    )
}