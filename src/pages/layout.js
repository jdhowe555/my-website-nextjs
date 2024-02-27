import { Inter } from "next/font/google";
import {StrictMode} from "react";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
    return (
        <StrictMode>
            <div className={inter.className}>{children}</div>;
        </StrictMode>
    )
}

