import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="flex md:block w-full">
                <Head />
                <body className="body-container antialiased text-slate-300 bg-slate-900 h-full">
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
