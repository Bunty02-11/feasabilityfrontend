import React, { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import useDarkMode from 'use-dark-mode'; // Import the useDarkMode hook

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
    const [totalSale, setTotalSale] = useState(0);
    const [fungible, setFungible] = useState(0);
    const [totalArea_includingFungible, setTotalArea_includingFungible] = useState(0);

    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: darkMode.value ? '#000' : '#fff', // Toggle background color for dark mode
        color: darkMode.value ? '#fff' : '#000', // Toggle text color for dark mode
        padding: '20px',
        borderRadius: '8px',
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

        const netAreaValue = plotArea - rgArea - roadSetbackArea - otherReservation;
        localStorage.setItem("netArea", netAreaValue.toString());
        setNetArea(netAreaValue);

        const tenement_perDensityValue = netAreaValue * 0.065;
        localStorage.setItem("tenement_perDensity", tenement_perDensityValue.toString());
        setTenement_perDensity(tenement_perDensityValue);

        let societyOfficeValue = 1;
        if (tenementsRequired > 100) {
            societyOfficeValue = Math.ceil(tenementsRequired / 100);
        }
        localStorage.setItem("societyOffice", societyOfficeValue.toString());
        setSocietyOffice(societyOfficeValue);

        let amenitiesValues = 4;
        if (tenementsRequired > 250) {
            amenitiesValues = Math.ceil(tenementsRequired / 62.5);
        }
        localStorage.setItem("amenities", amenitiesValues.toString());
        setAmenities(amenitiesValues);

        if (tenementsRequired && tenement_perDensityValue && amenitiesValues && societyOfficeValue) {
            const totalTenementsValue = tenementsRequired > tenement_perDensityValue
                ? tenementsRequired + amenitiesValues + societyOfficeValue
                : amenitiesValues + societyOfficeValue + tenement_perDensityValue;

            localStorage.setItem("totalTenements", totalTenementsValue.toString());
            setTotalTenements(totalTenementsValue);
        }

        if (!isNaN(netAreaValue) && !isNaN(roadSetbackArea)) {
            const totalArea_FSIValue = netAreaValue + roadSetbackArea;
            localStorage.setItem("totalArea_FSI", totalArea_FSIValue.toString());
            setTotalArea_FSI(totalArea_FSIValue);
        } else {
            console.error("Invalid input: netArea or less_road_setbackArea is not a number.");
        }

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

        if (tenementsRequired && tenement_perDensityValue) {
            const roundedDensityValue = Math.round(tenement_perDensityValue);
            const rehabFsiValue = tenementsRequired > roundedDensityValue
                ? Math.round(tenementsRequired * 33.45)
                : roundedDensityValue * 33.45;

            localStorage.setItem("rehabFsi", rehabFsiValue.toString());
            setRehabFsi(rehabFsiValue);
        }

        const roundedTotalTenements = Math.round(totalTenements);
        const rehabComponentValue = roundedTotalTenements * 50;
        localStorage.setItem("rehabComponent", rehabComponentValue.toString());
        setRehabComponent(rehabComponentValue);

        const totalSaleValue = rehabComponent * 1.15;
        localStorage.setItem("totalSale", totalSaleValue.toString());
        setTotalSale(totalSaleValue);

        const fungibleValue = totalSale * 0.35;
        localStorage.setItem("fungible", fungibleValue.toString());
        setFungible(fungibleValue);

        const totalArea_includingFungibleValue = totalSale + fungible;
        localStorage.setItem("totalArea_includingFungible", totalArea_includingFungibleValue.toString());
        setTotalArea_includingFungible(totalArea_includingFungibleValue);

    }, [formData]);
    return (
        <div style={containerStyle}>
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
                        <td style={thTdStyle}>Recreation Ground</td>
                        <td style={thTdStyle}>{formData.rgArea}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>3</td>
                        <td style={thTdStyle}>Less Road Setback Area</td>
                        <td style={thTdStyle}>{formData.less_road_setbackArea}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>4</td>
                        <td style={thTdStyle}>Other Reservation</td>
                        <td style={thTdStyle}>{formData.Other_Reservation}</td>
                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}>5</td>
                        <td style={thTdStyle}>Net Area</td>
                        <td style={thTdStyle}>{netArea}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>6</td>
                        <td style={thTdStyle}>Tenements permissible as per density (650 Ten/sq.km)</td>
                        <td style={thTdStyle}>{tenement_perDensity}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>7</td>
                        <td style={thTdStyle}>Tenements Required</td>
                        <td style={thTdStyle}>{formData.tenementsRequired}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>8</td>
                        <td style={thTdStyle}>Society Office</td>
                        <td style={thTdStyle}>{societyOffice}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>9</td>
                        <td style={thTdStyle}>Amenities</td>
                        <td style={thTdStyle}>{amenities}</td>
                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}>10</td>
                        <td style={thTdStyle}>Total Tenements</td>
                        <td style={thTdStyle}>{totalTenements}</td>
                    </tr>
                </tbody>
            </table>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th colSpan="3" style={thStyle}>FSI STATEMENT</th>
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
                        <td style={thTdStyle}>Net Area</td>
                        <td style={thTdStyle}>{netArea}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>2</td>
                        <td style={thTdStyle}>Less Road Setback Area</td>
                        <td style={thTdStyle}>{formData.less_road_setbackArea}</td>
                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}>3</td>
                        <td style={thTdStyle}>Total Area for FSI</td>
                        <td style={thTdStyle}>{totalArea_FSI}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>4</td>
                        <td style={thTdStyle}>FSI</td>
                        <td style={thTdStyle}>{fsi}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>5</td>
                        <td style={thTdStyle}>Total Construction Area (Rehab FSI)</td>
                        <td style={thTdStyle}>{rehabFsi}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>6</td>
                        <td style={thTdStyle}>Rehab Component (50 sq.m per tenement)</td>
                        <td style={thTdStyle}>{rehabComponent}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>7</td>
                        <td style={thTdStyle}>Sale Component (15%)</td>
                        <td style={thTdStyle}>{totalSale}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>8</td>
                        <td style={thTdStyle}>Fungible</td>
                        <td style={thTdStyle}>{fungible}</td>
                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}>9</td>
                        <td style={thTdStyle}>Total Area including fungible</td>
                        <td style={thTdStyle}>{totalArea_includingFungible}</td>
                    </tr>
                </tbody>
            </table>
            <div style={noteStyle}>
                Note: All calculations are based on the data provided and may vary based on actual measurements and changes in regulations.
            </div>
        </div>
    );
}

export default ProjectAreaCalculations;
