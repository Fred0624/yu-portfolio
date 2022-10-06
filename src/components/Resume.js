import React from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import YuResume from '../resume/YuResume.pdf'

const Resume = () => {
    return (
        <div>
            <Document file={YuResume}>
            <Page pageNumber={1} />
            <Page pageNumber={2} />
            </Document>
        </div>
    );
};

export default Resume;