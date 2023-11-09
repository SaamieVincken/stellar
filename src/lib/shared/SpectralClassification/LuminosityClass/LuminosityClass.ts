import { LuminosityClassPercentage } from "./LuminosityPercentage";

/**
 * Define the luminosity class of a star based on its luminosity
 * @param {number} luminosity in solar Luminosity (L☉)
 * @return {number | undefined} as percentage for luminosity and lightness
 */
export function getLuminosityClass(luminosity: number): number{
    if (luminosity >= 1e5) {
        return LuminosityClassPercentage.Ia_O;
    } else if (luminosity >= 10000 && luminosity <= 1e5) {
        return LuminosityClassPercentage.Ia;
    } else if (luminosity >= 25 && luminosity <= 30000) {
        return LuminosityClassPercentage.Ib;
    } else if (luminosity >= 25 && luminosity <= 80) {
        return LuminosityClassPercentage.II;
    } else if (luminosity >= 5 && luminosity <= 25) {
        return LuminosityClassPercentage.III;
    } else if (luminosity >= 1.5 && luminosity <= 6) {
        return LuminosityClassPercentage.IV;
    } else if (luminosity >= 0.6 && luminosity <= 1.5) {
        return LuminosityClassPercentage.V;
    } else if (luminosity >= 0.1 && luminosity < 0.6) {
        return LuminosityClassPercentage.VI;
    } else if (luminosity < 0.1) {
        return LuminosityClassPercentage.D;
    } else {
        return 0;
    }
}
