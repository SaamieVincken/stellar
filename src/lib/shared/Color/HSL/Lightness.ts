import {getLuminosityClass} from "../../SpectralClassification/LuminosityClass/LuminosityClass";

/**
 * Calculate the lightness in an HSL scale based on the luminosity
 * @param {number} luminosity
 * @return {number} in lightness percentage (0%-100%)
 */
export function luminosityClassToLightness(luminosity: number): number{
    return getLuminosityClass(luminosity);
}
