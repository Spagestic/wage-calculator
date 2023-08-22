import React from 'react';
import { DatePickerInput } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';

interface WorkDateInputProps {
  label: string;
  value: Date | null;
  onChange: (value: Date | null) => void;
}

const WorkDateInput: React.FC<WorkDateInputProps> = ({ label, value, onChange }) => {
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
};

export default WorkDateInput;
