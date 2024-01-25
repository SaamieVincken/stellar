import Decimal from 'decimal.js';

/**
 * Maps a wavelength in nanometers to an approximate HSL hue value.
 * This is a simplified model and does not perfectly represent human color perception.
 * @param {Decimal} wavelength - Wavelength in nanometers.
 * @param phase
 * @return {Decimal} - Approximate hue value.
 */
export function wavelengthToHue(wavelength, phase) {
    // wavelength = new Decimal(wavelength);
    // // Define wavelength ranges for different colors with Decimal
    // const violet = { min: new Decimal(100), max: new Decimal(450), hueMin: 270, hueMax: 300 };
    // const blue = { min: new Decimal(450), max: new Decimal(495), hueMin: 200, hueMax: 240 };
    // const cyan = { min: new Decimal(495), max: new Decimal(570), hueMin: 180, hueMax: 240 };
    // const green = { min: new Decimal(570), max: new Decimal(590), hueMin: 120, hueMax: 180 };
    // const yellow = { min: new Decimal(590), max: new Decimal(620), hueMin: 60, hueMax: 120 };
    // const orange = { min: new Decimal(620), max: new Decimal(750), hueMin: 30, hueMax: 60 };
    // const red = { min: new Decimal(750), max: new Decimal(1000), hueMin: 0, hueMax: 10 };
    //
    // const colors = [violet, blue, cyan, green, yellow, orange, red];
    //
    // for (const color of colors) {
    //     if (wavelength.gte(color.min) && wavelength.lte(color.max)) {
    //         const rangeFraction = wavelength.sub(color.min).div(color.max.sub(color.min));
    //         console.log(new Decimal(color.hueMin).add(rangeFraction.mul(new Decimal(color.hueMax - color.hueMin))).toNumber());
    //         return new Decimal(color.hueMin).add(rangeFraction.mul(new Decimal(color.hueMax - color.hueMin)));
    //     }
    // }

    //return new Decimal(violet.hueMin);
    switch (phase){
        case "Yellow Dwarf":
            return 43;
        case "Red Dwarf":
            return 355;
        case "Blue Giant":
            return 241;
        case "Red Giant":
            return 360;
        case "White Dwarf":
            return 171;
    }
}

// ProtoStar = 'Proto Star',


//     Supernova = 'Supernova',
//     NeutronStar = 'Neutron Star',
//     BlackHole = 'Black Hole',
//     WhiteDwarf = 'White Dwarf',
//     Unknown = 'Unknown',