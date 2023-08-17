// App.tsx
import { MantineProvider } from '@mantine/core';
import { Header } from './components/Header';
// import { Slide1 } from './components/SlideTest/Slide1';
import InputBox from './components/InputBox';

export default function App() {
  return (
    <MantineProvider 
    withGlobalStyles 
    withNormalizeCSS 
    theme={{ colorScheme: 'dark' }}>
        <Header />
        <InputBox />
        {/* <Slide1 /> */}
    </MantineProvider>
  );
}