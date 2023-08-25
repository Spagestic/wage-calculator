import React from 'react';
import { NumberInput } from '@mantine/core';

interface MonthlyWageInputProps {
  value: number | '';
  onChange: (value: number | '') => void;
}

const MonthlyWageInput: React.FC<MonthlyWageInputProps> = ({ value, onChange }) => {
  return (
    <NumberInput
      hideControls
      label="Monthly Wage"
      icon="$"
      placeholder="0"
      defaultValue={0}
      value={value}
      onChange={onChange}
      // parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
      // formatter={(value) =>
      //   !Number.isNaN(parseFloat(value))
      //     ? `${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
      //     : '0'
      // }
      size="sm"
      mt="xs"
      mb="xl"
      miw={250}
    />
  );
};

export default MonthlyWageInput;
