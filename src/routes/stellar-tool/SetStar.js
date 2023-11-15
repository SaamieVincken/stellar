import { writable } from 'svelte/store';
import { Star } from "$lib/shared/StarClass.js";
import {GetPhases} from "$lib/shared/Phase/PhaseCalc";

export const star = writable(undefined);
export const phase = writable(undefined);

export function setStar(solarMass, solarLuminosity, surfaceTemperature) {
    console.log(solarMass, solarLuminosity, surfaceTemperature);
    let newPhase = GetPhases(solarMass, solarLuminosity, surfaceTemperature);
    console.log(newPhase);
    if(newPhase) {
        phase.set(newPhase);
        const newStar = new Star(newPhase, solarMass, solarLuminosity, surfaceTemperature);
        star.set(newStar);
    }
}
