<script>
    import { onDestroy } from 'svelte';
    import { initializeStar } from './starModel';
    import { star } from '../stellar-tool/StarStore.js';
    import { afterUpdate } from 'svelte';
    import {GetColor} from "$lib/shared/Color/Color.js";

    let currentStar;
    let unsubscribe;

    const unsubscribeHandler = star.subscribe(value => {
        currentStar = value;
        if (currentStar) {
            console.log('Current Star:', currentStar);
            initializeStar(
                GetColor(currentStar.solarMass, currentStar.solarLuminosity, currentStar.surfaceTemperature),
              //  (currentStar.stellarRadius / 1e9),
                null, //ToDo: implement stellar radius
                (currentStar.luminosityClass / 100)
            );
        }
    });

    afterUpdate(() => {
        if (unsubscribeHandler) {
            unsubscribeHandler();
        }
    });

    onDestroy(() => {
        if (unsubscribe) {
            unsubscribe();
        }
    });
</script>

<div id="renderer-container" class="-mt-5"></div>
