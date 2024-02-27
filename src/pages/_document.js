import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="here">
                <Head />
                <body className="body-container">
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
