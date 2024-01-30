import { Sequences } from "./SequenceEnum.ts";

/**
 * Calculates the stellar sequence based on solar luminosity, solar mass, and temperature.
 *
 * @param {number} luminosity - The luminosity of the star.
 * @param {number} mass - The solar mass of the star.
 * @param {number} temperature - The temperature of the star.
 * @returns {string} The calculated stellar sequence, either "Main sequence" or "Other sequences".
 */
export function sequenceCalc(luminosity, mass, temperature){
    let sequence;
    if (mass >= 0.08 && mass < 20 && temperature <= 30000 && temperature >= 2500) {
        sequence = Sequences.MainSequence;
    } else {
        sequence = Sequences.OtherSequences;
    }
    return sequence;
}




