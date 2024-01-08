import Decimal from 'decimal.js';

/**
 * Calculate the luminosity using solar Mass (M☉)
 * @param {Decimal} solarMass
 * @return {Decimal}
 */
export function calculateLuminosity(solarMass) {
    solarMass = new Decimal(solarMass);
    return Decimal.pow(solarMass, 3.5);
}

/**
 * Calculate the mass using solar Luminosity(L☉)
 * @param {Decimal} solarLuminosity
 * @return {Decimal}
 */
export function calculateMass(solarLuminosity) {
    solarLuminosity = new Decimal(solarLuminosity);
    return Decimal.pow(solarLuminosity, Decimal.div(1, 3.5));
}
