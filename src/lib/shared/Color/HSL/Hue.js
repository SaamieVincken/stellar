import Decimal from 'decimal.js';

/**
 * Maps a wavelength in nanometers to an approximate HSL hue value.
 * This is a simplified model and does not perfectly represent human color perception.
 * @param {Decimal} wavelength - Wavelength in nanometers.
 * @return {Decimal} - Approximate hue value.
 */
export function wavelengthToHue(wavelength) {
    wavelength = new Decimal(wavelength);

    // Define wavelength ranges for different colors
    const violet = { min: 380, max: 450, hueMin: 270, hueMax: 300 };
    const blue = { min: 450, max: 495, hueMin: 240, hueMax: 270 };
    const cyan = { min: 495, max: 570, hueMin: 180, hueMax: 240 };
    const green = { min: 570, max: 590, hueMin: 120, hueMax: 180 };
    const yellow = { min: 590, max: 620, hueMin: 60, hueMax: 120 };
    const orange = { min: 620, max: 750, hueMin: 30, hueMax: 60 };
    const red = { min: 750, max: 780, hueMin: 0, hueMax: 30 };

    // Array of color ranges
    const colors = [violet, blue, cyan, green, yellow, orange, red];

    // Find the color range that the wavelength falls into and calculate the hue
    for (const color of colors) {
        if (wavelength >= color.min && wavelength <= color.max) {
            const rangeFraction = new Decimal(wavelength - color.min).div(color.max - color.min);
            return new Decimal(color.hueMin).add(rangeFraction.mul(new Decimal(color.hueMax - color.hueMin)));
        }
    }

    // Default to violet if out of range
    return new Decimal(violet.hueMin);
}