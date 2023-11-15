import {spectralTypeToHSL} from "$lib/shared/Color/HSL/GenerateHSL";
import {CalculateWavelength} from "$lib/shared/Color/WavelenghtCalc";
import {HSLtoRGB} from "$lib/shared/Color/HSL/HSLtoRGB";

/**
 *
 * @param {number} mass in solar Masses (M☉)
 * @param {number} luminosity in solar Luminosity (L☉)
 * @param {number} temperature in Kelvin
 * @return {number[]} RGB color value
 * @constructor
 */
export function GetColor(mass: number, luminosity: number, temperature: number){
    let wavelength = CalculateWavelength(temperature);
    let hsl = spectralTypeToHSL(luminosity, wavelength, temperature);
    return HSLtoRGB(hsl);
}