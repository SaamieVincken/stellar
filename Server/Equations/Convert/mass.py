from decimal import Decimal

# Constant for the mass of our sun in kilograms (kg)
sun_mass = Decimal('1.989e30')


def convert_mass(value, mode):
    """
    Converts a mass value based on the specified mode.

    Args:
        value: Decimal or number in the input unit
        mode: str indicating the type of conversion:
                 'to_solar_mass' - Convert kg to solar masses
                 'to_kilograms' - Convert solar masses to kg
                 'to_grams' - Convert solar masses to grams
    Returns:
        Decimal in the converted unit
    """
    value = Decimal(value)

    if mode == 'to_solar_mass':
        return value / sun_mass
    elif mode == 'to_kilograms':
        return value * sun_mass
    elif mode == 'to_grams':
        grams_per_kilogram = Decimal(1000)
        return value * sun_mass * grams_per_kilogram
