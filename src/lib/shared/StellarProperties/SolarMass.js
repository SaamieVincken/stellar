/**
 * Constant for the mass of our sun
 * @type {number} in kilograms (kg)
 */
const sunMass = 1.989e30;

/**
 * Converts a mass value to solar mass
 *
 * @param {number} mass in kilograms (kg)
 * @returns {number} in solar masses (M☉)
 */
export function convertMassToSolarMass(mass) {
    return mass / sunMass;
}

/**
 * Converts a mass value to kilograms (kg) from solar masses (M☉)
 *
 * @param {number} solarMass in solar masses (M☉)
 * @returns {number} in kilograms (kg)
 */
export function convertSolarMassToKilograms(solarMass) {
    return solarMass * sunMass;
}

/**
 * Converts a mass value to grams (g) from solar masses (M☉)
 *
 * @param {number} solarMass in solar masses (M☉)
 * @returns {number} in grams (g)
 */
export function convertSolarMassToGrams(solarMass) {
    const gramsPerKilogram = 1000;
    return convertSolarMassToKilograms(solarMass) * gramsPerKilogram;
}
