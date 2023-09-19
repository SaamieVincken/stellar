import { StellarPhasesEnum } from './StellarPhasesEnum';
import {mainSequencePhase} from "./mainSequenceCalc";

export function sequenceCalc(luminosity: number, solarMass: number, temperature: number): string {
    let sequence;

    if (solarMass < 0.08 && luminosity < 0.01) {
        sequence = StellarPhasesEnum.ProtoStar;
    } else if (solarMass <= 1.4 && temperature < 12000) {
        sequence = StellarPhasesEnum.WhiteDwarf;
    } else if (solarMass > 8 && luminosity > 100 && temperature > 10000) {
        sequence = StellarPhasesEnum.SuperNova;
    } else if (luminosity > 100 && solarMass > 8 && temperature > 10000) {
        sequence = mainSequencePhase(solarMass, temperature); // Determine which phase in the main sequence
    }else if (solarMass > 1.4 && solarMass <= 3) {
        sequence = StellarPhasesEnum.NeutronStar;
    } else if (luminosity < 10 && solarMass < 2 && temperature < 4000) {
        sequence = StellarPhasesEnum.RedGiant;
    }  else if (solarMass > 8 && luminosity <= 100) {
        sequence = StellarPhasesEnum.BlackHole;
    } else {
        sequence = "Unknown";
    }
    return sequence;
}