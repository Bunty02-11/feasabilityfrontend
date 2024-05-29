import React, { useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode'; // Import the useDarkMode hook
import html2pdf from 'html2pdf.js'; // Import html2pdf

const ProjectAreaCalculations = ({ formData }) => {
    const darkMode = useDarkMode(false); // Initialize darkMode state

    const [netArea, setNetArea] = useState(0);
    const [societyOffice, setSocietyOffice] = useState(0);
    const [amenities, setAmenities] = useState(0);
    const [totalTenements, setTotalTenements] = useState(0);
    const [tenement_perDensity, setTenement_perDensity] = useState(0);
    const [totalArea_FSI, setTotalArea_FSI] = useState(0);
    const [fsi, setFsi] = useState(0);
    const [rehabFsi, setRehabFsi] = useState(0);
    const [rehabComponent, setRehabComponent] = useState(0);
    const [ totalSale, setTotalSlae] = useState(0);
    const [ fungible, setFungible] = useState(0);
    const [ totalArea_includingFungible, setTotalArea_includingFungible] = useState(0);
    
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

    useEffect(() => {
        const plotArea = parseFloat(formData.plotArea) || 0;
        const rgArea = parseFloat(formData.rgArea) || 0;
        const roadSetbackArea = parseFloat(formData.less_road_setbackArea) || 0;
        const otherReservation = parseFloat(formData.Other_Reservation) || 0;
        const tenementsRequired = parseFloat(formData.tenementsRequired) || 0;
        const roadWidth = parseFloat(formData.roadWidth) || 0;
        //

        const netAreaValue = plotArea - rgArea - roadSetbackArea - otherReservation;
        localStorage.setItem("netArea", netAreaValue.toString());
        setNetArea(netAreaValue);

        //

        const tenement_perDensityValue = netAreaValue * 0.065;
        localStorage.setItem("tenement_perDensity", tenement_perDensityValue.toString());
        setTenement_perDensity(tenement_perDensityValue);

        //

        let societyOfficeValue = 1;
        if (tenementsRequired > 100) {
            societyOfficeValue = Math.ceil(tenementsRequired / 100);
        }
        localStorage.setItem("societyOffice", societyOfficeValue.toString());
        setSocietyOffice(societyOfficeValue);

        //

        let amenitiesValues = 4;
        if (tenementsRequired > 250) {
            amenitiesValues = Math.ceil(tenementsRequired / 62.5);
        }
        localStorage.setItem("amenities", amenitiesValues.toString());
        setAmenities(amenitiesValues);

        //

        if (tenementsRequired && tenement_perDensityValue && amenitiesValues && societyOfficeValue) {
            const totalTenementsValue = tenementsRequired > tenement_perDensityValue
                ? tenementsRequired + amenitiesValues + societyOfficeValue
                : amenitiesValues + societyOfficeValue + tenement_perDensityValue;

            localStorage.setItem("totalTenements", totalTenementsValue.toString());
            console.log(totalTenements)
            setTotalTenements(totalTenementsValue);
        }

        //

        if (!isNaN(netAreaValue) && !isNaN(roadSetbackArea)) {
            const totalArea_FSIValue = netAreaValue + roadSetbackArea;
            localStorage.setItem("totalArea_FSI", totalArea_FSIValue.toString());
            setTotalArea_FSI(totalArea_FSIValue);
        } else {
            console.error("Invalid input: netArea or less_road_setbackArea is not a number.");
        }

        //

        let fsiValue;
        if (roadWidth >= 0 && roadWidth <= 12.9) {
            fsiValue = 3;
        } else if (roadWidth > 12.9) {
            fsiValue = 4;
        } else {
            console.error("Invalid road width");
        }
        localStorage.setItem("fsi", fsiValue.toString());
        setFsi(fsiValue);

        //
        if (tenementsRequired && tenement_perDensityValue) {
            // Round tenement_perDensityValue to the nearest whole number
            const roundedDensityValue = Math.round(tenement_perDensityValue);

            const rehabFsiValue = tenementsRequired > roundedDensityValue
                ? Math.round(tenementsRequired * 33.45)
                : roundedDensityValue * 33.45;

            localStorage.setItem("rehabFsi", rehabFsiValue.toString());
            console.log(Math.round(roundedDensityValue * 33.45), roundedDensityValue);
            setRehabFsi(rehabFsiValue);
        }

        //

        const roundedTotalTenements = Math.round(totalTenements);
        const rehabComponentValue = roundedTotalTenements * 50;
        localStorage.setItem("rehabComponent", rehabComponentValue.toString());
        setRehabComponent(rehabComponentValue);

        const totalSaleValue = rehabComponent * 1.15;
        localStorage.setItem("totalSale", totalSaleValue.toString());
        console.log(totalSaleValue)
        setTotalSlae(totalSaleValue)
        //
        
        const fungibleValue = totalSale * 0.35;
        localStorage.setItem("fungible", fungibleValue.toString());
        console.log(fungibleValue)
        setFungible(fungibleValue)

        //

        const totalArea_includingFungibleValue = totalSale + fungible;
        localStorage.setItem("totalArea_includingFungible", totalArea_includingFungibleValue.toString());
        console.log(totalArea_includingFungibleValue)
        setTotalArea_includingFungible(totalArea_includingFungibleValue)


    }, [formData]);



    return (
        <div id="pdf-container" className="pdf" style={containerStyle}>
            <h3 style={headingStyle}>
                Project Area Calculations of CTS No. 2547 & 2548 of Village Eksar in R/C Ward, Borivali, Mumbai
            </h3>
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
                        <td style={{ ...thTdStyle, ...highlightStyle }}>{(rehabComponent * 1.4).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>17</td>
                        <td style={{ ...thTdStyle, ...highlightStyle }}>Sale Construction area</td>
                        <td style={{ ...thTdStyle, ...highlightStyle }}>{(totalArea_includingFungible * 1.5).toFixed()}</td>
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
