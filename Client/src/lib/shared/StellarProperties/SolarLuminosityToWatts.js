import Decimal from 'decimal.js';

/**
 * Converts solar luminosities to watts.
 * @param {Decimal} solarLuminosities - The luminosity in solar luminosities (L☉).
 * @return {Decimal} The luminosity in watts (W).
 */
export function convertSolarLuminosityToWatts(solarLuminosities) {
    const solarLuminosityInWatts = new Decimal(3.828e26);
    return solarLuminosities.mul(solarLuminosityInWatts);
}
