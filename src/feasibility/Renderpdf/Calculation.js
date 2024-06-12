import { useEffect, useState } from 'react';

const calculateIncentive = (plotArea, basic_Ratio) => {
    if (plotArea <= 4000) {
        if (basic_Ratio <= 2.00) return 1.10;
        if (basic_Ratio <= 4.00) return 0.90;
        if (basic_Ratio <= 6.00) return 0.80;
        return 1.10;
    } else if (plotArea <= 10000) {
        if (basic_Ratio <= 2.00) return 1.15;
        if (basic_Ratio <= 4.00) return 0.95;
        if (basic_Ratio <= 6.00) return 0.85;
        return 1.10;
    } else if (plotArea <= 50000) {
        if (basic_Ratio <= 2.00) return 1.20;
        if (basic_Ratio <= 4.00) return 1.00;
        if (basic_Ratio <= 6.00) return 0.90;
        return 1.20;
    } else if (plotArea <= 100000) {
        if (basic_Ratio <= 2.00) return 1.25;
        if (basic_Ratio <= 4.00) return 1.05;
        if (basic_Ratio <= 6.00) return 0.95;
        return 1.25;
    } else if (plotArea <= 200000) {
        if (basic_Ratio <= 2.00) return 1.30;
        if (basic_Ratio <= 4.00) return 1.10;
        if (basic_Ratio <= 6.00) return 1.00;
        return 1.30;
    } else {
        if (basic_Ratio <= 2.00) return 1.35;
        if (basic_Ratio <= 4.00) return 1.15;
        if (basic_Ratio <= 6.00) return 1.05;
        return 1.35;
    }
};

