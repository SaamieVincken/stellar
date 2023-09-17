import {MainSequenceEnum} from "./MainSequenceEnum";

//Calculate what part of the main sequence the star is in:
export function mainSequencePhase(solarMass: number): string {
    let MSphase;
    if (solarMass >= 0.08 && solarMass < 1.2) {
        MSphase = MainSequenceEnum.RedDwarf;
    } else if (solarMass >= 1.2 && solarMass <= 2.1) {
        MSphase = MainSequenceEnum.GType;
    } else if (solarMass > 2.1 && solarMass <= 20) {
        MSphase = MainSequenceEnum.BlueGiant;
    } else {
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
