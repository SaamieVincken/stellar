const solarLuminosity = 3.828e26; // Solar luminosity in Watts
const gravitationalConstant = 6.674e-11; // Gravitational constant in m^3/kg/s^2
const secondsInAYear = 3.154e7;

//This is to calculate the lifetime of stars in non- main sequence phases:
export function calculateLifetime(luminosity: number, temperature: number, solarMass: number): {
    superNova: number;
    whiteDwarf: number;
    protoStar: number;
    blackHole: number;
    redGiant: number;
    neutronStar: number;
} {
    // Other equation for age: RotationRate .pow-2
    // o = 5.67 * 10 pow-8
    // Rotation rate = 4pioT4L
    // Calculation of the stellar radius based on luminosity and temperature
    const radius = Math.sqrt(luminosity * solarLuminosity / (4 * Math.PI * temperature * temperature));

    // Calculation of the stellar lifetime for each phase
    const protoStar = (Math.pow(solarMass, 2.5) / (solarLuminosity * Math.pow(temperature, 2.5))) / secondsInAYear;
    const redGiant = (Math.pow(solarMass, 2) / (solarLuminosity * Math.pow(temperature, 3))) / secondsInAYear;
    const whiteDwarf = (1e10 * Math.pow(solarMass, -2)) / secondsInAYear;
    const superNova = (1e10 * Math.pow(solarMass, -2)) / secondsInAYear;
    const neutronStar = ((0.1 * gravitationalConstant * Math.pow(solarMass, 2)) / (radius * luminosity)) / secondsInAYear;
    const blackHole = (1e10) / secondsInAYear;

    return {
        protoStar,
        redGiant,
        whiteDwarf,
        superNova,
        neutronStar,
        blackHole,
    };
}
