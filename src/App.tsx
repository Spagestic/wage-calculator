// App.tsx
import { MantineProvider } from '@mantine/core';
import { Header } from './components/Header';
// import { Slider } from './components/slideTest/Slider';
import InputBox from './components/InputBox';

export default function App() {
  return (
    <MantineProvider 
    withGlobalStyles 
    withNormalizeCSS 
    theme={{ colorScheme: 'dark' }}>
        <Header />
        <InputBox />
        {/* <Slider /> */}
    </MantineProvider>
  );
}