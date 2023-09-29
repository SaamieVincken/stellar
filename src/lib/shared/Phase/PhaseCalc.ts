import * as phaseObjects from './StellarObjects';
import {sequenceCalc} from '../Sequence/SequenceCalc';
import {Sequences} from '../Sequence/SequenceEnum';

export function GetPhases(luminosity :number, solarMass: number, temperature : number) {
    const sequence = sequenceCalc(luminosity, solarMass, temperature);

    switch (sequence) {
        case Sequences.MainSequence:
            return MS_phaseCalc(solarMass, temperature, luminosity);
        default:
            return NMS_phaseCalc(solarMass, temperature, luminosity);
    }
}

// Calculate the Non-Main Sequence (NMS) phase of a star
export function NMS_phaseCalc(solarMass: number, temperature: number, luminosity: number) {
    if (solarMass < 2 && solarMass > 0.08) {
        if (luminosity <= 0.01 && temperature < 500) {
            return new phaseObjects.ProtoStar();
        } else if (luminosity <= 0.1 && temperature > 5000) {
            return new phaseObjects.WhiteDwarf();
        }
    } else if (solarMass >= 1.4 && solarMass <= 2.1) {
        if (temperature > 1e6 && luminosity > 1e26) {
            return new phaseObjects.NeutronStar();
        }
    } else if (solarMass >= 0.5 && solarMass <= 8) {
        if (temperature < 1e6 && luminosity > 1000) {
            return new phaseObjects.RedGiant();
        }
    } else if (solarMass >= 8) {
        if (temperature > 1e9) {
            return new phaseObjects.BlackHole();
        } else if (luminosity > 100 && temperature > 10000) {
            return new phaseObjects.Supernova();
        }
    }
    return null; // Unknown
}

// Calculate the Main Sequence (MS) phase of a star based on the Hertzsprung-Russell diagram
export function MS_phaseCalc(solarMass: number, temperature: number, luminosity: number) {
    if (solarMass >= 0.08 && solarMass < 1.2) {
        if (temperature >= 2500 && temperature <= 3500 && luminosity < 0.1) {
            return new phaseObjects.RedDwarf();
        }
    } else if (solarMass >= 1.2 && solarMass <= 2.1) {
        if (temperature >= 5000 && temperature <= 6000 && luminosity >= 0.1 && luminosity <= 10) {
            return new phaseObjects.GType();
        }
    } else if (solarMass > 2.1 && solarMass <= 20) {
        if (temperature >= 15000 && temperature <= 30000 && luminosity > 10) {
            return new phaseObjects.BlueGiant();
        }
    }
    return null; // Unknown
}



