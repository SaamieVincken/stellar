import {spectralTypeToHSL} from "$lib/shared/Color/HSL/GenerateHSL.js";
import {CalculateWavelength} from "$lib/shared/Color/WavelenghtCalc.js";

/**
 *
 * @param {Decimal} mass in solar Masses (M☉)
 * @param {Decimal} luminosity in solar Luminosity (L☉)
 * @param {Decimal} temperature in Kelvin
 * @return {Decimal[]} RGB color value
 * @constructor
 */
export function GetColor(mass, luminosity, temperature) {
    let wavelength = CalculateWavelength(temperature);
    return spectralTypeToHSL(luminosity, wavelength, temperature);
}
