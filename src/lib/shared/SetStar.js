import { writable } from 'svelte/store';
import { Star } from "$lib/shared/StarClass.js";
import {GetPhases} from "$lib/shared/Phase/PhaseCalc.js";

export const star = writable(undefined);
export const phase = writable(undefined);

export function setStar(solarMass, solarLuminosity, surfaceTemperature) {
    let newPhase = GetPhases(solarMass, solarLuminosity, surfaceTemperature);
    phase.set(newPhase);

    const newStar = new Star(newPhase, solarMass, solarLuminosity, surfaceTemperature);
    star.set(newStar);
    console.log(newStar);
}
