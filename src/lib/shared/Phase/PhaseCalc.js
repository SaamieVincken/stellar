import {sequenceCalc} from '../Sequence/SequenceCalc';
import {Sequences} from '../Sequence/SequenceEnum.ts';
import {PhasesEnum} from "./PhasesEnum.ts";

/**
 * Check if a star is in its main sequence or not
 * @param luminosity
 * @param solarMass
 * @param temperature
 * @constructor
 */
export function GetPhases(luminosity, solarMass, temperature ) {
    const sequence = sequenceCalc(luminosity, solarMass, temperature);
    switch (sequence) {
        case Sequences.MainSequence:
            return MS_phaseCalc(solarMass, temperature, luminosity);
        default:
            return NMS_phaseCalc(solarMass, temperature, luminosity);
    }
}

/**
 * Calculate the Non-Main Sequence (NMS) phase of a star
 * @param {number} solarMass
 * @param {number} temperature
 * @param {number} luminosity
 * @return {ProtoStar | NeutronStar | Supernova | WhiteDwarf | null | BlackHole | RedGiant}
 * @constructor
 */
export function NMS_phaseCalc(solarMass, temperature, luminosity) {
    if (solarMass < 2 && solarMass > 0.08) {
        if (luminosity <= 0.01 && temperature < 500) {
            return PhasesEnum.ProtoStar;
        } else if (luminosity <= 0.1 && temperature > 5000) {
            return PhasesEnum.WhiteDwarf;
        }
    } else if (solarMass >= 1.4 && solarMass <= 2.1) {
        if (temperature > 1e6 && luminosity > 1e26) {
            return PhasesEnum.NeutronStar;
        }
    } else if (solarMass >= 0.5 && solarMass <= 8) {
        if (temperature < 1e6 && luminosity > 1000) {
            return PhasesEnum.RedGiant;
        }
    } else if (solarMass >= 8) {
        if (temperature > 1e9) {
            return PhasesEnum.BlackHole;
        } else if (luminosity > 100 && temperature > 10000) {
            return PhasesEnum.Supernova;
        }
    }
    return null;
}

/**
 * Calculate the Main Sequence (MS) phase of a star based on the Hertzsprung-Russell diagram
 * @param {number} solarMass
 * @param {number} temperature
 * @param {number} luminosity
 * @return {BlueGiant | YellowGiant | RedDwarf | null}
 * @constructor
 */
export function MS_phaseCalc(solarMass, temperature, luminosity){
    if (solarMass >= 0.08 && solarMass < 1.2 && temperature >= 2500 && temperature <= 3500 && luminosity < 0.1) {
            return PhasesEnum.RedDwarf;
    } else if (solarMass >= 1 && solarMass <= 2.1 && temperature >= 5000 && temperature <= 7000 && luminosity >= 0.1 && luminosity <= 10) {
            return PhasesEnum.YellowGiant;
    } else if (solarMass > 2.1 && solarMass <= 20 && temperature >= 15000 && temperature <= 30000 && luminosity > 10) {
            return PhasesEnum.BlueGiant;
    }
    return null;
}





