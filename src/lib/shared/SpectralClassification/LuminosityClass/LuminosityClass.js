import { LuminosityClassPercentage } from "./LuminosityPercentage.ts";
import { Decimal } from 'decimal.js';

/**
 * Define the luminosity class of a star based on its luminosity
 * @param {Decimal} luminosity in solar Luminosity (L☉)
 * @return {Decimal| undefined} as percentage for luminosity and lightness
 */
export function getLuminosityClass(luminosity){
    if (luminosity >= new Decimal(1e5)) {
        return LuminosityClassPercentage.Ia_O;
    } else if (luminosity >= new Decimal(10000) && luminosity <= new Decimal(1e5)) {
        return LuminosityClassPercentage.Ia;
    } else if (luminosity >= new Decimal(25) && luminosity <= new Decimal(30000)) {
        return LuminosityClassPercentage.Ib;
    } else if (luminosity >= new Decimal(25) && luminosity <= new Decimal(80)) {
        return LuminosityClassPercentage.II;
    } else if (luminosity >= new Decimal(5) && luminosity <= new Decimal(25)) {
        return LuminosityClassPercentage.III;
    } else if (luminosity >= new Decimal(1.5) && luminosity <= new Decimal(6)) {
        return LuminosityClassPercentage.IV;
    } else if (luminosity >= new Decimal(0.6) && luminosity <= new Decimal(1.5)) {
        return LuminosityClassPercentage.V;
    } else if (luminosity >= new Decimal(0.1) && luminosity < new Decimal(0.6)) {
        return LuminosityClassPercentage.VI;
    } else if (luminosity < new Decimal(0.1)) {
        return LuminosityClassPercentage.D;
    } else {
        return new Decimal(0);
    }
}
