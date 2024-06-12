import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectAreaCalculations from './Pdf';
import Pdf2 from './Pdf2';
import html2pdf from 'html2pdf.js';
import useDarkMode from 'use-dark-mode'; // Import the useDarkMode hook

function DownloadPdf() {
    const darkMode = useDarkMode(false); // Initialize darkMode state
    const dispatch = useDispatch();
    const projectAreaRef = useRef(null);
    const { formData } = useSelector((state) => state.form);

    const buttonStyle = {
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: darkMode.value ? '#fff' : '#000',
        color: darkMode.value ? '#000' : '#fff',
        border: 'none',
        cursor: 'pointer',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center'
    }

    const generatePdf = () => {
        const pdfContainer = document.getElementById('pdf-container');

        html2pdf()
            .from(pdfContainer)
            .set({
                html2canvas: { scale: 2 }, // Adjust scale for better resolution
                filename: 'download.pdf',
                margin: [10, 10], // Adjust margins if needed
                jsPDF: { format: 'a3', orientation: 'portrait' } // Set A3 page size
            })
            .toPdf()
            .get('pdf')
            .then(function (pdf) {
                const totalPages = pdf.internal.getNumberOfPages();
                if (totalPages > 2) {
                    // Remove extra pages
                    for (let i = totalPages; i > 2; i--) {
                        pdf.deletePage(i);
                    }
                }
            })
            .save();
    };

    return (
        <div>
            <div id="pdf-container" className="pdf">
                <ProjectAreaCalculations formData={formData} ref={projectAreaRef} />
                <Pdf2 formData={formData} ref={projectAreaRef} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={buttonStyle} onClick={generatePdf}>Generate PDF</button>
            </div>
        </div>
    );
}

export default DownloadPdf;
