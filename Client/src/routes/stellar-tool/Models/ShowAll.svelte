<script>
    import { onMount } from 'svelte';
    import {initializeNebula} from "$lib/shared/Models/NebulaModel.js";
    import {initializeBlackHole} from "$lib/shared/Models/BlackHoleModel.js";
    import {initializeNeutronStar} from "$lib/shared/Models/NeutronStar.js";
    import {initializeSupernova} from "$lib/shared/Models/SupernovaModel.js";
    import {initializeStar} from "$lib/shared/Models/StarModel.js";
    import {updateStar} from "$lib/shared/Models/StarModel.js";
    import {disposeAllModels} from "$lib/shared/Models/DisposeAll.js";
    import { star } from '$lib/shared/StarStore.js';

    let starData = {};
    $: if ($star) {
        starData = $star;
    }

    export let activate = false;

    $: if (activate) {
        loadModelsSequentially().then(() => {
            activate = false; // Reset after loading models
        });
    }

    const red = [2, 0.6, 0.4];
    const yellow = [];
    const blue = [];
    const white = [];

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function loadModelsSequentially() {
        await disposeAllModels();

        await initializeNebula();
        await delay(5000);

        await initializeStar();
        await delay(0);

        await updateStar(red, 1.2, 1); // Red Dwarf
        await delay(5000);

        await updateStar(yellow, 1.4, 1); // Yellow Dwarf
        await delay(5000);

        if(starData.solarMass <= 8) {
            await updateStar(red, 1.8, 1); // Red Giant
            await delay(5000);

            await updateStar(white, 1.0, 1); // White Dwarf
            await delay(5000);
        } else {
            await updateStar(blue, 1.8, 1); // Blue giant
            await delay(5000);

            await initializeSupernova();
            await delay(5000);

            await initializeNeutronStar();
            await delay(5000);

            await initializeBlackHole();
        }
    }

    onMount(() => {
        loadModelsSequentially();
    });
</script>

<div id="renderer-container"></div>