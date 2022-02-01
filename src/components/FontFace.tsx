import { Global } from '@emotion/react';

const SnappyDresser = `
@font-face {
    font-family: 'SnappyDresser';
    src: url('/fonts/SnappyDresser/SnappyDresserRegular.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
    font-display: block;
}
`;

export const FontFace = () => {
    return <Global styles={SnappyDresser} />;
};
