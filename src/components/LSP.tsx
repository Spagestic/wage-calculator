import { useState } from 'react';

export default function LSP() {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [wage, setWage] = useState<number | ''>(0);
    const [opened, setOpened] = useState(false); 

  const handleClose = () => {
    setOpened(false);
  };

  const handleOpen = () => {
    setOpened(true);
  };

  return (
    <>
      Empty
    </>
  );
}
