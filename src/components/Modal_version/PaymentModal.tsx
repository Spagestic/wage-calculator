// PaymentModal.tsx
import { Modal, Space, Group } from '@mantine/core';
import PrintPDF from '../LSP/Payment/PrintPDF';

interface PaymentModalProps {
  opened: boolean;
  onClose: () => void;
  wage: number | '';
  yearsOfService: number | 0;
  startDate: Date | null;
  endDate: Date | null;
}

export default function PaymentModal(props: PaymentModalProps) {
  const { opened, onClose, wage, yearsOfService, startDate, endDate } = props;

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Calculations"
      radius="md"
      centered
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
    </Modal>
  );
}
