import Decimal from 'decimal.js';

// Pi constant
const pi = new Decimal(Math.PI);

/**
 * Calculate the volume using V = (4/3)πR^3
 * @param {Decimal} radius in meters (m)
 * @return {Decimal} in cubic meters (m³)
 */
export function calculateVolume(radius) {
    radius = new Decimal(radius);
    const fourThirds = new Decimal(4) / 3;
    return fourThirds * pi * radius.pow(3);
}
