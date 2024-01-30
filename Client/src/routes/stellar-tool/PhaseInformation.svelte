<style>
    .mt-extraTitle {
        margin-top: 280px;
    }

    .custom-border{
        border: #000d21;
    }
    .tooltip {
        position: relative;

    }

    .customButton{
        position: relative;
        z-index: 1000;
        display: flex;
        flex-direction: column;
    }

    .tooltip .tooltiptext {
        visibility: hidden;
        background-color: white;
        color: black;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 100;
        bottom: 125%;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s;
    }

    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity: 1;
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
    import NeutronStar from "./Models/NeutronStar.svelte";

    let showAllActive = false;
    let matchIsFound = false;
    let luminosityClassKey;
    let starData = {};

    function handlePlayButtonClick() {
        showAllActive = !showAllActive;
    }

    $: if ($star) {
        luminosityClassKey = getKeyByValue(LuminosityClassPercentage, starData.luminosityClass);
        starData = $star;
    }

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }

    let buttonText = "Search for match";
    function searchForMatch(){
        buttonText = "Match has been found!"
        if(matchIsFound){
            window.location.href = './stellar-models';
        }
        matchIsFound = true;

    }

</script>
<div class="fixed top-0 right-0 w-full flex mt-80 mr-32 z-20">
    <div class="ml-auto w-1/5 customButton">
        {#if starData.phase !== undefined}
            <button
                class="w-36 h-auto flex items-center justify-center text-white mt-1 mr-4 cursor-pointer rounded-lg p-2"
                style="background-color: #3F3F3F;"
                on:click={() => { if ($star !== undefined) searchForMatch(); }}
            >
                {buttonText}
            </button>
        {/if}
    </div>
</div>


<div class="fixed flex items-center justify-center w-full">
    <div class="-mt-52" style="position: relative;">
        {#if starData.phase !== undefined}
            {#if starData.phase === "Supernova"}
                <Supernova/>
            {:else if starData.phase === "Black Hole"}
                <BlackHole/>
            {:else if starData.phase === "Unknown"}
                <Nebula/>
            {:else if starData.phase === "Neutron Star"}
                <NeutronStar/>
            {:else}
                <StarModel/>
            {/if}
        {:else}
            <Nebula/>
        {/if}
    </div>
</div>


    <!-- Add PlayButton-->

<!--    <PlayButton on:click={handlePlayButtonClick} />-->

<!--    &lt;!&ndash; Include the ShowAll component and pass the activation state &ndash;&gt;-->
<!--    <ShowAll activate={showAllActive} />-->

<!--    <TimeBar/>-->


    <div class="fixed flex items-center justify-center w-full">
        <div class="mt-extraTitle w-1/2 text-white hover:text-blue-500">
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
                    <h1 class="ml-1 text-2xl md:text-3xl font-semibold tracking-tight font-sans text-red-800 ">
                        {starData.phase}
                    </h1>
                {/if}

            {/if}
        </div>
    </div>

<div class="fixed flex items-center justify-center w-full mt-80">
    <div class={starData.phase === "Black Hole" ? 'mt-extra text-white bg-black border-2 custom-border font-mono w-1/6' : 'mt-extra text-white bg-black border-2 custom-border font-mono w-1/2'} style={starData.phase === "Black Hole" ? 'margin-right:500px;' : ''}>
        {#if starData.phase !== undefined}
            {#if starData.phase !== "Black Hole" }
                <div class="flex justify-between">
                    <div>
                        <div class="tooltip">
                        <p class="ml-1 hover:text-blue-500">solar masses: {starData.solarMass} M☉</p>
                            <span class="tooltiptext" style="width: 430px;">{Number(starData.solarMass).toFixed(2)} times the mass of our sun</span>
                        </div>
                        <div class="tooltip">
                        <p class="ml-1 hover:text-blue-500">luminosity: {starData.solarLuminosity} L☉</p>
                        <span class="tooltiptext" style="width: 430px;">{Number(starData.solarLuminosity).toFixed(2)} times the luminosity of our sun</span>
                        </div>
                        <div class="tooltip">
                            <p class="ml-1 hover:text-blue-500">temperature: {starData.surfaceTemperature} Kelvin</p>
                            <span class="tooltiptext" style="width: 480px;">
                                {(starData.surfaceTemperature / 5773).toFixed(2)}
                                times the Sun's temperature
                                </span>
                        </div>

                    </div>
                    <div>
                        <div class="tooltip">
                            <p class="ml-1 hover:text-blue-500">radius: {Math.round(starData.stellarRadius / 1000).toLocaleString('de-DE')} km</p>
                            <span class="tooltiptext" style="width: 480px;">
                                {((starData.stellarRadius / 696340)/1000).toFixed(2)}
                                times the Sun's radius
                            </span>
                        </div>

                        <div class="ml-1 tooltip hover:text-blue-500">
                            density: {starData.stellarDensity.toExponential(2)} g/cm³
                            <span class="tooltiptext" style="width: 480px;">{(starData.stellarDensity / 1.408).toFixed(2)}
                                times the Sun's density</span>
                        </div>
                        <div class="tooltip">
                        <p class="ml-1 mb-2 hover:text-blue-500">volume: {Number(starData.stellarVolume).toExponential(2)} m³</p>
                            <span class="tooltiptext" style="width: 480px;">{(starData.stellarVolume / 1.41e27).toFixed(2)}
                                times the Sun's volume</span>
                        </div>
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

