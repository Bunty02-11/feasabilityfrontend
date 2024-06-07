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
    const [ rehabConstructionArea, setRehabConstructionArea] = useState(0);
    const [saleConstructionArea, setSaleConstructionArea] = useState(0);

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

        // Calculate societyOfficeValue
        let societyOfficeValue = 1;
        if (tenementsRequired > 100) {
            societyOfficeValue = Math.ceil(tenementsRequired / 100);
        }
        localStorage.setItem("societyOffice", societyOfficeValue.toString());
        setSocietyOffice(societyOfficeValue);

        // Calculate amenitiesValues
        let amenitiesValues = 4;
        if (tenementsRequired > 250) {
            amenitiesValues = Math.ceil(tenementsRequired / 62.5);
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
        const totalArea_FSIValue = netAreaValue + roadSetbackArea;
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
        const rehabComponentValue = roundedTotalTenements * 50;
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

        const rehabConstructionAreaValue = rehabComponentValue * 1.4;
        localStorage.setItem("rehabConstructionArea", rehabConstructionAreaValue.toString());
        setRehabConstructionArea(rehabConstructionAreaValue);

        const saleConstructionAreaValue = totalArea_includingFungibleValue * 1.5
        localStorage.setItem("saleConstructionArea", saleConstructionAreaValue.toString());
        setSaleConstructionArea(saleConstructionAreaValue);

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
        saleConstructionArea
    };
};

export default useFormDataCalculations;

