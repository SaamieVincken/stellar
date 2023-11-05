import { Sequences } from "./SequenceEnum";

/**
 * Calculates the stellar sequence based on solar luminosity, solar mass, and temperature.
 *
 * @param {number} luminosity - The luminosity of the star.
 * @param {number} mass - The solar mass of the star.
 * @param {number} temperature - The temperature of the star.
 * @returns {string} The calculated stellar sequence, either "Main sequence" or "Other sequences".
 */
export function sequenceCalc(luminosity: number, mass: number, temperature: number): string {
    let sequence;
    if (luminosity > 0.1 && luminosity <= 10 &&
        mass < 20 &&
        temperature > 10000) {
        sequence = Sequences.MainSequence;
    } else {
        sequence = Sequences.OtherSequences;
    }
    return sequence;
}




