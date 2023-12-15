import {convertSolarMassToGrams} from "./SolarMass.js";

/**
 * Calculate the stellar density using ρ=M/V
 * @param {number} solarMass in solar masses(M☉) => converted to grams (g)
 * @param {number} volume in cubic meters (cm³)
 * @return {number} density in cubic centimetres(g/cm³)
 */
export function calculateStellarDensity(solarMass, volume) {
    let massInGrams = convertSolarMassToGrams(solarMass);
    return massInGrams / volume;
}