import {luminosityClassToLightness} from "./Lightness.js";
import {wavelengthToHue} from "./Hue.js";
import {calculateSaturation} from "./Saturation.js";

/**
 * Define the HSL color based on the spectral type properties
 * @param {number} luminosity in solar luminosity (L☉)
 * @param {number} wavelength in nanometers (nm)
 * @param {number} temperature in kelvin (K)
 * @return {number[]} in HSL scale [H, S, L]
 */
export function spectralTypeToHSL(luminosity, wavelength, temperature){
    const hue = wavelengthToHue(wavelength);
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