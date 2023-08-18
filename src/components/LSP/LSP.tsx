import { useState } from 'react';
import Input from './Input';

export default function LSP() {
    const [opened, setOpened] = useState(false); 

  const handleClose = () => {
    setOpened(false);
  };

  const handleOpen = () => {
    setOpened(true);
  };

  return (
    <>
      <Input 
      isVisible={opened} 
      handleOpen={handleOpen}
      handleClose={handleClose}
       />
      {/* <Payment /> */}
    </>
  );
}
