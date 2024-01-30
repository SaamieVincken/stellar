import { Decimal } from 'decimal.js';
/**
 * Luminosity classes and their percentages for lightness in HSL
 */
export const LuminosityClassPercentage: { [key: string] : Decimal } = {
    Ia_O: new Decimal(95),
    Ia: new Decimal(90),
    Ib: new Decimal(30),
    II: new Decimal(70),
    III: new Decimal(95),
    IV: new Decimal(95),
    V: new Decimal(50),
    VI: new Decimal(30),
    D: new Decimal(90),
};