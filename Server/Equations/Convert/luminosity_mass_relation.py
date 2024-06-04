def calculate_luminosity(solar_mass):
    """
    Calculates the luminosity of a star using its solar mass as:

        L ≈ M^3.5

    where:
        M is the mass of the star in solar mass(M☉)
        L is the luminosity of the star in solar luminosity(L☉)

    Args:
        solar_mass: The mass of the star in solar masses.

    Returns:
        The luminosity of the star in solar luminosities.
    """
    solar_mass = solar_mass
    luminosity = solar_mass ** 3.5
    return luminosity


def calculate_mass(solar_luminosity):
    """
    Calculates the mass of a star using its solar luminosity as:

        M ≈ L^(1/3.5)

    where:
        M is the mass of the star in solar mass(M☉)
        L is the luminosity of the star in solar luminosity(L☉)


    Args:
        solar_luminosity: The luminosity of the star in solar luminosities.

    Returns:s   
        The mass of the star in solar masses.
    """
    solar_luminosity = solar_luminosity
    mass = solar_luminosity ** (1 / 3.5)
    return mass
