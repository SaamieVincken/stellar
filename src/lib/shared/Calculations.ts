import { StellarPhasesEnum } from './StellarPhasesEnum';
import {MainSequenceEnum} from "./MainSequenceEnum";
import * as phaseObjects from './StellarObjects';


export function sequenceCalc(luminosity: number, solarMass: number, temperature: number): string {
    let sequence;

    if (luminosity > 100 && solarMass > 8 && temperature > 10000) {
        sequence = mainSequencePhase(solarMass); // Determine which phase in the main sequence
    } else if (luminosity < 10 && solarMass < 2 && temperature < 4000) {
        sequence = StellarPhasesEnum.RedGiant;
    } else if (solarMass > 8 && luminosity > 100 && temperature > 10000) {
        sequence = StellarPhasesEnum.SuperNova;
    } else if (solarMass > 1.4 && solarMass <= 3) {
        sequence = StellarPhasesEnum.NeutronStar;
    } else if (solarMass > 3) {
        sequence = StellarPhasesEnum.BlackHole;
    } else if (solarMass < 0.08 && luminosity < 0.01) {
        sequence = StellarPhasesEnum.ProtoStar;
    } else if (solarMass <= 1.4 && temperature < 12000) {
        sequence = StellarPhasesEnum.WhiteDwarf;
    } else {
        sequence = "Unknown";
    }
    return sequence;
}

//Calculating the phase a star is in:
export function phaseCalc(luminosity: number, mass: number, temperature: number) {
    let sequence;
    sequence = sequenceCalc(luminosity, mass, temperature); // You need to implement sequenceCalc

    if (sequence === StellarPhasesEnum.ProtoStar) {
        return new phaseObjects.ProtoStar();
    } else if (sequence === StellarPhasesEnum.RedGiant) {
        return new phaseObjects.RedGiant();
    } else if (sequence === StellarPhasesEnum.WhiteDwarf) {
        return new phaseObjects.WhiteDwarf();
    } else if (sequence === StellarPhasesEnum.SuperNova) {
        return new phaseObjects.Supernova();
    } else if (sequence === StellarPhasesEnum.NeutronStar) {
        return new phaseObjects.NeutronStar();
    } else if (sequence === StellarPhasesEnum.BlackHole) {
        return new phaseObjects.BlackHole();
    } else if (sequence === MainSequenceEnum.RedDwarf) {
        return new phaseObjects.RedDwarf();
    } else if (sequence === MainSequenceEnum.GType) {
        return new phaseObjects.GType();
    } else if (sequence === MainSequenceEnum.BlueGiant) {
        return new phaseObjects.BlueGiant();
    } else {
        return "Unknown";
    }
}

//Calculate the main sequence phase the star is in:
export function mainSequencePhase(solarMass: number): string {
    let MSphase;

    if (solarMass >= 0.08 && solarMass < 1.2) {
        MSphase = MainSequenceEnum.RedDwarf;
    }
    else if (solarMass >= 1.2 && solarMass <= 2.1) {
        MSphase = MainSequenceEnum.GType;
    }
    else if (solarMass > 2.1 && solarMass <= 20) {
        MSphase = MainSequenceEnum.BlueGiant;
    }
    else {
        MSphase = "Unknown";
    }
    return MSphase;
}


//Calculate the lifetime of a star in its main sequence phase:
/*function mainSequenceLifeTime(solarMass: number): number {
    let lifetime;
    if (solarMass < 0.5) {
        lifetime = Math.pow(10, 11); // Tens to hundreds of billions of years
    }
    else if (solarMass <= 1 && solarMass > 0.5) {
        lifetime = 10e9; // Approximately 10 billion years
    }
    else if (solarMass <= 8 && solarMass > 1) {
        lifetime = 6e7; // About 60 million years
    }
    else {
        lifetime = 4e6; // Around 4 million years
    }
    return lifetime;
}*/
