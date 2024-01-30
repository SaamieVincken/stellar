import {luminosityClassToLightness} from "./Lightness.js";
import {wavelengthToHue} from "./Hue.js";
import {calculateSaturation} from "./Saturation.js";
import Decimal from 'decimal.js';


/**
 * Define the HSL color based on the spectral type properties
 * @param phase in solar luminosity (L☉)
 * @param {Decimal} luminosity in solar luminosity (L☉)
 * @param {Decimal} wavelength in nanometers (nm)
 * @param {Decimal} temperature in kelvin (K)
 * @return {Decimal[]} in HSL scale [H, S, L]
 */
export function spectralTypeToHSL(phase, luminosity, wavelength, temperature){
    if(phase !== null && luminosity !== null && wavelength !== null && temperature !== null){
    const hue = wavelengthToHue(wavelength, phase);
    const saturation = calculateSaturation(temperature);
    let lightness = luminosityClassToLightness(luminosity);

    if(hue !== null && saturation !== null && lightness !== null){
        /**
         * When the hue value is between 60-180, the lightness is set to 95% to mimic a white color
        //  */
        // if(hue > 60 && hue < 180){
        //     lightness = new Decimal(95);
        // }
        return [hue, saturation, lightness];
    }
    else{
        return [0, new Decimal(0), new Decimal(0)]; // black
    }}
}