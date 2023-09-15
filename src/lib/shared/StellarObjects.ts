/*Phases:
Proto Star
Red Dwarf
GType
Blue giant
Red giant
Supernova
Neutron star
Black hole
White dwarf*/

export class ProtoStar {
    private phase: string = "Proto star";
    private luminosity: string = "Luminosity less than 10 times the Sun's luminosity.";
    private solarMass: string = "Solar mass less than 2 times the solar mass.";
    private surfaceTemperature: string = "Surface temperature less than 4,000 K.";
    private phaseDuration: string = "Phase lasts for +- 1 billion years before transforming into white dwarfs.";
    private diameter: string = "62 million to 620 million miles in diameter (100 million to 1 billion KM).";
    private img: string = "/src/" + "lib/images/ProtoStar.png";
}

export class RedDwarf {
    private phase: string = "Red dwarf";
    private luminosity: string = "Luminosity less than 0.1 times the Sun's luminosity.";
    private solarMass: string = "Solar mass less than 0.5 times the solar mass.";
    private surfaceTemperature: string = "Surface temperature less than 4,000 K.";
    private phaseDuration: string = "Red dwarfs can have lifetimes exceeding trillions of years.";
    private diameter: string = "Typically around 10% the diameter of the Sun.";
    private img: string = "/src/" + "lib/images/RedDwarf.png";
}

export class GType {
    private phase: string = "G-type (main sequence)";
    private luminosity: string = "Luminosity similar to the Sun's luminosity.";
    private solarMass: string = "Solar mass similar to the solar mass.";
    private surfaceTemperature: string = "Surface temperature around 5,500 to 6,000 K.";
    private phaseDuration: string = "Several billion years (the current phase of our Sun).";
    private diameter: string = "Similar to the Sun, about 1.4 million kilometers in diameter.";
    private img: string = "/src/" + "lib/images/GType.png";
}

export class BlueGiant {
    private phase: string = "Blue giant";
    private luminosity: string = "Luminosity tens of thousands to millions of times the Sun's luminosity.";
    private solarMass: string = "Solar mass can range from a few to tens of times the solar mass.";
    private surfaceTemperature: string = "Surface temperature over 30,000 K.";
    private phaseDuration: string = "A few million years.";
    private diameter: string = "Varies depending on the star's mass and age but can be many times larger than the Sun.";
    private img: string = "/src/" + "lib/images/BlueGiant.png";
}

export class Supernova {
    private phase: string = "Supernova";
    private luminosity: string = "Extremely bright, can outshine entire galaxies temporarily.";
    private solarMass: string = "Typically, a massive star with at least 8 times the solar mass can undergo a supernova.";
    private surfaceTemperature: string = "Very high, reaching tens of thousands of degrees Kelvin.";
    private phaseDuration: string = "A supernova event itself is relatively short, usually lasting weeks to months.";
    private diameter: string = "Expands rapidly during the explosion, can reach sizes of several light-years.";
    private img: string = "/src/" + "lib/images/supernova.png";
}

export class NeutronStar {
    private phase: string = "Neutron star";
    private luminosity: string = "Luminosity varies but can be very high, especially in the case of pulsars.";
    private solarMass: string = "Typically around 1.4 times the solar mass.";
    private surfaceTemperature: string = "Extremely high, over a million degrees Kelvin.";
    private phaseDuration: string = "Essentially indefinitely (they do not evolve further).";
    private diameter: string = "About 20-30 kilometers.";
    private img: string = "/src/" + "lib/images/NeutronStar.png";
}

export class BlackHole {
    private phase: string = "Black hole";
    private mass: string = "Any mass can become a black hole if it collapses within its Schwarzschild radius.";
    private img: string = "/src/" + "lib/images/BlackHole.png";
    /*Diameter is described by their Schwarzschild radius, which depends on their mass.*/
}

export class WhiteDwarf {
    private phase: string = "White dwarf";
    private luminosity: string = "Luminosity varies but generally lower than the Sun's luminosity.";
    private solarMass: string = "Typically around 0.6 to 1.4 times the solar mass.";
    private surfaceTemperature: string = "Around 8,000 to 40,000 K.";
    private phaseDuration: string = "Billions of years, as they slowly cool down.";
    private diameter: string = "About the size of Earth, roughly 10,000 kilometers.";
    private img: string = "/src/" + "lib/images/White_Dwarf.png";
}

export class RedGiant {
    private phase: string = "Red giant";
    private luminosity: string = "Luminosity 10 times the Sun's luminosity.";
    private solarMass: string = "Solar mass 2 times the solar mass.";
    private surfaceTemperature: string = "Surface temperature 4,000 K.";
    private phaseDuration: string = "Phase lasts for +- 1 billion years before transforming into white dwarfs.";
    private diameter: string = "62 million to 620 million miles in diameter (100 million to 1 billion KM).";
    private img: string = "/src/" + "lib/images/sun.png";
}
