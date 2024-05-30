import React from 'react'
import useDarkMode from 'use-dark-mode'; // Import the useDarkMode hook

function Pdf2() {
    const darkMode = useDarkMode(false); // Initialize darkMode state

    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: darkMode.value ? '#000' : '#fff',
        color: darkMode.value ? '#fff' : '#000',
        padding: '30px',
        borderRadius: '8px',
        marginBottom: '200px', // Center the content horizontally
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
        fontSize: '14px',
    };

    const thStyle = {
        ...thTdStyle,
        backgroundColor: darkMode.value ? '#444' : '#f2f2f2',
        textAlign: 'center',
        fontSize: '14px',
    };
    const highlightStyle = {
        backgroundColor: darkMode.value ? '#125469' : '#91c77d',
    };
    return (

        <div className="App" style={containerStyle}>
            <table style={tableStyle} >
                <thead>
                    <tr>
                        <th style={thTdStyle}></th>
                        <th style={thTdStyle}></th>
                        <th style={thTdStyle}></th>
                        <th style={thTdStyle}>23150.00</th>
                        <th style={thTdStyle}>35940.38</th>
                    </tr>
                    <tr>
                        <th style={thStyle}>Sr No</th>
                        <th style={thStyle}>Details</th>
                        <th style={thStyle}>Particulars</th>
                        <th style={thStyle}>Rehab</th>
                        <th style={thStyle}>PTC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={thTdStyle}>1</td>
                        <td style={thTdStyle}>Construction area computation</td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}></td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>a</td>
                        <td style={thTdStyle}>construction area of buildings</td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle} rowSpan={'2'}>32410.00</td>
                        <td style={thTdStyle} rowSpan={'2'}>53910.56</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>b</td>
                        <td style={thTdStyle}>construction areas of parking</td>
                        <td style={thTdStyle}></td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>Area of construction in sft </td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>348861.24</td>
                        <td style={thTdStyle}>580293.29</td>
                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}>2</td>
                        <td style={thTdStyle}>Direct costs</td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}></td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>a</td>
                        <td style={thTdStyle}>Construction cost</td>
                        <td style={thTdStyle}>RS. 3500 Rs per sft</td>
                        <td style={thTdStyle}>122.10</td>
                        <td style={thTdStyle}>203.10</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>b</td>
                        <td style={thTdStyle}>infrastructure cost</td>
                        <td style={thTdStyle}>for Rehab Rs. 50 Rs per sft and for PTC 50 RS per sft.</td>
                        <td style={thTdStyle}>1.74</td>
                        <td style={thTdStyle}>2.90</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>c</td>
                        <td style={thTdStyle}>SRA expenses</td>
                        <td style={thTdStyle}>(construction area x 500 psft )</td>
                        <td style={thTdStyle}>17.44</td>
                        <td style={thTdStyle}>29.01</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>d</td>
                        <td style={thTdStyle}>fungible premium</td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}></td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>e</td>
                        <td style={thTdStyle}>Unofficial expenses</td>
                        <td style={thTdStyle}>(construction area x 200 psft)</td>
                        <td style={thTdStyle}>6.98</td>
                        <td style={thTdStyle}>11.61</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>Total Direct costs</td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>141.29</td>
                        <td style={thTdStyle}>246.62</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>3</td>
                        <td style={thTdStyle}>Indirect expenses</td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}></td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>a</td>
                        <td style={thTdStyle}>consultants fees ( Architect )</td>
                        <td style={thTdStyle}>(construction area x 200 psft )</td>
                        <td style={thTdStyle}>2.83</td>
                        <td style={thTdStyle}>4.93</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>b</td>
                        <td style={thTdStyle}>Other consultant fees ( structural and mep )</td>
                        <td style={thTdStyle}>1.0 % on the total project cost</td>
                        <td style={thTdStyle}>1.41</td>
                        <td style={thTdStyle}>2.47</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>c</td>
                        <td style={thTdStyle}>Rent</td>
                        <td style={thTdStyle}>Approx. (450 x 18000 x 24 months )</td>
                        <td style={thTdStyle}>19.44</td>
                        <td style={thTdStyle}></td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>Total indirect costs</td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>23.68</td>
                        <td style={thTdStyle}>7.40</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle} rowSpan={'2'}></td>
                        <td style={thTdStyle} rowSpan={'2'}>Project cost of direct and indirect expenses</td>
                        <td style={thTdStyle} rowSpan={'2'}></td>
                        <td style={thTdStyle} >164.97</td>
                        <td style={thTdStyle} >254.02</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle} ></td>
                        <td style={thTdStyle} >418.99</td>

                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>Grand total of the project costs including all expenses and profits</td>
                        <td style={thTdStyle}>Cost in CR</td>
                        <td style={thTdStyle} colSpan={'2'}>418.99</td>
                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>saleable area buildings in Sft</td>
                        <td style={thTdStyle}>Area in Sqft ( 26622.50 X 10.764 )</td>
                        <td style={thTdStyle} colSpan={'2'}>386862.20</td>
                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>Rera Carpet area of sale</td>
                        <td style={thTdStyle}>( 286564.59 / 1.10 )</td>
                        <td style={thTdStyle} colSpan={'2'}>351692.91</td>
                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>Rate / sft on Building built up</td>
                        <td style={thTdStyle}>Rate / sft</td>
                        <td style={thTdStyle} colSpan={'2'}>18000.00</td>
                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>Income from sale bua</td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle} colSpan={'2'}>633.05</td>
                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>Gross Profit</td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle} colSpan={'2'}>214.06</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Pdf2
