/**
 * @type {number} Stefan-Boltzmann constant in W/m²·K⁴
 * @type {number} pi
 */
const stefanBoltzmannConstant: number = 5.67e-8;
const pi = Math.PI;

/**
 * Calculate the effective temperature using Teff = (L/(4πR^2σ))^1/4
 * @param {number} luminosity in solar luminosity (L☉)
 * @param {number} radius in meters (m)
 * @return {number} in Kelvin (K)
 */
export function calculateEffectiveTemperature(luminosity: number, radius: number): number {
    return Math.pow((luminosity / (4 * pi * Math.pow(radius, 2) * stefanBoltzmannConstant)), 0.25);
}

