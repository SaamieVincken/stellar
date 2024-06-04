import math


def calculate_effective_temperature(luminosity, radius):
    """
    Calculates the effective temperature of a star as:

    T_eff = (L/(4πR^2σ))^1/4

    where:
    T_eff is the effective temperature in Kelvin
    L is the luminosity of the star in Watts
    R is the radius of the star in meters
    σ is the Stefan-Boltzmann constant (5.670374419e-8 W/m^2K^4)

    Args:
        luminosity: The luminosity of the star in Watts
        radius: The radius of the star in solar Meters

    Returns:
        The effective temperature of the star in Kelvin.
    """

    t_eff = math.pow(luminosity / (4 * math.pi * radius ** 2 * sigma), 1 / 4)

    return t_eff



