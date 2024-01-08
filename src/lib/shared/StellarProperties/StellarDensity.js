import Decimal from 'decimal.js';
import { convertSolarMassToGrams } from "./SolarMass.js";

/**
 * Calculate the stellar density using ρ = M/V
 * @param {Decimal} solarMass in solar masses (M☉) => converted to grams (g)
 * @param {Decimal} volume in cubic meters (m³)
 * @return {Decimal} density in grams per cubic centimeter (g/cm³)
 */
export function calculateStellarDensity(solarMass, volume) {
    solarMass = new Decimal(solarMass);
    volume = new Decimal(volume);

    // Convert volume from cubic meters to cubic centimeters
    const cubicCentimetersPerCubicMeter = new Decimal('1e6');
    volume = volume * cubicCentimetersPerCubicMeter;  // Use the * operator for multiplication

    let massInGrams = convertSolarMassToGrams(solarMass);
    return massInGrams / volume;  // Use the / operator for division
}
