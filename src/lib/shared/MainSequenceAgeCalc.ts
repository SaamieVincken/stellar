// Constants for the Sun
const solarMass = 2e30;
const solarTemperature = 5778;
const solarLuminosity = 3.828e26;

//ToDo: Add exception handling
export function calculateMainSequenceLifetime(
    stellarMass: number,
    stellarTemperature: number,
    stellarLuminosity: number
): number {
    let mainSequenceLifetime= 0;
    if(stellarMass != null && stellarTemperature != null && stellarLuminosity != null){
        //Reference to calculation: Luminosity ratio
        const luminosityRatio = stellarLuminosity / solarLuminosity;

        //Reference to calculation: Temperature ratio
        const temperatureRatio = Math.pow(stellarTemperature / solarTemperature, 4);

        //Reference to calculation: the main sequence lifetime based on mass, temperature, and luminosity
        mainSequenceLifetime = 1.5e10 * Math.pow(stellarMass / solarMass, -2.5) * luminosityRatio * temperatureRatio;
        // time (in years) ≈ K * (M/M☉)^(-2.5)
    }
    return mainSequenceLifetime;
}
