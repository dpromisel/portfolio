import { Document } from 'react-pdf/dist/entry.webpack';
import React, { Component } from 'react';


export default props=>{

    return(
        <Document
        file= '../assets/pdfs/resume.pdf' >
        </Document>
    );
}
