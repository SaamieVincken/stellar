from Convert.mass import convert_mass


def calculate_stellar_density(solar_mass, volume):
    """
    Calculate the stellar density using ρ = M/V.

    Args:
        solar_mass: float in solar masses (M☉), which will be converted to grams (g)
        volume: float in cubic meters (m³)

    Returns:
        float density in grams per cubic centimeter (g/cm³)
    """
    cubic_centimeters_per_cubic_meter = 1e6
    volume_in_cubic_centimeters = volume * cubic_centimeters_per_cubic_meter

    mass_in_grams = convert_mass(solar_mass, "to_grams")

    density = mass_in_grams / volume_in_cubic_centimeters
    return density
