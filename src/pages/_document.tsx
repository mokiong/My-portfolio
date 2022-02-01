import Document, { Head, Html, Main, NextScript } from 'next/document';
import { FC } from 'react';

const Preload: FC = () => {
    return (
        <Head>
            <link
                rel="preload"
                href="/fonts/SnappyDresser/SnappyDresserRegular.ttf"
                as="font"
                crossOrigin="anonymous"
            />
        </Head>
    );
};

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Preload />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
