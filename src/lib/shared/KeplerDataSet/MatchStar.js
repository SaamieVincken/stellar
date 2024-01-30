import { onMount } from 'svelte';
import { Star } from '$lib/Star';

let stars = [];

onMount(async () => {
    const response = await fetch('http://localhost:5000/get_stars');
    if (response.ok) {
        const starsData = await response.json();
        stars = starsData.map(starData => new Star(
            starData.phase,
            starData.solarMass,
            starData.solarLuminosity,
            starData.surfaceTemperature
        ));
    } else {
        console.error('Failed to fetch star data');
    }
});
