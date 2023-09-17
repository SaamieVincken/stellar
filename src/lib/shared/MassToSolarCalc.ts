export function massToSolar(mass: number): number{
    const sunMass = 1.989e30;
    let solarMassValue;
    solarMassValue = mass / sunMass;
    return solarMassValue;
}
