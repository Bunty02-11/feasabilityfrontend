import React from 'react';

const ProjectAreaCalculations = () => {
    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
    };

    const headingStyle = {
        textAlign: 'center',
        fontSize: '1.2em',
        marginBottom: '20px',
    };

    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '20px',
    };

    const thTdStyle = {
        border: '1px solid #000',
        padding: '8px',
        textAlign: 'left',
        fontSize: '10px',
    };

    const thStyle = {
        ...thTdStyle,
        backgroundColor: '#f2f2f2',
        textAlign: 'center',
        fontSize: '12px',
    };

    const highlightStyle = {
        backgroundColor: '#d9ead3',
    };

    const noteStyle = {
        fontSize: '10px',
        marginTop: '10px',
    };

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
                        <td style={thTdStyle}>634.70</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>2</td>
                        <td style={thTdStyle}>Less: RG area</td>
                        <td style={thTdStyle}>0.00</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>3</td>
                        <td style={thTdStyle}>Less: Road set back area</td>
                        <td style={thTdStyle}>81.97</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>4</td>
                        <td style={thTdStyle}>Net Area</td>
                        <td style={thTdStyle}>552.73</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>5</td>
                        <td style={thTdStyle}>Nos. of tenements Required as per density (650/Hectare)</td>
                        <td style={thTdStyle}>36.00</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>6</td>
                        <td style={thTdStyle}>No. of existing tenements</td>
                        <td style={thTdStyle}>17.00</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>7</td>
                        <td style={thTdStyle}>Nos. of society office Required</td>
                        <td style={thTdStyle}>1</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>8</td>
                        <td style={thTdStyle}>Balwadi, Welfare + 2 other Amenity</td>
                        <td style={thTdStyle}>4</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>9</td>
                        <td style={thTdStyle}>Total Required Tenements & Amenity (4 + 5 + 6)</td>
                        <td style={thTdStyle}>41.00</td>
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
