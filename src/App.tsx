// App.tsx
import { MantineProvider } from '@mantine/core';
import { Header } from './components/Header';
// import { Slider } from './components/Slider';
import InputBox from './components/InputBox';
import ResultBox from './components/ResultBox';

export default function App() {
  return (
    <MantineProvider 
    withGlobalStyles 
    withNormalizeCSS 
    theme={{ colorScheme: 'dark' }}>
        <Header />
        <InputBox />
        {/* <ResultBox /> */}
        {/* <Slider /> */}
    </MantineProvider>
  );
}