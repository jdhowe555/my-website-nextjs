import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="here">
                <Head />
                <body className="body-container antialiased text-slate-300 bg-slate-900 h-svh min-h-dvh max-h-dvh">
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
