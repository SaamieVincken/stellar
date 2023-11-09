/**
 * Calculate the saturation for an HSL color of a star
 * @param {number} temperature in Kelvin (K)
 * @return {number} Saturation in percentage
 */
export function calculateSaturation(temperature: number): number {
    if (temperature > 30.000){
        return 100; // brightest (in scale)
    } else if(temperature > 10.000 && temperature < 30.000){
        return 90;
    } else if(temperature > 7500 && temperature < 10.000){
        return 80;
    } else if(temperature > 6000 && temperature < 7500){
        return 70;
    } else if (temperature > 5000 && temperature < 6000){
        return 60;
    } else if(temperature > 3500 && temperature < 5000){
        return 50;
    } else if(temperature < 3500){
        return 40; // dimmest (in scale)
    } else{
        return 0;
    }
}

