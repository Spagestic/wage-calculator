import React from 'react';
import { Button, Tooltip } from '@mantine/core';
import { motion } from 'framer-motion';
import { MIN_YEARS_OF_SERVICE } from '../../../constants';

interface CalculateButtonProps {
  onClick: () => void;
  disabled: boolean;
  yearsOfService: number;
}

const CalculateButton: React.FC<CalculateButtonProps> = ({ onClick, disabled, yearsOfService }) => {
  return (
    <Tooltip
      withArrow
      multiline
      label={
        !(yearsOfService >= MIN_YEARS_OF_SERVICE) 
          ? `Requires ${MIN_YEARS_OF_SERVICE} years of work for long service payment!`
          : "Monthly Wage should not be 0!"
      }
      disabled={!disabled}
      events={{ hover: true, focus: true, touch: true }}
    >
      <motion.div whileTap={{ scale: 0.9 }}>
        <Button
          fullWidth
          m="auto"
          size="md"
          radius="md"
          onClick={onClick}
          variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan' }}
          disabled={disabled}
        >
          Calculate my payment
        </Button>
      </motion.div>
    </Tooltip>
  );
};

export default CalculateButton;
