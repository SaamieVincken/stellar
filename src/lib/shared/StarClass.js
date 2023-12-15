import {calculateStellarRadius} from "./StellarProperties/StellarRadius.js";
import {calculateEffectiveTemperature} from "./StellarProperties/EffectiveTemperature.js";
import {calculateStellarDensity} from "./StellarProperties/StellarDensity.js";
import {calculateSpectralType} from "$lib/shared/SpectralClassification/SpectralType/SpectralType.js";
import {getLuminosityClass} from "$lib/shared/SpectralClassification/LuminosityClass/LuminosityClass.js";
import {GetColor} from "$lib/shared/Color/Color.js";

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
    rgbColor;

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
        this.rgbColor = GetColor(this.solarMass, this.solarLuminosity, this.surfaceTemperature)
    }
}

