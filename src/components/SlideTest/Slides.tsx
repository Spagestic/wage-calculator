import { useState } from 'react';
import { Slide1 } from './Slide1';
import { Slide2 } from './Slide2';

export default function SlideTest() {
  const [twoOpened, setTwoOpened] = useState(false);

  const handleClose = () => {
    setTwoOpened(false);
  };

  const handleOpen = () => {
    setTwoOpened(true);
  };

  return (
    <>
      <Slide1 twoVisible={twoOpened} handleOpen={handleOpen} />
      <Slide2 isVisible={twoOpened} onClose={handleClose} />
    </>
  );
}
