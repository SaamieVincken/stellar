import {luminosityClassToLightness} from "./Lightness.js";
import {wavelengthToHue} from "./Hue.js";
import {calculateSaturation} from "./Saturation.js";
import Decimal from 'decimal.js';


/**
 * Define the HSL color based on the spectral type properties
 * @param {Decimal} luminosity in solar luminosity (L☉)
 * @param {Decimal} wavelength in nanometers (nm)
 * @param {Decimal} temperature in kelvin (K)
 * @return {Decimal[]} in HSL scale [H, S, L]
 */
export function spectralTypeToHSL(luminosity, wavelength, temperature){
    const hue = wavelengthToHue(wavelength).toNumber();
    const saturation = calculateSaturation(temperature);
    let lightness = luminosityClassToLightness(luminosity);

    if(hue && saturation && lightness ){
        /**
         * When the hue value is green (60-180), the lightness is set to 95% to mimic a white color
         */
        if(hue > 60 && hue < 180){
            lightness = 95;
        }
        return [hue, saturation, lightness];
    }
    else{
        return [0, 0, 0]; // black
    }
}