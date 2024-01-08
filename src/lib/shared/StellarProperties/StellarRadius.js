import Decimal from 'decimal.js';
import { convertSolarLuminosityToWatts } from "$lib/shared/StellarProperties/SolarLuminosityToWatts.js";

// Stefan Boltzmann constant in W/(m^2 K^4)
const stefanBoltzmannConstant = new Decimal('5.67e-8');

// Pi constant
const pi = new Decimal(Math.PI);

/**
 * Calculate stellar radius using √(L/(4πσ(T_s)^4))
 * @param {Decimal} luminosity in solar luminosity (L☉)
 * @param {Decimal} surfaceTemperature in Kelvin (K)
 * @return {Decimal} radius in meters (m)
 */
export function calculateStellarRadius(luminosity, surfaceTemperature) {
    // Convert luminosity from solar luminosities to watts
    let luminosityInWatts = convertSolarLuminosityToWatts(luminosity);

    // Calculate radius
    return Decimal.sqrt(
        luminosityInWatts / (Decimal(4) * pi * stefanBoltzmannConstant * (surfaceTemperature ** Decimal(4)))
    )

}
