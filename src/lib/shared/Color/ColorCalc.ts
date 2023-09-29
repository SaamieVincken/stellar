// Calculate what color spectrum a phase is in using Wiens displacement law
// λ_max (in meters) = 2.898 × 10^ (-3) meters per Kelvin / T_eff (in Kelvin)
function calculateColorFromTemperature(temperatureKelvin: number): string {
    const WienConstant = 2.898 * Math.pow(10, -3); // meters per Kelvin
    const peakWavelengthMeters = WienConstant / temperatureKelvin;

    if (peakWavelengthMeters >= 380e-9 && peakWavelengthMeters < 450e-9) {
        return "Violet";
    } else if (peakWavelengthMeters >= 450e-9 && peakWavelengthMeters < 495e-9) {
        return "Blue";
    } else if (peakWavelengthMeters >= 495e-9 && peakWavelengthMeters < 570e-9) {
        return "Green";
    } else if (peakWavelengthMeters >= 570e-9 && peakWavelengthMeters < 590e-9) {
        return "Yellow";
    } else if (peakWavelengthMeters >= 590e-9 && peakWavelengthMeters < 620e-9) {
        return "Orange";
    } else if (peakWavelengthMeters >= 620e-9 && peakWavelengthMeters <= 750e-9) {
        return "Red";
    } else {
        return "Infrared"; // Beyond visible spectrum
    }
}