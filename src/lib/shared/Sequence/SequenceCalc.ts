import {Sequences} from "./SequenceEnum";

export function sequenceCalc(luminosity: number, solarMass: number, temperature: number): string {
    let sequence;

    if (luminosity >= 100 && solarMass > 8 && temperature > 10000) {
        sequence = Sequences.MainSequence;
    }else{
        sequence = Sequences.NonMainSequence;
    }
    return sequence;
}



