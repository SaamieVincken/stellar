import {SpectralType} from "./SpectralTypeEnum";

/**
 * Define the spectral type using the Morgan-Keenan spectral classification
 * @param {number} effectiveTemperature in Kelvin (K)
 * @return {SpectralType} spectral type
 */
export function calculateSpectralType(effectiveTemperature: number): SpectralType | undefined {
    if (effectiveTemperature >= 30.000) {
        return SpectralType.O;
    } else if (effectiveTemperature >= 10.000 && effectiveTemperature <= 30.000) {
        return SpectralType.B;
    } else if (effectiveTemperature >= 7500 && effectiveTemperature <= 10.000) {
        return SpectralType.A;
    } else if (effectiveTemperature >= 6000 && effectiveTemperature <= 7500) {
        return SpectralType.F;
    } else if (effectiveTemperature >= 5000 && effectiveTemperature <= 6000) {
        return SpectralType.G;
    } else if (effectiveTemperature >= 3500 && effectiveTemperature <= 5000) {
        return SpectralType.K;
    } else if (effectiveTemperature < 3500){
        return SpectralType.M;
    } else{
        return undefined;
    }
}