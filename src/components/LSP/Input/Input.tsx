// Input.tsx
import { useState, useEffect } from 'react';
import {Box, Text} from '@mantine/core';
import Payment from '../Payment/Payment';
import WorkDateInput from './WorkDateInput';
import MonthlyWageInput from './MonthlyWageInput';
import CalculateButton from './CalculateButton';
import { motion } from 'framer-motion';
import {MIN_YEARS_OF_SERVICE, MS_PER_YEAR } from '../../../constants'

interface Props {
    isVisible: boolean,
    handleOpen: () => void,
    handleClose: () => void,
}

export default function Input({ isVisible, handleOpen, handleClose }: Props) {
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

    const canCalculatePayment = (yearsOfService >= MIN_YEARS_OF_SERVICE) && (wage !== ('' || 0));

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
                        <MonthlyWageInput
                            value={wage}
                            onChange={setWage}
                        />
                        <CalculateButton
                            onClick={handleOpen}
                            disabled={!canCalculatePayment}
                            yearsOfService={yearsOfService}
                        />
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