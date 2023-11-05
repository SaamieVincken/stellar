/**
 * Wiens constant
 * @type {number} in meters per Kelvin
 */
const WiensConstant: number = 2.898 * Math.pow(10, -3);

/**
 * Calculate wave length using Wien's displacement law λ_peak=b/T_eff
 * @param {number} effectiveTemperature in Kelvin
 * @return {number} peak wavelength in nanometers
 */
export function CalculateColorFromTemperature(effectiveTemperature: number): number {
    let wavelengthInMeters = WiensConstant / effectiveTemperature;
    return wavelengthInMeters * 1e9; // Convert to nanometers
}


// if (peakWavelengthMeters >= 380e-9 && peakWavelengthMeters < 450e-9) {
//     return "Violet";
// } else if (peakWavelengthMeters >= 450e-9 && peakWavelengthMeters < 495e-9) {
//     return "Blue";
// } else if (peakWavelengthMeters >= 495e-9 && peakWavelengthMeters < 570e-9) {
//     return "Green";
// } else if (peakWavelengthMeters >= 570e-9 && peakWavelengthMeters < 590e-9) {
//     return "Yellow";
// } else if (peakWavelengthMeters >= 590e-9 && peakWavelengthMeters < 620e-9) {
//     return "Orange";
// } else if (peakWavelengthMeters >= 620e-9 && peakWavelengthMeters <= 750e-9) {
//     return "Red";
// } else {
//     return "Infrared"; // Beyond visible spectrum
// }