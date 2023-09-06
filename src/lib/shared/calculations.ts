
function sequenceCalc(luminosity: number, mass: number, temperature: number): string {
    let sequence;
    const solarMass = massToSolar(mass);
    if (luminosity > 100 && solarMass > 8 && temperature > 10000) {
        sequence = StellarPhases.MainSequence;
    }
    else if (luminosity < 10 && solarMass < 2 && temperature < 4000) {
        sequence = StellarPhases.RedGiant;
    }
    else if (solarMass > 8) {
        sequence = StellarPhases.SuperGiant;
    }
    else if (temperature > 10000 && luminosity < 10) {
        sequence = StellarPhases.WhiteDwarf;
    }
    else {
        sequence = StellarPhases.ProtoStar;
    }
    return sequence;
}

//Calculating mass in kg to solarMass:
function massToSolar(mass: number): number{
    const sunMass = 1.989e30;
    let solarMassValue;
    solarMassValue = mass / sunMass;
    return solarMassValue;
}

//Calculating the phase a star is in:
function phaseCalc(luminosity: number, mass: number, temperature: number): string{
    let phase;
    let sequence;
    sequence = sequenceCalc(luminosity, mass, temperature);
    if(sequence == StellarPhases.MainSequence){
        phase = mainSequencePhase(mass);
    }
    else if(sequence == StellarPhases.RedGiant){
        phase = StellarPhases.RedGiant;
    }
    else if(sequence == StellarPhases.SuperGiant){
        phase = StellarPhases.SuperGiant;
            //ToDO: If phaseCalc returns SuperGiant -> Use mass to get colour(blue/red) and type
    }
    else if(sequence == StellarPhases.WhiteDwarf) {
        phase = StellarPhases.WhiteDwarf;
        //ToDO: If phaseCalc returns WhiteDwarf -> Use mass to get colour(blue/white) and type
    }
    else{
        phase = StellarPhases.ProtoStar;
    }
    return phase;
}

//Calculate the main sequence phase the star is in:
function mainSequencePhase(solarMass: number): string {
    let phase;
    if (solarMass < 0.5) {
        phase = MainSequenceEnum.YoungMS;
    }
    else if (solarMass <= 1 && solarMass > 0.5) {
        phase = MainSequenceEnum.MatureMS;
    }
    else {
        phase = MainSequenceEnum.EndMS;
    }
    return phase;
}

//Calculate the lifetime of a star in its main sequence phase:
function mainSequenceLifeTime(solarMass: number): number {
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
}
