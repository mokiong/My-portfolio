import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { FontFace } from '../components/FontFace';
import { Sidebar } from '../components/Sidebar';
import { theme } from '../theme';

function MyApp({ Component: Page, pageProps }: AppProps) {
    return (
        <>
            <ChakraProvider theme={theme}>
                <Sidebar />
                <Page {...pageProps} />
            </ChakraProvider>
            <FontFace />
        </>
    );
}

export default MyApp;
