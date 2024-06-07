import React, { useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode'; // Import the useDarkMode hook
import useFormDataCalculations from './Calculation';

const ProjectAreaCalculations = ({ formData }) => {
    const darkMode = useDarkMode(false); // Initialize darkMode state
    const { netArea, tenement_perDensity,  societyOffice, amenities, totalTenements, totalArea_FSI, fsi, rehabFsi, rehabComponent, totalSale, fungible, totalArea_includingFungible, rehabConstructionArea, saleConstructionArea  } = useFormDataCalculations(formData);

    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: darkMode.value ? '#000' : '#fff',
        color: darkMode.value ? '#fff' : '#000',
        padding: '30px',
        borderRadius: '8px',
        margin: 'auto', // Center the content horizontally
    };

    const headingStyle = {
        textAlign: 'center',
        fontSize: '1.2em',
        marginBottom: '20px',
        color: darkMode.value ? '#fff' : '#000', // Toggle text color for dark mode
        fontWeight: 'bold', // Make text bold
    };


    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px',
    };

    const thTdStyle = {
        border: `2px solid ${darkMode.value ? '#fff' : '#000'}`,
        padding: '8px',
        textAlign: 'left',
        fontSize: '10px',
    };

    const thStyle = {
        ...thTdStyle,
        backgroundColor: darkMode.value ? '#444' : '#f2f2f2',
        textAlign: 'center',
        fontSize: '12px',
    };

    const highlightStyle = {
        backgroundColor: darkMode.value ? '#125469' : '#d9ead3',
    };

    const noteStyle = {
        fontSize: '10px',
        marginTop: '10px',
    };





    return (
        <div id="pdf-container" className="pdf" style={containerStyle}>
            <h3 style={headingStyle}>{formData.plotName}</h3>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th colSpan="3" style={thStyle}>TENEMENT STATEMENT</th>
                    </tr>
                    <tr>
                        <th style={thStyle}>Sr No</th>
                        <th style={thStyle}>Description</th>
                        <th style={thStyle}>Area in sqm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={thTdStyle}>Reg. 33(10)</td>
                        <td style={thTdStyle}>Slum</td>
                        <td style={thTdStyle}></td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>1</td>
                        <td style={thTdStyle}>Area of the Plot</td>
                        <td style={thTdStyle}>{formData.plotArea}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>2</td>
                        <td style={thTdStyle}>Less: RG area</td>
                        <td style={thTdStyle}>{formData.rgArea}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>3</td>
                        <td style={thTdStyle}>Less: Road set back area</td>
                        <td style={thTdStyle}>{formData.less_road_setbackArea}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>4</td>
                        <td style={thTdStyle}>Less: Other Reservations</td>
                        <td style={thTdStyle}>{formData.Other_Reservation}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>5</td>
                        <td style={thTdStyle}>Net Area</td>
                        <td style={thTdStyle}>{netArea.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>6</td>
                        <td style={thTdStyle}>Nos. of tenements Required as per density (650/Hectare)</td>
                        <td style={thTdStyle}>{tenement_perDensity.toFixed(0)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>7</td>
                        <td style={thTdStyle}>No. of existing tenements</td>
                        <td style={thTdStyle}>{formData.tenementsRequired}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>8</td>
                        <td style={thTdStyle}>Nos. of society office Required</td>
                        <td style={thTdStyle}>{societyOffice}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>9</td>
                        <td style={thTdStyle}>Balwadi, Welfare + 2 other Amenity</td>
                        <td style={thTdStyle}>{amenities}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>10</td>
                        <td style={thTdStyle}>Total Required Tenements & Amenity</td>
                        <td style={thTdStyle}>{totalTenements.toFixed(0)}</td>
                    </tr>
                </tbody>
            </table>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th colSpan="3" style={thStyle}>AREA STATEMENT</th>
                    </tr>
                    <tr>
                        <th style={thStyle}>Sr No</th>
                        <th style={thStyle}>Description</th>
                        <th style={thStyle}>Area in sqm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={thTdStyle}>1</td>
                        <td style={thTdStyle}>Area of Plot</td>
                        <td style={thTdStyle}>{formData.plotArea}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>2</td>
                        <td style={thTdStyle}>Less: RG area</td>
                        <td style={thTdStyle}>{formData.rgArea}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>3</td>
                        <td style={thTdStyle}>Less: Road set back area</td>
                        <td style={thTdStyle}>{formData.less_road_setbackArea}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>4</td>
                        <td style={thTdStyle}>Less: Other Reservations</td>
                        <td style={thTdStyle}>{formData.Other_Reservation}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>5</td>
                        <td style={thTdStyle}>Net Area</td>
                        <td style={thTdStyle}>{netArea.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>6</td>
                        <td style={thTdStyle}>Add: Road set back area</td>
                        <td style={thTdStyle}>{(Number(formData.less_road_setbackArea) + Number(formData.Other_Reservation) + Number(formData.rgArea)).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>7</td>
                        <td style={thTdStyle}>Total Area for F.S.I.</td>
                        <td style={thTdStyle}>{totalArea_FSI.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>8</td>
                        <td style={thTdStyle}>F.S.I. Permissible</td>
                        <td style={thTdStyle}>{fsi}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>9</td>
                        <td style={thTdStyle}>Permissible Floor Area</td>
                        <td style={thTdStyle}>{(totalArea_FSI * fsi).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>10</td>
                        <td style={thTdStyle}>Rehab F.S.I.</td>
                        <td style={thTdStyle}>{rehabFsi.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>11</td>
                        <td style={{ ...thTdStyle, ...highlightStyle }}>Rehab Component</td>
                        <td style={{ ...thTdStyle, ...highlightStyle }}>{rehabComponent}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>12</td>
                        <td style={thTdStyle}>Sale Component</td>
                        <td style={thTdStyle}></td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>13</td>
                        <td style={thTdStyle}>Total Sale F.S.I. (1845 X 1.10)</td>
                        <td style={thTdStyle}>{totalSale.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>14</td>
                        <td style={thTdStyle}>Add: 35% Fugible Area</td>
                        <td style={thTdStyle}>{fungible.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>15</td>
                        <td style={thTdStyle}>Total sale area including 35% fungible</td>
                        <td style={thTdStyle}>{(totalArea_includingFungible).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>16</td>
                        <td style={{ ...thTdStyle, ...highlightStyle }}>Rehab Construction area</td>
                        <td style={{ ...thTdStyle, ...highlightStyle }}>{(rehabConstructionArea).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>17</td>
                        <td style={{ ...thTdStyle, ...highlightStyle }}>Sale Construction area</td>
                        <td style={{ ...thTdStyle, ...highlightStyle }}>{(saleConstructionArea).toFixed()}</td>
                    </tr>
                </tbody>
            </table>
            <div style={noteStyle}>
                <p>Note:</p>
                <p>1) Above feasibility report is subject to approval from SRA.</p>
                <p>2) There is 13.40 W DP Road</p>
                <p>3) Scheme is prepared as per Reg. 33(10)</p>
                <p>4) Plot area mentioned is subject to demarcation of site.</p>
            </div>
        </div>
    );
}

export default ProjectAreaCalculations;
