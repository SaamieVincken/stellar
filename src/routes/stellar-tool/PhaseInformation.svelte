<style>
    .mt-extraTitle {
        margin-top: 280px;
    }
    .mt-extra {
        margin-top: 350px;
    }

    .custom-border{
        border: #000d21;
    }

    .supernova-color {
        color: #201d82;
    }

    .nebula-color {
        color: #94B3FD;
    }

    .unknown-color {
        color: #5b4278;
    }

    .yellow-dwarf-color {
        color: #c4c27e;
    }
</style>

<script>
    import TimeBar from "./TimeBar.svelte";
    import StarModel from "./Models/StarModel.svelte";
    import { star } from '$lib/shared/StarStore.js';
    import Supernova from "./Models/Supernova.svelte";
    import BlackHole from "./Models/BlackHole.svelte";
    import Nebula from "./Models/Nebula.svelte";
    import {
        LuminosityClassPercentage
    } from "$lib/shared/SpectralClassification/LuminosityClass/LuminosityPercentage";
    let luminosityClassKey;
    let starData = {};
    $: if ($star) {
        console.log("Reactive $star update:", $star);
        luminosityClassKey = getKeyByValue(LuminosityClassPercentage, starData.luminosityClass);
        starData = $star;

    }
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
</script>
<div class="fixed flex items-center justify-center w-full">
    <div class="-mt-52" style="position: relative;">
        {#if starData.phase !== undefined}
            {#if starData.phase === "Supernova"}
                <Supernova/>
            {:else if starData.phase === "Black Hole"}
                <BlackHole/>
            {:else if starData.phase === "Unknown"}
                <Nebula/>
            {:else}
                <StarModel/>
            {/if}
        {:else}
            <Nebula/>
        {/if}
    </div>
</div>


<div>
    <TimeBar/>
    <div class="fixed flex items-center justify-center w-full">
        <div class="mt-extraTitle w-1/2 text-white">
            {#if starData.phase !== undefined}
                {#if starData.phase !== "Black Hole" }
                    <h1 class="ml-1 text-2xl md:text-3xl font-semibold tracking-tight font-mono
                {starData.phase === 'Supernova' ? 'supernova-color' :
                 starData.phase === 'Nebula' ? 'nebula-color' :
                 starData.phase === 'Unknown' ? 'unknown-color' :
                 starData.phase === 'Yellow Dwarf' ? 'yellow-dwarf-color' : ''}"
                    >
                        {starData.phase}
                    </h1>
                    {:else}
                    <h1 class="ml-1 text-2xl md:text-3xl font-semibold tracking-tight font-sans text-red-800">
                        {starData.phase}
                    </h1>
                {/if}

            {/if}
        </div>
    </div>

    <div class="fixed flex items-center justify-center w-full">
        <div class="mt-extra w-1/2 text-white bg-black border-2 custom-border font-mono">
            {#if starData.phase !== undefined}
                {#if starData.phase !== "Black Hole" }
                    <div class="flex justify-between">
                        <div>
                            <p class="ml-1">solar masses: {starData.solarMass} M☉</p>
                            <p class="ml-1">luminosity: {starData.solarLuminosity} L☉</p>
                            <p class="ml-1">temperature: {starData.surfaceTemperature} Kelvin</p>
                        </div>
                            <div>
                            <p class="ml-1">radius: {Math.round(starData.stellarRadius / 1000).toLocaleString('de-DE')} km</p>
                            <p class="ml-1">density: {starData.stellarDensity.toExponential(2)} g/cm³</p>
                            <p class="ml-1 mb-2">volume: {Number(starData.stellarVolume).toExponential(2)} m³</p>

                        </div>
                        <div>
                            <p class="ml-1 text-blue-500">spectral type: {starData.spectralType}</p>
                            <p class="ml-1 text-blue-500">luminosity class: {luminosityClassKey}</p>
                        </div>
                    </div>
                {:else}
                    <p class="ml-1 mt-2">solar masses: {starData.solarMass} M☉</p>
                    <p class="ml-1">temperature: {starData.surfaceTemperature} Kelvin</p>
                {/if}
            {/if}
        </div>
    </div>
</div>

<!--    phase;
    solarMass;
    solarLuminosity;
    surfaceTemperature;
    effectiveTemperature;
    stellarRadius;
    stellarDensity;
    spectralType;
    luminosityClass;
    hslColor;-->


