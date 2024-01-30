import Decimal from 'decimal.js';

// Wiens constant in meters per Kelvin
const WiensConstant = new Decimal('2.898e-3'); // 2.898 * 10^-3

/**
 * Calculate wavelength using Wien's displacement law λ_peak = b/T
 * @param {Decimal} surfaceTemperature in Kelvin
 * @return {Decimal} peak wavelength in nanometers
 */
export function CalculateWavelength(surfaceTemperature) {
    surfaceTemperature = new Decimal(surfaceTemperature);
    let wavelengthInMeters = WiensConstant.div(surfaceTemperature);
    return  wavelengthInMeters.mul(1e9);
}
