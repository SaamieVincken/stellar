from decimal import Decimal
from Convert.luminosity import convert_luminosity
from Constants import pi, stefan_boltzmann_constant


def calculate_stellar_radius(luminosity, surface_temperature):
    """
    Calculate stellar radius using √(L/(4πσ(T_s)^4))

    Args:
        luminosity: Decimal in solar luminosity (L☉)
        surface_temperature: Decimal in Kelvin (K)

    Returns:
        Decimal radius in meters (m)
    """
    luminosity_in_watts = convert_luminosity(luminosity, "to_watts")

    # Calculate radius
    radius = (luminosity_in_watts / (
                Decimal(4) * pi * stefan_boltzmann_constant * (surface_temperature ** Decimal(4)))).sqrt()

    return radius
