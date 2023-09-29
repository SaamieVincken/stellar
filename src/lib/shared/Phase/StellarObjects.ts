/*Phases overview:
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
    phase = "Protostar";
    mass = "< 2 solar masses";
    luminosity = "< 10 solar luminosities";
    temperature = "< 4,000 K";
    phaseDuration = "~1 billion years (before transforming into a white dwarf)";
    diameter = "62 million to 620 million miles in diameter (100 million to 1 billion km)";
    colors = ["Red", "Yellow", "Orange"];
    img = "/src/lib/images/ProtoStar.png";
}

export class RedDwarf {
    phase = "Red Dwarf";
    mass = "< 0.5 solar masses";
    luminosity = "< 0.1 solar luminosities";
    temperature = "< 4,000 K";
    phaseDuration = "Trillions of years";
    diameter = "Typically around 10% the diameter of the Sun";
    colors = ["Red", "Brown"];
    img = "/src/lib/images/RedDwarf.png";
}

export class GType {
    phase = "G-type (Main Sequence)";
    mass = "Similar to solar mass";
    luminosity = "Similar to solar luminosity";
    temperature = "Around 5,500 to 6,000 K";
    phaseDuration = "Several billion years (current phase of our Sun)";
    diameter = "Similar to the Sun, about 1.4 million kilometers in diameter";
    colors = ["Yellow", "White"];
    img = "/src/lib/images/GType.png";
}

export class BlueGiant {
    phase = "Blue Giant";
    mass = "Varies, can be several to tens of solar masses";
    luminosity = "Tens of thousands to millions of solar luminosities";
    temperature = "Over 30,000 K";
    phaseDuration = "A few million years";
    diameter = "Varies, can be many times larger than the Sun";
    colors = ["Blue", "White"];
    img = "/src/lib/images/BlueGiant.png";
}

export class Supernova {
    phase = "Supernova";
    mass = "Typically > 8 solar masses";
    luminosity = "Extremely bright, can outshine entire galaxies temporarily";
    temperature = "Very high, tens of thousands of degrees Kelvin";
    phaseDuration = "Short, usually weeks to months for the event itself";
    diameter = "Expands rapidly during the explosion, can reach sizes of several light-years";
    colors = ["Bright White", "Blue"];
    img = "/src/lib/images/Supernova.png";
}

export class NeutronStar {
    phase = "Neutron Star";
    mass = "~1.4 solar masses";
    luminosity = "Varies, can be very high, especially in the case of pulsars";
    temperature = "Extremely high, over a million degrees Kelvin";
    phaseDuration = "Indefinite, they do not evolve further";
    diameter = "About 20-30 kilometers";
    img = "/src/lib/images/NeutronStar.png";
}

export class BlackHole {
    phase = "Black Hole";
    mass = "Any mass can become a black hole if it collapses within its Schwarzschild radius";
    img = "/src/lib/images/BlackHole.png";
}

export class WhiteDwarf {
    phase = "White Dwarf";
    mass = "0.6 to 1.4 solar masses";
    luminosity = "Varies, generally lower than the Sun's luminosity";
    temperature = "Around 8,000 to 40,000 K";
    phaseDuration = "Billions of years, as they slowly cool down";
    diameter = "About the size of Earth, roughly 10,000 kilometers";
    colors = ["White", "Pale Yellow"];
    img = "/src/lib/images/WhiteDwarf.png";
}

export class RedGiant {
    phase = "Red Giant";
    mass = "2 solar masses";
    luminosity = "10 times the Sun's luminosity";
    temperature = "4,000 K";
    phaseDuration = "~1 billion years (before transforming into white dwarfs)";
    diameter = "62 million to 620 million miles in diameter (100 million to 1 billion km)";
    colors = ["Red", "Orange"];
    img = "src/lib/images/sun.png";
}
