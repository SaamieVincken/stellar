import Decimal from 'decimal.js';

// Stefan-Boltzmann constant in W/m²·K⁴
const stefanBoltzmannConstant = new Decimal('5.67e-8');

// Pi constant
const pi = new Decimal(Math.PI);

/**
 * Calculate the effective temperature using Teff = (L/(4πR^2σ))^1/4
 * @param {Decimal} luminosity in solar luminosity (L☉)
 * @param {Decimal} radius in meters (m)
 * @return {Decimal} in Kelvin (K)
 */
export function calculateEffectiveTemperature(luminosity, radius) {
    luminosity = new Decimal(luminosity);
    radius = new Decimal(radius);

    // Perform the calculation using Decimal methods
    return Decimal.pow(
        luminosity.div(
            Decimal.mul(4, pi, radius.pow(2), stefanBoltzmannConstant)
        ),
        0.25
    );
}
