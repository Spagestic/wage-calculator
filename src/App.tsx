// App.tsx
import { MantineProvider } from '@mantine/core';
// import SlideTest from './components/SlideTest/Slides';
import { Header } from './components/Header';
import  LSP from './components/LSP/LSP';

export default function App() {
  return (
    <MantineProvider 
    withGlobalStyles 
    withNormalizeCSS 
    theme={{ colorScheme: 'dark' }}>
        <Header />
        <LSP />
    </MantineProvider>
  );
}