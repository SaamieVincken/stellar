import { Decimal } from 'decimal.js';

/**
 * Calculate the saturation for an HSL color of a star
 * @param {Decimal} temperature in Kelvin (K)
 * @return {Decimal} Saturation in percentage
 */
export function calculateSaturation(temperature) {
    temperature = new Decimal(temperature);

    if (temperature.gt(30000)) {
        return new Decimal(100); // brightest (in scale)
    } else if (temperature.gt(10000) && temperature.lt(30000)) {
        return new Decimal(90);
    } else if (temperature.gt(7500) && temperature.lt(10000)) {
        return new Decimal(80);
    } else if (temperature.gt(6000) && temperature.lt(7500)) {
        return new Decimal(70);
    } else if (temperature.gt(5000) && temperature.lt(6000)) {
        return new Decimal(60);
    } else if (temperature.gt(3500) && temperature.lt(5000)) {
        return new Decimal(50);
    } else if (temperature.lt(3500)) {
        return new Decimal(40); // dimmest (in scale)
    } else {
        return new Decimal(0);
    }
}