const useFormDataCalculations = (formData, landRate) => {
    const [netArea, setNetArea] = useState(0);
    const [tenement_perDensity, setTenement_perDensity] = useState(0);
    const [societyOffice, setSocietyOffice] = useState(0);
    const [amenities, setAmenities] = useState(0);
    const [totalTenements, setTotalTenements] = useState(0);
    const [totalArea_FSI, setTotalArea_FSI] = useState(0);
    const [fsi, setFsi] = useState(0);
    const [rehabFsi, setRehabFsi] = useState(0);
    const [rehabComponent, setRehabComponent] = useState(0);
    const [basic_Ratio, setBasic_Ratio] = useState(0);
    const [incentive, setIncentive] = useState(0);
    const [totalSale, setTotalSale] = useState(0);
    const [fungible, setFungible] = useState(0);
    const [totalArea_includingFungible, setTotalArea_includingFungible] = useState(0);
    const [rehabConstructionArea, setRehabConstructionArea] = useState(0);
    const [saleConstructionArea, setSaleConstructionArea] = useState(0);
    const [constructionRehabAreaSQFT, setConstructionRehabAreaSQFT] = useState(0);
    const [constructionSaleAreaSQFT, setConstructionSaleAreaSQFT] = useState(0);
    const [constructionCostRehabSq, setConstructionCostRehabSq] = useState(0);
    const [constructionCostSaleSq, setConstructionCostSaleSq] = useState(0);
    const [sraExpensesRehab, setSraExpensesRehab] = useState(0);
    const [sraExpensesSale, setSraExpensesSale] = useState(0);
    const [infraStructureRehab, setInfraStructureRehab] = useState(0);
    const [infraStructureSale, setInfraStructureSale] = useState(0);
    const [fungibleSale, setFungibleSale] = useState(0);
    const [outerExpensesRehab, setOuterExpensesRehab] = useState(0);
    const [outerExpensesSale, setOuterExpensesSale] = useState(0);
    const [rent, setRent] = useState(0);
    const [brokerage, setBrokerage] = useState(0);
    const [shifting, setShifting] = useState(0);
    const [totalCostRehab, setTotalCostRehab] = useState(0);
    const [totalCostSale, setTotalCostSale] = useState(0);
    const [consultantFeesRehab, setConsultantFeesRehab] = useState(0);
    const [consultantFeesSale, setConsultantFeesSale] = useState(0);
    const [otherconsultantFeesRehab, setOtherConsultantFeesRehab] = useState(0);
    const [otherconsultantFeesSale, setOtherConsultantFeesSale] = useState(0);
    const [totalIndirectCostRehab, setTotalIndirectCostRehab] = useState(0);
    const [totalIndirectCostSale, setTotalIndirectCostSale] = useState(0);
    const [projectCostRehab, setProjectCostRehab] = useState(0);
    const [projectCostSale, setProjectCostSale] = useState(0);
    const [projectCostRehabSale, setProjectCostRehabSale] = useState(0);
    const [saleAbleCarpetArea, setSaleAbleCarpetArea] = useState(0);
    const [reraCarpetArea, setReraCarpetArea] = useState(0);
    const [saleBUA, setSaleBUA] = useState(0);
    const [profit, setProfit] = useState(0);
    const [carParking, setCarParking] = useState(0);
    const [carParking2, setCarParking2] = useState(0);
    const [netProfit, setNetProfit] = useState(0);



    useEffect(() => {
        const plotArea = parseFloat(formData.plotArea) || 0;
        const rgArea = parseFloat(formData.rgArea) || 0;
        const roadSetbackArea = parseFloat(formData.less_road_setbackArea) || 0;
        const otherReservation = parseFloat(formData.Other_Reservation) || 0;
        const tenementsRequired = parseFloat(formData.tenementsRequired) || 0;
        const roadWidth = parseFloat(formData.roadWidth) || 0;


        // Calculate netAreaValue
        const netAreaValue = plotArea - rgArea - roadSetbackArea - otherReservation;
        localStorage.setItem("netArea", netAreaValue.toString());
        setNetArea(netAreaValue);

        // Calculate tenement_perDensityValue
        const tenement_perDensityValue = netAreaValue * 0.065;
        localStorage.setItem("tenement_perDensity", tenement_perDensityValue.toString());
        setTenement_perDensity(tenement_perDensityValue);

        let baseValue = tenementsRequired;

        // Check if tenementsRequired is higher than tenement_perDensityValue
        if (tenementsRequired > tenement_perDensityValue) {
            console.log('The tenementsRequired is higher than the tenement_perDensityValue.');
        } else {
            baseValue = tenement_perDensityValue;
        }

        // Calculate societyOfficeValue
        let societyOfficeValue = 1;
        if (baseValue > 100) {
            societyOfficeValue = Math.ceil(baseValue / 100);
        }
        localStorage.setItem("societyOffice", societyOfficeValue.toString());
        setSocietyOffice(societyOfficeValue);

        // Calculate amenitiesValues
        let amenitiesValues = 4;
        if (baseValue > 250) {
            amenitiesValues = Math.ceil(baseValue / 62.5);
        }
        localStorage.setItem("amenities", amenitiesValues.toString());
        setAmenities(amenitiesValues);

        // Calculate totalTenementsValue
        let totalTenementsValue;
        if (tenementsRequired > tenement_perDensityValue) {
            totalTenementsValue = tenementsRequired + amenitiesValues + societyOfficeValue;
        } else {
            totalTenementsValue = amenitiesValues + societyOfficeValue + tenement_perDensityValue;
        }
        localStorage.setItem("totalTenements", totalTenementsValue.toString());
        setTotalTenements(totalTenementsValue);

        // Calculate totalArea_FSIValue
        const totalArea_FSIValue = netAreaValue + roadSetbackArea + otherReservation;
        localStorage.setItem("totalArea_FSI", totalArea_FSIValue.toString());
        setTotalArea_FSI(totalArea_FSIValue);

        // Calculate fsiValue
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

        // Calculate rehabFsiValue
        const roundedDensityValue = Math.round(tenement_perDensityValue);
        const rehabFsiValue = tenementsRequired > roundedDensityValue
            ? Math.round(tenementsRequired * 33.45)
            : roundedDensityValue * 33.45;
        localStorage.setItem("rehabFsi", rehabFsiValue.toString());
        setRehabFsi(rehabFsiValue);

        // Calculate rehabComponentValue
        const roundedTotalTenements = Math.round(totalTenementsValue);
        const rehabComponentValue = roundedTotalTenements * 45;
        localStorage.setItem("rehabComponent", rehabComponentValue.toString());
        setRehabComponent(rehabComponentValue);

        // Calculate landRateValue
        const basic_RatioValue = landRate / 30250;
        localStorage.setItem("basic_Ratio", basic_RatioValue.toString());
        setBasic_Ratio(basic_RatioValue);

        // Calculate incentive
        const incentiveValue = calculateIncentive(plotArea, basic_RatioValue);
        localStorage.setItem("Incentive", incentiveValue.toString());
        setIncentive(incentiveValue);

        // Calculate totalSaleValue
        const totalSaleValue = rehabComponentValue * incentiveValue;
        localStorage.setItem("totalSale", totalSaleValue.toString());
        setTotalSale(totalSaleValue);

        // Calculate fungibleValue
        const fungibleValue = totalSaleValue * 0.35;
        localStorage.setItem("fungible", fungibleValue.toString());
        setFungible(fungibleValue);

        // Calculate totalArea_includingFungibleValue
        const totalArea_includingFungibleValue = totalSaleValue + fungibleValue;
        localStorage.setItem("totalArea_includingFungible", totalArea_includingFungibleValue.toString());
        setTotalArea_includingFungible(totalArea_includingFungibleValue);

        //Feasability Start here 

        const rehabConstructionAreaValue = rehabComponentValue * 1.4;
        localStorage.setItem("rehabConstructionArea", rehabConstructionAreaValue.toString());
        setRehabConstructionArea(rehabConstructionAreaValue);

        const saleConstructionAreaValue = totalArea_includingFungibleValue * 1.5
        localStorage.setItem("saleConstructionArea", saleConstructionAreaValue.toString());
        setSaleConstructionArea(saleConstructionAreaValue);

        const constructionRehabAreaSQFTValue = rehabConstructionAreaValue * 10.764;
        localStorage.setItem("constructionRehabAreaSQFT", constructionRehabAreaSQFTValue.toString());
        setConstructionRehabAreaSQFT(constructionRehabAreaSQFTValue);

        const constructionSaleAreaSQFTValue = saleConstructionAreaValue * 10.764;
        localStorage.setItem("constructionSaleAreaSQFT", constructionSaleAreaSQFTValue.toString());
        setConstructionSaleAreaSQFT(constructionSaleAreaSQFTValue);

        const constructionCostRehabSqValue = (constructionRehabAreaSQFTValue * formData.constructionCostRehab) / 10000000;
        localStorage.setItem("constructionCostRehabSq", constructionCostRehabSqValue.toString());
        setConstructionCostRehabSq(constructionCostRehabSqValue);


        const constructionCostSaleSqValue = (constructionSaleAreaSQFTValue * formData.constructionCostSale) / 10000000;
        localStorage.setItem("constructionCostSaleSq", constructionCostSaleSqValue.toString());
        setConstructionCostSaleSq(constructionCostSaleSqValue);


        const sraExpensesRehabValue = ((constructionRehabAreaSQFT * formData.sraExpenses) / 10000000)
        localStorage.setItem("sraExpensesRehab", sraExpensesRehabValue.toString());
        setSraExpensesRehab(sraExpensesRehabValue);


        const sraExpensesSaleValue = ((constructionSaleAreaSQFT * formData.sraExpenses) / 10000000)
        localStorage.setItem("sraExpensesSale", sraExpensesSaleValue.toString());
        setSraExpensesSale(sraExpensesSaleValue);

        const infraStructureRehabValue = ((constructionRehabAreaSQFT * 50) / 10000000)
        localStorage.setItem("infraStructureRehab", infraStructureRehabValue.toString());
        setInfraStructureRehab(infraStructureRehabValue);


        const infraStructureSaleValue = ((constructionSaleAreaSQFT * 100) / 10000000)
        localStorage.setItem("infraStructureSale", infraStructureSaleValue.toString());
        setInfraStructureSale(infraStructureSaleValue);

        const fungibleSaleValue = ((fungible * formData.landRate * 0.50) / 10000000)
        localStorage.setItem("fungibleSale", fungibleSaleValue.toString());
        setFungibleSale(fungibleSaleValue);

        const outerExpensesRehabValue = ((constructionRehabAreaSQFT * formData.extraExpenses) / 10000000)
        localStorage.setItem("outerExpensesRehab", outerExpensesRehabValue.toString());
        setOuterExpensesRehab(outerExpensesRehabValue);

        const outerExpensesSaleValue = ((constructionSaleAreaSQFT * formData.extraExpenses) / 10000000)
        localStorage.setItem("outerExpensesSale", outerExpensesSaleValue.toString());
        setOuterExpensesSale(outerExpensesSaleValue);

        const rentValue = ((formData.rentAmount * formData.tenementsRequired * formData.tenure) / 10000000)
        localStorage.setItem("rent", rentValue.toString());
        setRent(rentValue);

        const brokerageValue = ((formData.rentAmount * formData.tenementsRequired * 2) / 10000000)
        localStorage.setItem("brokerage", brokerageValue.toString());
        setBrokerage(brokerageValue);

        const shiftingValue = ((formData.rentAmount * formData.tenementsRequired) / 10000000)
        localStorage.setItem("shifting", shiftingValue.toString());
        setShifting(shiftingValue);

        const totalCostRehabValue = (constructionCostRehabSqValue + rentValue + infraStructureRehabValue + sraExpensesRehabValue + brokerageValue + shiftingValue + outerExpensesRehabValue)
        localStorage.setItem("totalCostRehab", totalCostRehabValue.toString());
        setTotalCostRehab(totalCostRehabValue);
        console.log(totalCostRehabValue)

        const totalCostSaleValue = (constructionCostSaleSqValue + sraExpensesSaleValue + fungibleSaleValue + outerExpensesSaleValue + infraStructureSaleValue)
        localStorage.setItem("totalCostSale", totalCostSaleValue.toString());
        setTotalCostSale(totalCostSaleValue);
        console.log(typeof (totalCostSaleValue))

        const consultantFeesRehabValue = (totalCostRehabValue * 0.02)
        localStorage.setItem("consultantFeesRehab", consultantFeesRehabValue.toString());
        setConsultantFeesRehab(consultantFeesRehabValue);

        const consultantFeesSaleValue = (totalCostSaleValue * 0.02)
        localStorage.setItem("consultantFeesSale", consultantFeesSaleValue.toString());
        setConsultantFeesSale(consultantFeesSaleValue);

        
        const otherconsultantFeesRehabValue = (totalCostRehabValue * 0.01)
        localStorage.setItem("otherconsultantFeesRehab", otherconsultantFeesRehabValue.toString());
        setOtherConsultantFeesRehab(otherconsultantFeesRehabValue);

        const otherconsultantFeesSaleValue = (totalCostSaleValue * 0.01)
        localStorage.setItem("otherconsultantFeesSale", otherconsultantFeesSaleValue.toString());
        setOtherConsultantFeesSale(otherconsultantFeesSaleValue);

        const totalIndirectCostRehabValue = (otherconsultantFeesRehabValue + consultantFeesRehabValue)
        localStorage.setItem("totalIndirectCostRehab", totalIndirectCostRehabValue.toString());
        setTotalIndirectCostRehab(totalIndirectCostRehabValue);


        const totalIndirectCostSaleValue = (otherconsultantFeesSaleValue + consultantFeesSaleValue)
        localStorage.setItem("totalIndirectCostSale", totalIndirectCostSaleValue.toString());
        setTotalIndirectCostSale(totalIndirectCostSaleValue);


        const projectCostRehabValue = (totalIndirectCostRehabValue + totalCostRehabValue)
        localStorage.setItem("projectCostRehab", projectCostRehabValue.toString());
        setProjectCostRehab(projectCostRehabValue);

        const projectCostSaleValue = (totalIndirectCostSaleValue + totalCostSaleValue)
        localStorage.setItem("projectCostSale", projectCostSaleValue.toString());
        setProjectCostSale(projectCostSaleValue);

        const projectCostRehabSaleValue = (projectCostRehabValue + projectCostSaleValue)
        localStorage.setItem("projectCostRehabSale", projectCostRehabSaleValue.toString());
        setProjectCostRehabSale(projectCostRehabSaleValue);



        const saleAbleCarpetAreaValue = ((totalArea_includingFungible * 10.764))
        localStorage.setItem("saleAbleCarpetArea", saleAbleCarpetAreaValue.toString());
        setSaleAbleCarpetArea(saleAbleCarpetAreaValue);

        const reraCarpetAreaValue = (saleAbleCarpetAreaValue / 1.10)
        localStorage.setItem("reraCarpetArea", reraCarpetAreaValue.toString());
        setReraCarpetArea(reraCarpetAreaValue);

        const saleBUAValue = ((reraCarpetAreaValue * formData.buildingBuiltUp) / 10000000)
        localStorage.setItem("saleBUA", saleBUAValue.toString());
        setSaleBUA(saleBUAValue);

        const profitValue = ((saleBUAValue - projectCostRehabSaleValue))
        localStorage.setItem("profit", profitValue.toString());
        setProfit(profitValue);


        const carParkingValue = (totalArea_includingFungible / 1.1)
        localStorage.setItem("carParking", carParkingValue.toString());
        setCarParking(carParkingValue);

        const carParking2Value = (((carParkingValue / 60) * 1000000) / 10000000)
        localStorage.setItem("carParking2", carParking2Value.toString());
        setCarParking2(carParking2Value);

        const netProfitValue = (profitValue + carParking2Value)
        localStorage.setItem("netProfit", netProfitValue.toString());
        setNetProfit(netProfitValue);


    }, [formData, landRate]);

    return {
        netArea,
        tenement_perDensity,
        societyOffice,
        amenities,
        totalTenements,
        totalArea_FSI,
        fsi,
        rehabFsi,
        rehabComponent,
        basic_Ratio,
        incentive,
        totalSale,
        fungible,
        totalArea_includingFungible,
        rehabConstructionArea,
        saleConstructionArea,
        constructionRehabAreaSQFT,
        constructionSaleAreaSQFT,
        constructionCostRehabSq,
        constructionCostSaleSq,
        infraStructureRehab,
        infraStructureSale,
        sraExpensesRehab,
        sraExpensesSale,
        fungibleSale,
        outerExpensesRehab,
        outerExpensesSale,
        rent,
        brokerage,
        shifting,
        totalCostRehab,
        totalCostSale,
        consultantFeesRehab,
        consultantFeesSale,
        otherconsultantFeesRehab,
        otherconsultantFeesSale,
        totalIndirectCostRehab,
        totalIndirectCostSale,
        projectCostRehab,
        projectCostSale,
        projectCostRehabSale,
        saleAbleCarpetArea,
        reraCarpetArea,
        saleBUA,
        profit,
        carParking2,
        netProfit



    };
};

export default useFormDataCalculations;

