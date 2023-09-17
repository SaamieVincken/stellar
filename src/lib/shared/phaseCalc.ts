import {sequenceCalc} from "./sequenceCalc";
import { StellarPhasesEnum } from './StellarPhasesEnum';
import {MainSequenceEnum} from "./MainSequenceEnum";
import * as phaseObjects from './StellarObjects';

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