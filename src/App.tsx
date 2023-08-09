import React, { useState, useEffect } from 'react';
import { MantineProvider, Title, Space, Divider, Center, NumberInput, Button, Flex, Modal, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DatePickerInput } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';
import jsPDF from 'jspdf';

export default function App() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [wage, setWage] = useState<number | ''>(0);
  const [opened, { open, close }] = useDisclosure(false);

  const [yearsOfService, setYearsOfService] = useState<number | 0>(0);
  useEffect(() => {
    if (startDate && endDate) {
      const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
      const serviceInMs = new Date(endDate).getTime() - new Date(startDate).getTime();
      setYearsOfService(serviceInMs / msPerYear);
    }
  }, [startDate, endDate]);

  const printPDF = () => {
    const doc = new jsPDF();
    const text = `
      Jumlah Pembayaran = ${((Number(wage) * 2) / 3 * yearsOfService).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} HKD
      Masa Kerja = ${yearsOfService.toFixed(2)} tahun

      Tanggal Mulai Bekerja = ${startDate ? startDate.toLocaleDateString() : null}
      Tanggal Selesai Bekerja = ${endDate ? endDate.toLocaleDateString() : null}
      Gaji Bulanan = ${wage} HKD

      Rumus = ${wage} * (2/3) * ${yearsOfService.toFixed(2)}
    `;
    doc.text(text, 10, 10);
    doc.save('Perhitungan.pdf');
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
      <Space h="md" />
      <Title align="center" fz="lg" fw={700}>
        Kalkulator Pembayaran Pelayanan Jangka Panjang
      </Title>
      <Divider my="md" />

      <Center>
        <Flex mih={50} maw={250} gap="lg" justify="center" align="center" direction="column" wrap="wrap">
          <DatePickerInput
            icon={<IconCalendar size="1.1rem" stroke={1.5} />}
            clearable
            dropdownType="modal"
            label="Tanggal Mulai Bekerja"
            placeholder="Pilih tanggal"
            value={startDate}
            onChange={setStartDate}
            size="md"
            mx="auto"
            miw={250}
          />

          <DatePickerInput
            icon={<IconCalendar size="1.1rem" stroke={1.5} />}
            clearable
            dropdownType="modal"
            label="Tanggal Selesai Bekerja"
            placeholder="Pilih tanggal"
            value={endDate}
            onChange={setEndDate}
            size="md"
            mx="auto"
            miw={250}
          />

          <NumberInput
            hideControls
            label="Gaji Bulanan"
            icon="$"
            placeholder="0"
            defaultValue={0}
            value={wage}
            onChange={setWage}
            parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value))
                ? `${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                : '0'
            }
            size="md"
            mx="auto"
            miw={250}
          />

          <Button m="auto" size="md" radius="md" onClick={open} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
            Hitung
          </Button>
        </Flex>
      </Center>

      <Modal opened={opened} onClose={close} title="Perhitungan" radius="md" centered>
        Jumlah Pembayaran = ${((Number(wage) * 2) / 3 * yearsOfService).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} HKD
        <Space />
        Masa Kerja = {yearsOfService.toFixed(2)} tahun
        <hr />
        Tanggal Mulai Bekerja = {startDate ? startDate.toLocaleDateString() : null}
        <Space />
        Tanggal Selesai Bekerja = {endDate ? endDate.toLocaleDateString() : null}
        <Space />
        Gaji Bulanan = ${wage} HKD
        <hr />
        Rumus = ${wage} * (2/3) * {yearsOfService.toFixed(2)}
        <Space h="sm" />
        <Group position="center">
          <Button m="auto" size="md" radius="md" onClick={printPDF} variant="white" color="dark">
            Cetak
          </Button>
        </Group>
      </Modal>
    </MantineProvider>
  );
}
