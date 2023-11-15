import {calculateStellarRadius} from "./StellarProperties/StellarRadius";
import {calculateEffectiveTemperature} from "./StellarProperties/EffectiveTemperature";
import {calculateStellarDensity} from "./StellarProperties/StellarDensity";
import {calculateSpectralType} from "$lib/shared/SpectralClassification/SpectralType/SpectralType.ts";
import {getLuminosityClass} from "$lib/shared/SpectralClassification/LuminosityClass/LuminosityClass.ts";

export class Star {
    phase;
    solarMass;
    solarLuminosity;
    surfaceTemperature;
    effectiveTemperature;
    stellarRadius;
    stellarDensity;
    spectralType;
    luminosityClass;

    constructor(
        phase,
        solarMass,
        solarLuminosity,
        surfaceTemperature,
    ) {
        this.phase = phase;
        this.solarMass = solarMass;
        this.solarLuminosity = solarLuminosity;
        this.surfaceTemperature = surfaceTemperature;
        this.stellarRadius = calculateStellarRadius(solarLuminosity, surfaceTemperature);
        this.effectiveTemperature = calculateEffectiveTemperature(solarLuminosity, this.stellarRadius);
        this.stellarDensity = calculateStellarDensity(solarMass, this.stellarRadius);
        this.spectralType = calculateSpectralType(this.effectiveTemperature);
        this.luminosityClass = getLuminosityClass(this.solarLuminosity);
    }
}

