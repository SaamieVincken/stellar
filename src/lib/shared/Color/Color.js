import {spectralTypeToHSL} from "$lib/shared/Color/HSL/GenerateHSL.js";
import {CalculateWavelength} from "$lib/shared/Color/WavelenghtCalc.js";
import {HSLtoRGB} from "$lib/shared/Color/HSL/HSLtoRGB.js";

/**
 *
 * @param {number} mass in solar Masses (M☉)
 * @param {number} luminosity in solar Luminosity (L☉)
 * @param {number} temperature in Kelvin
 * @return {number[]} RGB color value
 * @constructor
 */
export function GetColor(mass, luminosity, temperature){
    let wavelength = CalculateWavelength(temperature);
    let hsl = spectralTypeToHSL(luminosity, wavelength, temperature);
    return HSLtoRGB(hsl);
}