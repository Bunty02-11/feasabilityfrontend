import React, { useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode'; // Import the useDarkMode hook

const ProjectAreaCalculations = ({ formData }) => {
    const darkMode = useDarkMode(false); // Initialize darkMode state

    const [netArea, setNetArea] = useState(0);
    const [societyOffice, setSocietyOffice] = useState(0);
    const [amenities, setAmenities] = useState(0);
    const [totalTenements, setTotalTenements] = useState(0);
    const [tenement_perDensity, setTenement_perDensity] = useState(0);

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
        const netAreaValue = formData.plotArea - formData.rgArea - formData.road_setbackArea - formData.Other_Reservation;
        localStorage.setItem("netArea", netAreaValue.toString());
        setNetArea(netAreaValue);
        console.log(netArea)
    }, [formData]);

    useEffect(() => {
        const tenement_perDensityValue = netArea * 0.065;
        // console.log(tenement_perDensity)
        localStorage.setItem("tenement_perDensity", tenement_perDensityValue.toString());
        setTenement_perDensity(tenement_perDensityValue);
    }, [formData]);

    useEffect(() => {
        let societyOfficeValue = 1;
        if (formData.tenementsRequired > 100) {
            societyOfficeValue = Math.ceil(formData.tenementsRequired / 100);
        }
        localStorage.setItem("societyOffice", societyOfficeValue.toString());
        setSocietyOffice(societyOfficeValue);
    }, [formData]);

    useEffect(() => {
        let amenitiesValues = 4;
        if (formData.tenementsRequired > 250) {
            amenitiesValues = Math.ceil(formData.tenementsRequired / 62.5);
        }
        localStorage.setItem("amenities", amenitiesValues.toString());
        setAmenities(amenitiesValues);
    }, [formData]);

    useEffect(() => {
        if (formData.tenementsRequired && tenement_perDensity && amenities && societyOffice) {
            const tenementsRequiredValue = parseFloat(formData.tenementsRequired);
            const totalTenementsValue = tenementsRequiredValue > tenement_perDensity
                ? tenementsRequiredValue + amenities + societyOffice
                : amenities + societyOffice + tenement_perDensity;

            localStorage.setItem("totalTenements", totalTenementsValue.toString());
            setTotalTenements(totalTenementsValue);
        }
    }, [formData, tenement_perDensity, amenities, societyOffice]);

    return (
        <div className="pdf" style={containerStyle}>
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
                        <td style={thTdStyle}>{formData.road_setbackArea}</td>
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
                        <td style={thTdStyle}>Area of the Plot</td>
                        <td style={thTdStyle}>634.70</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>2</td>
                        <td style={thTdStyle}>Less: Road set back area</td>
                        <td style={thTdStyle}>81.97</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>3</td>
                        <td style={thTdStyle}>Net Area</td>
                        <td style={thTdStyle}>552.73</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>4</td>
                        <td style={thTdStyle}>Add: Road set back area</td>
                        <td style={thTdStyle}>81.97</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>5</td>
                        <td style={thTdStyle}>Total Area for F.S.I.</td>
                        <td style={thTdStyle}>634.70</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>6</td>
                        <td style={thTdStyle}>F.S.I. Permissible</td>
                        <td style={thTdStyle}>4.00</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>7</td>
                        <td style={thTdStyle}>Permissible Floor Area</td>
                        <td style={thTdStyle}>2538.80</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>8</td>
                        <td style={thTdStyle}>Rehab F.S.I. (36 X 33.45)</td>
                        <td style={thTdStyle}>1204.20</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>9</td>
                        <td style={{ ...thTdStyle, ...highlightStyle }}>Rehab Component (41 X 45.00)</td>
                        <td style={{ ...thTdStyle, ...highlightStyle }}>1845.00</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>10</td>
                        <td style={thTdStyle}>Sale Component</td>
                        <td style={thTdStyle}></td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>11</td>
                        <td style={thTdStyle}>Total Sale F.S.I. (1845 X 1.10)</td>
                        <td style={thTdStyle}>2029.50</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>12</td>
                        <td style={thTdStyle}>Add: 35% Fugible Area</td>
                        <td style={thTdStyle}>710.33</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>13</td>
                        <td style={thTdStyle}>Total sale area including 35% fungible</td>
                        <td style={thTdStyle}>2739.83</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>14</td>
                        <td style={{ ...thTdStyle, ...highlightStyle }}>Rehab Construction area</td>
                        <td style={{ ...thTdStyle, ...highlightStyle }}>2767.50</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>15</td>
                        <td style={{ ...thTdStyle, ...highlightStyle }}>Sale Construction area</td>
                        <td style={{ ...thTdStyle, ...highlightStyle }}>4109.74</td>
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
