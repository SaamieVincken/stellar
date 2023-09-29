export function massToSolar(mass: number): number{
    const sunMass = 1.989e30;
    return mass / sunMass;
}
