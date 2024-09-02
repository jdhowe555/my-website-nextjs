// pages/render-pdf.js
import React from 'react';
import dynamic from "next/dynamic";
import ResumePdf from '../components/ResumePdf';
import {getResumeData} from "@/lib/GetResumeData";

const PDFViewer = dynamic(() => import('@react-pdf/renderer').then(mod => mod.PDFViewer), {
    ssr: false,
});

export async function getServerSideProps() {
    return await getResumeData();
}

const RenderPDF = ({data}) => (
    <div className="h-screen w-lvw">
        <PDFViewer className="w-full h-full">
            <ResumePdf data={data} />
        </PDFViewer>
    </div>
);

export default RenderPDF;
