/**
 * Constant for the mass of our sun
 * @type {number} in kilograms (kg)
 */
const sunMass: number = 1.989e30;

/**
 * Calculate the main-sequence lifetime of a star using t_MS=10^10 (M/(M☉))^(-2.5)
 * @param {number} solarMass in solar masses (M☉)
 * @returns {number} - The main-sequence lifetime of the star in years.
 */
export function calculateMainSequenceLifetime(solarMass: number): number {
    return Math.pow(10,10) * Math.pow(solarMass/sunMass, -2.5);
}
