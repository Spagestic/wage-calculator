// App.tsx
import { MantineProvider } from '@mantine/core';
import { Header } from './components/Header';
import Input from './components/Input';
// import SlideTest from './components/SlideTest/Slides';

export default function App() {
  return (
    <MantineProvider 
    withGlobalStyles 
    withNormalizeCSS 
    theme={{ colorScheme: 'dark' }}>
        <Header />
        <Input />
        {/* <SlideTest />       */}
    </MantineProvider>
  );
}