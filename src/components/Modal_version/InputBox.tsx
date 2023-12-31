// InputBox.tsx
import { useState, useEffect } from 'react';
import {
  NumberInput, Button, Box, Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DatePickerInput } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';
import PaymentModal from './PaymentModal';

export default function InputBox() {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [wage, setWage] = useState<number | ''>(0);
    const [opened, { open, close }] = useDisclosure(false);

     // Create a state variable for the years of service
    const [yearsOfService, setYearsOfService] = useState<number | 0>(0);
    // Calculate years of service when the start or end date changes
    useEffect(() => {
        if (startDate && endDate) {
        const msPerYear = 1000 * 60 * 60 * 24 * 365.25; // The number of milliseconds in a year, accounting for leap years
        const serviceInMs = new Date(endDate).getTime() - new Date(startDate).getTime();  // The difference in milliseconds between the end date and start date
        setYearsOfService(serviceInMs / msPerYear);  // The decimal years of service
        }
  }, [startDate, endDate]);

  return (
    <>
    <Box
    p = "xl"
    m = "lg"
    mt = "xl"
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
          borderRadius: theme.radius.md,
        })}
      >
        <Text
          align="left"
          size="lg"
          weight={250}
          mt="xs"
          mb="sm"
          color="#D3D3D3"
        >
          Tell us your work dates
        </Text>
        <DatePickerInput
          icon={<IconCalendar size="1.1rem" stroke={1.5} />}
          clearable
          // withAsterisk
          dropdownType="modal"
          label="Start working date"
          placeholder="Pick date"
          value={startDate}
          onChange={setStartDate}
          size="sm"
          miw={250}
          my="md"
        />

        <DatePickerInput
          icon={<IconCalendar size="1.1rem" stroke={1.5} />}
          clearable
          // withAsterisk
          dropdownType="modal"
          label="End working date"
          placeholder="Pick date"
          value={endDate}
          onChange={setEndDate}
          size="sm"
          my="md"
          miw={250}
        />
        <Text
          align="left"
          size="lg"
          weight={250}
          mt="xl"
          mb="sm"
          color="#D3D3D3"
        >
          Tell us your last month's wage
        </Text>
        <NumberInput
          hideControls
          // withAsterisk
          label="Monthly Wage"
          icon="$"
          placeholder='0'
          defaultValue={0}
          value={wage}
          onChange={setWage}
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
          formatter={(value) =>
            !Number.isNaN(parseFloat(value))
              ? `${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
              : '0'
          }
          size="sm"
          mt="xs"
          mb="xl"
          miw={250}
        />

        <Button
          fullWidth
          m="auto"
          size="lg"
          radius="md"
          onClick={open}
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}>
          Calculate my payment
        </Button>
      </Box>

      <PaymentModal
        opened={opened}
        onClose={close}
        wage={wage}
        yearsOfService={yearsOfService}
        startDate={startDate}
        endDate={endDate}
      />
      </>
  );
};
