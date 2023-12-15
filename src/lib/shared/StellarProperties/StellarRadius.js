
/**
 * @type {number} Stefan Boltzmann constant in W/(m^2 K^4)
 * @type {number} pi
 */
const stefanBoltzmannConstant = 5.67e-8;
const pi= Math.PI;

/**
 * Calculate stellar radius using √(L/(4πσ(T_s)^4))
 * @param {number} luminosity in solar luminosity (L☉)
 * @param {number} surfaceTemperature in Kelvin
 * @return {number} radius in meters (m)
 */
export function calculateStellarRadius(luminosity, surfaceTemperature) {
    return Math.sqrt(luminosity / (4 * pi * stefanBoltzmannConstant * Math.pow(surfaceTemperature, 4)));
}