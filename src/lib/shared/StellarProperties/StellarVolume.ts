/**
 * @type {number} pi
 */
const pi :number = Math.PI;

/**
 * Calculate the volume using V=(4/3)πR^3
 * @param {number} radius in meters (m)
 * @return {number} in cubic meters (m³)
 */
function calculateSphereVolume(radius: number): number {
    return (4 / 3) * pi * Math.pow(radius, 3);
}
