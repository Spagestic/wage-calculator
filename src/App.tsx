// App.tsx
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme} from '@mantine/core';
// import SlideTest from './components/SlideTest/Slides';
import { Header } from './components/Header';
import  LSP from './components/LSP/LSP';

export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


  return (
    // <Text>hello world</Text>
    <ColorSchemeProvider 
      colorScheme={colorScheme} 
      toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider 
        withGlobalStyles 
        withNormalizeCSS 
        theme={{ colorScheme }}
        >
            <Header />
            <LSP />
        </MantineProvider>
      </ColorSchemeProvider>
  );
}