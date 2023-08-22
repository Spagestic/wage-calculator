// LSP.tsx
import { useState } from 'react';
import Input from './Input/Input';
// import and initialize ReactGA for user tracking - Google Ananlytics
import ReactGA from "react-ga4";
ReactGA.initialize("G-1LE47Z6NV9");  

export default function LSP() {
  const [opened, setOpened] = useState(false);

  const handleClose = () => {
    setOpened(false);
  };

  const handleOpen = () => {
    setOpened(true);
    //track user event for ReactGA
    ReactGA.event({
      category: "long_service_payment",
      action: "click_calculate_payment",
    });
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
