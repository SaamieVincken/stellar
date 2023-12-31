// Constants for the Sun
const solarMass = 2e30;
const solarLuminosity = 3.828e26;
const K = 1.5e10;

/**
 * Calculate the main sequence lifetime
 * @param {number} stellarMass
 * @param {number} stellarTemperature
 * @param {number} stellarLuminosity
 * @return {number}
 */
export function calculateMainSequenceLifetime(
    stellarMass,
    stellarTemperature,
    stellarLuminosity
) {
    let mainSequenceLifetime = 0;
    if (stellarMass != null || stellarTemperature != null || stellarLuminosity != null){
        if (stellarMass != null && stellarTemperature != null && stellarLuminosity != null) {
            // Main Sequence Lifetime (in years) = K * (M/M☉)^(-2.5) * (L/L☉)
            mainSequenceLifetime =
                K * Math.pow(stellarMass / solarMass, -2.5) * (stellarLuminosity / solarLuminosity);
        }
    }
    return mainSequenceLifetime;
}

