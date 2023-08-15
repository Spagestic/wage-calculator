// App.tsx
// import './App.css';
import React, { useState, useEffect } from 'react';
import {
  MantineProvider,
  Title, Space, Divider, Center,
  NumberInput, Button, Flex,
  Modal, Group, Box
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DatePickerInput } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';
// import { IconX } from '@tabler/icons-react';
import jsPDF from 'jspdf';

export default function App() {
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

  // Print function
  const printPDF = () => {
    const doc = new jsPDF();
    const text = `
      Total Payment = ${((Number(wage) * 2) / 3 * yearsOfService).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} HKD
      Years of Service = ${yearsOfService.toFixed(2)} years

      Start Working Date = ${startDate ? startDate.toLocaleDateString() : null}
      End Working Date = ${endDate ? endDate.toLocaleDateString() : null}
      Monthly Wage = ${wage} HKD

      Formula = ${wage} * (2/3) * ${yearsOfService.toFixed(2)}
    `;
    doc.text(text, 10, 10);
    doc.save('Calculations.pdf');
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>

      <Space h="md" />
      <Title
        align="left"
        size="h2"
        fw={700}
        m="xl"
      >Long Service Payment</Title>
      <Title
        align="left"
        size="h6"
        fw={200}
        mt="xs"
        ml="xl"
        mb="xl"
      >Calculate your long service payment based on the labor laws of Hong Kong </Title>
      <Divider my="xl" />
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          margin: theme.spacing.lg,
          mt: theme.spacing.xl,
          // cursor: 'pointer',

        })}
      >
        <Title
          align="left"
          size="h4"
          fw={500}
          mt="xs"
          mb="xl"
        >Tell us your work dates </Title>
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

        <Title
          align="left"
          size="h4"
          fw={500}
          mt="xl"
          mb="sm"
        >Tell us your last month's wage </Title>

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
          //enlarge the button's width
          m="auto"
          size="lg"
          radius="md"
          onClick={open}
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}>
          Calculate my payment
        </Button>
      </Box>


      <Modal
        opened={opened}
        onClose={close}
        title="Calculations"
        radius="md"
        centered>
        Total Payment = ${((Number(wage) * 2) / 3 * yearsOfService).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} HKD
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
        <Group position='center'>
          <Button
            fullWidth
            m="auto"
            size="md"
            radius="md"
            onClick={printPDF}
            variant="white"
            color="dark">
            Print
          </Button>
        </Group>
      </Modal>

    </MantineProvider>
  );
}