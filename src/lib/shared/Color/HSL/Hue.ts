/**
 * Minimum and maximum values of the visible field
 * @type {number} violet end in nanometers
 * @type {number} red end in nanometers
 * @type {number} the minimum hue value starting at 0
 * @type {number} the maximum hue value, leaving out magenta (270-360 degrees)
 */
const minWavelength: number = 380; // Violet end of the visible spectrum
const maxWavelength: number = 750; // Red end of the visible spectrum
const minHueValue: number = 0;
const maxHueValue: number = 270;

/**
 * Calculate the hue value in an HSL scale based on the wavelength of a star
 * @param {number} wavelength in nanometers
 * @return {number} in hue value
 */
export function wavelengthToHue(wavelength: number): number {
    const normalizedPosition = (wavelength - minWavelength) / (maxWavelength - minWavelength);
    return minHueValue + (1 - normalizedPosition) * (maxHueValue - minHueValue);
}