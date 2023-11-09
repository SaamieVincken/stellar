import {calculateEffectiveTemperature} from "$lib/shared/StellarProperties/EffectiveTemperature";
import {calculateStellarRadius} from "$lib/shared/StellarProperties/StellarRadius";
import {calculateStellarDensity} from "$lib/shared/StellarProperties/StellarDensity";

export class Star {
    sequence: string;
    phase: string;
    solarMass: number;
    solarLuminosity: number;
    surfaceTemperature: number;
    effectiveTemperature: number;
    stellarRadius: number;
    stellarDensity: number;

    constructor(
        sequence: string,
        phase: string,
        solarMass: number,
        solarLuminosity: number,
        surfaceTemperature: number,
    ) {
        this.sequence = sequence;
        this.phase = phase;
        this.solarMass = solarMass;
        this.solarLuminosity = solarLuminosity;
        this.surfaceTemperature = surfaceTemperature;
        this.stellarRadius = calculateStellarRadius(solarLuminosity, surfaceTemperature);
        this.effectiveTemperature = calculateEffectiveTemperature(solarLuminosity, this.stellarRadius);
        this.stellarDensity = calculateStellarDensity(solarMass, this.stellarRadius)
    }
}

