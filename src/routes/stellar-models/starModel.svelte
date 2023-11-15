<script>
    import {onDestroy, onMount} from 'svelte';
    import { initializeStar } from './starModel';
    import { star } from '../stellar-tool/StarStore.js';

    let currentStar;
    const unsubscribe = star.subscribe(value => {
        currentStar = value;
    });

    onMount(() => {
        if (currentStar) {
            initializeStar(
                currentStar.solarMass,
                currentStar.solarLuminosity,
                currentStar.surfaceTemperature,
                currentStar.stellarRadius
            );
        }
    });

    onDestroy(() => {
        unsubscribe();
    });
</script>

<div id="renderer-container" class="-mt-5"></div>
