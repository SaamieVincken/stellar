/**
 * Wiens constant
 * @type {number} in meters per Kelvin
 */
const WiensConstant: number = 2.898 * Math.pow(10, -3);

/**
 * Calculate wave length using Wien's displacement law λ_peak=b/T
 * @param {number} surfaceTemperature in Kelvin
 * @return {number} peak wavelength in nanometers
 */
export function CalculateWavelength(surfaceTemperature: number): number {
    let wavelengthInMeters = WiensConstant / surfaceTemperature;
    return wavelengthInMeters * 1e9; // Convert to nanometers
}