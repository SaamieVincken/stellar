import Decimal from 'decimal.js';
import { convertSolarMassToKilograms } from './SolarMass.js';

// Gravitational constant in Nm²/kg²
const gravitationalConstant = new Decimal('6.67384e-11');

/**
 * Calculate surface gravity using g = G*M/R^2
 * @param {Decimal} solarMass in solar masses (M☉) => converted to kilograms (kg)
 * @param {Decimal} radius in meters (m)
 * @returns {Decimal} - Surface gravity
 */
export function calculateSurfaceGravity(solarMass, radius) {
    let massInKilograms = convertSolarMassToKilograms(new Decimal(solarMass));
    radius = new Decimal(radius);

    return gravitationalConstant.mul(massInKilograms).div(radius.pow(2));
}
