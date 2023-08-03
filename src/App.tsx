// App.tsx
// import './App.css';
import React, {useState, useEffect} from 'react';
import { MantineProvider, 
         Title, Space, Divider,
         NumberInput, Button, Flex,
         Modal, Group
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

      Fomula = ${wage} * (2/3) * ${yearsOfService.toFixed(2)}
    `;
    doc.text(text, 10, 10);
    doc.save('Calculations.pdf');
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
      
      <Space h="md" />
      <Title 
      align="center"
      fz="lg"
      fw={700}
      >Long Service Payment Calculator</Title>
      <Divider my="md" />

      <Flex
        mih={50}
        // bg="rgba(0, 0, 0, .3)"
        gap="lg"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
      <DatePickerInput
        icon={<IconCalendar size="1.1rem" stroke={1.5} />}
        clearable
        // withAsterisk
        dropdownType="modal"
        label="Start working date"
        placeholder="Pick date"
        value={startDate}
        onChange={setStartDate}
        mx="auto"
        miw={250}
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
        mx="auto"
        miw={250}
      />

      
      <NumberInput
        hideControls
        // withAsterisk
        label="Monthly Wage"
        icon = "$"
        placeholder='0'
        defaultValue={0}
        value = {wage}
        onChange = {setWage}
        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
        formatter={(value) =>
          !Number.isNaN(parseFloat(value))
            ? `${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
            : '0'
        }
        mx="auto"
        miw={250}
      />
      
        <Button 
          m="auto"
          size="md"
          onClick={open} 
          variant="gradient" 
          gradient={{ from: 'indigo', to: 'cyan' }}>
          Calculate
          </Button>
      </Flex>

      <Modal 
        opened={opened} 
        onClose={close} 
        title="Calculations" 
        radius= "md"
        centered>
          Total Payment = ${((Number(wage) * 2) / 3 * yearsOfService).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} HKD
          <Space/>
          Years of Service = {yearsOfService.toFixed(2)} years
          <hr/>
          Start Working Date = {startDate ? startDate.toLocaleDateString() : null}
          <Space/>
          End Working Date = {endDate ? endDate.toLocaleDateString() : null}
          <Space />
          Monthly Wage = ${wage} HKD
          <hr />
          Fomula = ${wage} * (2/3) * {yearsOfService.toFixed(2)}
          <Space h="sm" />
          <Group position='center'>
              <Button 
                m="auto"
                size="sm"
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