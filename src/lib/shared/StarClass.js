import {calculateStellarRadius} from "./StellarProperties/StellarRadius.js";
import {calculateEffectiveTemperature} from "./StellarProperties/EffectiveTemperature.js";
import {calculateStellarDensity} from "./StellarProperties/StellarDensity.js";
import {calculateSpectralType} from "$lib/shared/SpectralClassification/SpectralType/SpectralType.js";
import {getLuminosityClass} from "$lib/shared/SpectralClassification/LuminosityClass/LuminosityClass.js";
import {calculateVolume} from "$lib/shared/StellarProperties/StellarVolume.js";
import {GetColor} from "$lib/shared/Color/Color.js";
import Decimal from "decimal.js";

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
    hslColor;
    stellarVolume;

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
        this.stellarRadius = calculateStellarRadius(new Decimal(solarLuminosity), new Decimal(surfaceTemperature)).toNumber();
        this.effectiveTemperature = calculateEffectiveTemperature(solarLuminosity, this.stellarRadius).toNumber();
        this.stellarDensity = calculateStellarDensity(new Decimal(solarMass), calculateVolume(this.stellarRadius));
        this.spectralType = calculateSpectralType(this.effectiveTemperature);
        this.luminosityClass = getLuminosityClass(this.solarLuminosity);
        this.hslColor = GetColor(this.solarMass, this.solarLuminosity, this.surfaceTemperature);
        this.stellarVolume = calculateVolume(this.stellarRadius);
    }
}

