import {spectralTypeToHSL} from "$lib/shared/Color/HSL/GenerateHSL.js";
import {CalculateWavelength} from "$lib/shared/Color/WavelenghtCalc.js";
import { Decimal } from 'decimal.js';
/**
 *
 * @param {Decimal} phase in solar Masses (M☉)
 * @param {Decimal} luminosity in solar Luminosity (L☉)
 * @param {Decimal} temperature in Kelvin
 * @return {Decimal[]} RGB color value
 * @constructor
 */
export function GetColor(phase, luminosity, temperature) {
    let wavelength = CalculateWavelength(temperature);
    return spectralTypeToHSL(phase, luminosity, wavelength, temperature);
}
