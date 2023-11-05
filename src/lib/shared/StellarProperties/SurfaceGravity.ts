import {convertSolarMassToKilograms} from './SolarMass';

/**
 * @type {number} Gravitational constant in Nm²/kg²
 */
const gravitationalConstant: number = 6.67384e-11;

/**
 * Calculate surface gravity using g=G*M/R^2
 * @param {number} solarMass in solar masses(M☉) => converted to kilograms(kg)
 * @param {number} radius - Radius
 * @returns {number} - Surface gravity
 */
export function calculateSurfaceGravity(solarMass: number, radius: number): number {
    let massInKilograms = convertSolarMassToKilograms(solarMass);
    return (gravitationalConstant * massInKilograms) / Math.pow(radius, 2);
}
