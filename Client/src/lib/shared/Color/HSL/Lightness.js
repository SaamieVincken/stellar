import {getLuminosityClass} from "../../SpectralClassification/LuminosityClass/LuminosityClass";
import { Decimal } from 'decimal.js';

/**
 * Calculate the lightness in an HSL scale based on the luminosity
 * @param {Decimal} luminosity
 * @return {Decimal} in lightness percentage (0%-100%)
 */
export function luminosityClassToLightness(luminosity){
    return getLuminosityClass(luminosity);
}
