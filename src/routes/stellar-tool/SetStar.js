import {star} from "./StarStore.js";
import {Star} from "$lib/shared/StarClass.js";
import {GetPhases} from "../../lib/shared/Phase/PhaseCalc.js"

export function setStar(solarMass, solarLuminosity, surfaceTemperature){
    let phase = GetPhases(solarMass, solarLuminosity, surfaceTemperature);
    star.set(new Star(phase, solarMass, solarLuminosity, surfaceTemperature));
}