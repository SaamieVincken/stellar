import Decimal from 'decimal.js';


/**
 * Converts a mass value to solar mass
 *
 * @param {Decimal} mass in kilograms (kg)
 * @returns {Decimal} in solar masses (M☉)
 */
export function convertMassToSolarMass(mass) {
    mass = new Decimal(mass);
    return mass.div(sunMass);
}

/**
 * Converts a mass value to kilograms (kg) from solar masses (M☉)
 *
 * @param {Decimal} solarMass in solar masses (M☉)
 * @returns {Decimal} in kilograms (kg)
 */
export function convertSolarMassToKilograms(solarMass) {
    solarMass = new Decimal(solarMass);
    return solarMass.mul(sunMass);
}

/**
 * Converts a mass value to grams (g) from solar masses (M☉)
 *
 * @param {number} solarMass in solar masses (M☉)
 * @returns {Decimal} in grams (g)
 */
export function convertSolarMassToGrams(solarMass) {
    const gramsPerKilogram = new Decimal(1000);
    return convertSolarMassToKilograms(solarMass).mul(gramsPerKilogram);
}
