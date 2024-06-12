import React from 'react'
import useDarkMode from 'use-dark-mode'; // Import the useDarkMode hook
import useFormDataCalculations from './Calculation';

function Pdf2({ formData }) {
    const darkMode = useDarkMode(false); // Initialize darkMode state
    const {  rehabComponent, totalArea_includingFungible, rehabConstructionArea, saleConstructionArea, projectCostSale, constructionRehabAreaSQFT, constructionSaleAreaSQFT, constructionCostRehabSq,constructionCostSaleSq, sraExpensesRehab, sraExpensesSale,infraStructureRehab, infraStructureSale, fungibleSale, outerExpensesRehab, outerExpensesSale, rent, brokerage, shifting, totalCostRehab, totalCostSale, consultantFeesRehab, consultantFeesSale,otherconsultantFeesRehab ,otherconsultantFeesSale, totalIndirectCostRehab, totalIndirectCostSale, projectCostRehab, projectCostRehabSale, saleAbleCarpetArea, reraCarpetArea, saleBUA, profit, carParking2, netProfit } = useFormDataCalculations(formData);

    const containerStyle = {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: darkMode.value ? '#000' : '#fff',
        color: darkMode.value ? '#fff' : '#000',
        padding: '30px',
        borderRadius: '8px',
        marginBottom: '200px', // Center the content horizontally
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

        <div style={containerStyle}>
            <table style={tableStyle} >
                <thead>
                    <tr>
                        <th style={thTdStyle}></th>
                        <th style={thTdStyle}></th>
                        <th style={thTdStyle}></th>
                        <th style={thTdStyle}>{ rehabComponent}</th>
                        <th style={thTdStyle}>{ totalArea_includingFungible}</th>
                    </tr>
                    <tr>
                        <th style={thStyle}>Sr No</th>
                        <th style={thStyle}>Details</th>
                        <th style={thStyle}>Particulars</th>
                        <th style={thStyle}>Rehab</th>
                        <th style={thStyle}>Sale</th>
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
                        <td style={thTdStyle} rowSpan={'2'}>{(rehabConstructionArea).toFixed(2)}</td>
                        <td style={thTdStyle} rowSpan={'2'}>{(saleConstructionArea).toFixed(2)}</td>
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
                        <td style={thTdStyle}>{(constructionRehabAreaSQFT).toFixed(2)}</td>
                        <td style={thTdStyle}>{(constructionSaleAreaSQFT).toFixed()}</td>
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
                        <td style={thTdStyle}>for Rehab RS. 3000 Rs per sft and for sale 3500 RS per sft. </td>
                        <td style={thTdStyle}>{(constructionCostRehabSq).toFixed(2)}</td>
                        <td style={thTdStyle}>{(constructionCostSaleSq).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>b</td>
                        <td style={thTdStyle}>infrastructure cost</td>
                        <td style={thTdStyle}>for Rehab Rs. 50 Rs per sft and for PTC 50 RS per sft.</td>
                        <td style={thTdStyle}>{infraStructureRehab.toFixed(2)}</td>
                        <td style={thTdStyle}>{infraStructureSale.toFixed()}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>c</td>
                        <td style={thTdStyle}>SRA expenses</td>
                        <td style={thTdStyle}>(construction area x cost psft )</td>
                        <td style={thTdStyle}>{(sraExpensesRehab).toFixed(2)}</td>
                        <td style={thTdStyle}>{(sraExpensesSale).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>d</td>
                        <td style={thTdStyle}>fungible premium</td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>0.00</td>
                        <td style={thTdStyle}>{(fungibleSale).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>e</td>
                        <td style={thTdStyle}>Out of Pocket Expenses</td>
                        <td style={thTdStyle}>(construction area x cost psft)</td>
                        <td style={thTdStyle}>{(outerExpensesRehab).toFixed(2)}</td>
                        <td style={thTdStyle}>{(outerExpensesSale).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>f</td>
                        <td style={thTdStyle}>Rent</td>
                        <td style={thTdStyle}>( Rent PP X no.of existing tenants X  tenure )</td>
                        <td style={thTdStyle}>{(rent).toFixed(2)}</td>
                        <td style={thTdStyle}></td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>g</td>
                        <td style={thTdStyle}>Brokerage</td>
                        <td style={thTdStyle}>(construction area x 200 psft)</td>
                        <td style={thTdStyle}>{(brokerage).toFixed(2)}</td>
                        <td style={thTdStyle}></td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>h</td>
                        <td style={thTdStyle}>Shifting</td>
                        <td style={thTdStyle}>(construction area x 200 psft)</td>
                        <td style={thTdStyle}>{(shifting).toFixed(2)}</td>
                        <td style={thTdStyle}></td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>Total Direct costs</td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>{(totalCostRehab).toFixed(2)}</td>
                        <td style={thTdStyle}>{(totalCostSale).toFixed(2)}</td>
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
                        <td style={thTdStyle}>2.0 % on the total project cost</td>
                        <td style={thTdStyle}>{(consultantFeesRehab).toFixed(2)}</td>
                        <td style={thTdStyle}>{(consultantFeesSale).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}>b</td>
                        <td style={thTdStyle}>Other consultant fees ( structural and mep )</td>
                        <td style={thTdStyle}>1.0 % on the total project cost</td>
                        <td style={thTdStyle}>{(otherconsultantFeesRehab).toFixed(2)}</td>
                        <td style={thTdStyle}>{(otherconsultantFeesSale).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>Total indirect costs</td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>{(totalIndirectCostRehab).toFixed(2)}</td>
                        <td style={thTdStyle}>{(totalIndirectCostSale).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle} rowSpan={'2'}></td>
                        <td style={thTdStyle} rowSpan={'2'}>Project cost of direct and indirect expenses</td>
                        <td style={thTdStyle} rowSpan={'2'}></td>
                        <td style={thTdStyle} >{(projectCostRehab).toFixed(2)}</td>
                        <td style={thTdStyle} >{(projectCostSale).toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td style={thTdStyle} ></td>
                        <td style={thTdStyle} >{(projectCostRehabSale).toFixed(2)}</td>

                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>Grand total of the project costs including all expenses and profits</td>
                        <td style={thTdStyle}>Cost in CR</td>
                        <td style={thTdStyle} colSpan={'2'}>{(projectCostRehabSale).toFixed(2)}</td>
                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>saleable area buildings in Sft</td>
                        <td style={thTdStyle}>Area in Sqft ( 26622.50 X 10.764 )</td>
                        <td style={thTdStyle} colSpan={'2'}>{(saleAbleCarpetArea).toFixed(2)}</td>
                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>Rera Carpet area of sale</td>
                        <td style={thTdStyle}>( 286564.59 / 1.10 )</td>
                        <td style={thTdStyle} colSpan={'2'}>{(reraCarpetArea).toFixed(2)}</td>
                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>Rate / sft on Building built up</td>
                        <td style={thTdStyle}>Rate / sft</td>    
                        <td style={thTdStyle} colSpan={'2'}>{formData.buildingBuiltUp}</td>
                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>Income from sale bua</td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle} colSpan={'2'}>{(saleBUA).toFixed(2)}</td>
                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>Profit</td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle} colSpan={'2'}>{(profit).toFixed(2)}</td>
                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>ADD: Car Parking Income</td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle} colSpan={'2'}>{(carParking2).toFixed(2)}</td>
                    </tr>
                    <tr style={highlightStyle}>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle}>Net Profit</td>
                        <td style={thTdStyle}></td>
                        <td style={thTdStyle} colSpan={'2'}>{(netProfit).toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Pdf2
