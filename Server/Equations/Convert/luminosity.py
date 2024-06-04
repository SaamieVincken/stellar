from decimal import Decimal


def convert_luminosity(value, mode):
    """
    Converts luminosity between solar luminosities (L☉) and watts (W).

    Args:
        value: Decimal or number in the input unit
        mode: str indicating the type of conversion:
                 'to_watts' - Convert solar luminosities to watts
                 'to_solar_lum' - Convert watts to solar luminosities

    Returns:
        Decimal in the converted unit
    """
    value = Decimal(value)
    sun_constant_luminosity = Decimal('3.828e26')

    if mode == 'to_watts':
        return value * sun_constant_luminosity
    elif mode == 'to_solar_lum':
        return value / sun_constant_luminosity
