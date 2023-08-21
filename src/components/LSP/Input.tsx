// InputBox.tsx
import { useState, useEffect } from 'react';
import {
  NumberInput, Button, Box, Text, Tooltip,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';
import Payment from './Payment';
import { motion } from 'framer-motion';

interface Props {
    isVisible: boolean, 
    handleOpen: () => void, 
    handleClose: () => void,
  }

const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;
const MIN_YEARS_OF_SERVICE = 5;
  
function WorkDateInput({ label, value, onChange }: any) {
return (
    <DatePickerInput
    icon={<IconCalendar size="1.1rem" stroke={1.5} />}
    clearable
    dropdownType="modal"
    label={label}
    placeholder="Pick date"
    value={value}
    onChange={onChange}
    size="sm"
    miw={250}
    my="md"
    />
);
}

export default function Input({isVisible, handleOpen, handleClose}: Props) {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [wage, setWage] = useState<number | ''>(0);
    const [yearsOfService, setYearsOfService] = useState<number | 0>(0);

    useEffect(() => {
        if (startDate && endDate) {
          const serviceInMs = endDate.getTime() - startDate.getTime();
          setYearsOfService(serviceInMs / MS_PER_YEAR);
        }
      }, [startDate, endDate]);

    const canCalculatePayment = yearsOfService >= MIN_YEARS_OF_SERVICE;

  return (
    <>
    {!isVisible && 
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    >
        
        <Box
        p = "xl"
        m = "lg"
        mt = "xl"
            sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                borderRadius: theme.radius.md,
            })}
            >
            <Text
                align="left"
                size="lg"
                weight={250}
                mt="xs"
                mb="sm"
                sx={(theme) => ({
                    color: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.dark[5],
                })}
            >
                Tell us your work dates
            </Text>

            <WorkDateInput 
            label="Start working date" 
            value={startDate} 
            onChange={setStartDate} />

            <WorkDateInput 
            label="End working date" 
            value={endDate} 
            onChange={setEndDate} />

            <Text
                align="left"
                size="lg"
                weight={250}
                mt="xl"
                mb="sm"
                sx={(theme) => ({
                    color: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.dark[5],
                })}
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
            <Tooltip withArrow
            label={`Requires ${MIN_YEARS_OF_SERVICE} years of work for long service payment!`}
            disabled={canCalculatePayment}
            >
                <motion.div
                whileTap={{ scale: 0.9 }}
                >
                    <Button
                        fullWidth
                        m="auto"
                        size="md"
                        radius="md"
                        onClick={handleOpen}
                        variant="gradient"
                        gradient={{ from: 'indigo', to: 'cyan' }}
                        disabled={!canCalculatePayment}
                        >
                        Calculate my payment
                    </Button>
                </motion.div>
            </Tooltip>
            </Box>
            

    </motion.div>}
    
    {isVisible && 
        <Payment 
        onClose={handleClose} 
        wage={wage} 
        yearsOfService={yearsOfService} 
        startDate={startDate} 
        endDate={endDate} />
            }  
    </>
  );
};
