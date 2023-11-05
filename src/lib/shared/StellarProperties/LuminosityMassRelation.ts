/**
 * Calculate the luminosity using solar Mass (M☉)
 * @param {number} solarMass
 * @return {number}
 */
export function calculateLuminosity(solarMass: number): number {
    return Math.pow(solarMass, 3.5);
}

/**
 * Calculate the mass using solar Luminosity(L☉)
 * @param {number} solarLuminosity
 * @return {number}
 */
export function calculateMass(solarLuminosity: number): number {
    return Math.pow(solarLuminosity, 1 / 3.5);
}
