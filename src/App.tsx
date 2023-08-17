// App.tsx
import { MantineProvider } from '@mantine/core';
import { Header } from './components/Header';
// import { Slide1 } from './components/SlideTest/Slide1';
// import InputBox from './components/Modal_version/InputBox'; 
import Input from './components/Input';

export default function App() {
  return (
    <MantineProvider 
    withGlobalStyles 
    withNormalizeCSS 
    theme={{ colorScheme: 'dark' }}>
        <Header />
        <Input />
        {/* <Slide1 /> */}
    </MantineProvider>
  );
}