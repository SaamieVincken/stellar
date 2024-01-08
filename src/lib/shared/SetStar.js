
import { Star } from "$lib/shared/StarClass.js";
import {GetPhases} from "$lib/shared/Phase/PhaseCalc.js";
import {star} from "$lib/shared/StarStore.js";

/**
 *
 * @param solarMass
 * @param solarLuminosity
 * @param surfaceTemperature
 */
export function setStar(solarMass, solarLuminosity, surfaceTemperature) {
    let newPhase = GetPhases(solarLuminosity, solarMass, surfaceTemperature);
    const newStar = new Star(newPhase, solarMass, solarLuminosity, surfaceTemperature);
    star.set(newStar);
}
