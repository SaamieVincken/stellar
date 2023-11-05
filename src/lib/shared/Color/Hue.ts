/**
 * The range of visible light wavelengths in nanometers (380nm to 750nm)
 * @type {number} in nanometers
 * @type {number} in nanometers
 */
const minWavelength: number = 380;
const maxWavelength: number = 750;

/**
 * Define a Hue color using wavelength and the min- and max values of the visible spectrum
 * @param {number} wavelength in nanometers
 * @return {number} in Hue color value (degrees)
 */
function wavelengthToHue(wavelength: number): number {
    const normalizedWavelength = (wavelength - minWavelength) / (maxWavelength - minWavelength);
    return normalizedWavelength * 360;
}