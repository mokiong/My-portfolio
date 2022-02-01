import { extendTheme } from '@chakra-ui/react';
import { COLORS } from './constants';

export const theme = extendTheme({
    fonts: {
        heading: 'SnappyDresser',
        nord: 'Nord',
    },
    styles: {
        global: {
            html: {
                fontSize: '62.5%',
            },
            body: {},
            '#__next': {
                height: '100%',
                color: 'brand.plain',
            },
        },
    },
    colors: { brand: COLORS },
});
