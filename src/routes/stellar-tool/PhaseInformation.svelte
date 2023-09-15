<script>
    import TimeBar from "./TimeBar.svelte";
    import {BlackHole} from "$lib/shared/StellarObjects";
    export let phase;
</script>


<div class="flex justify-center content-center h-auto -mt-20">
    <img src={phase.img} alt="Stellar Image" class="w-1/4 h-1/4" />
</div>

<TimeBar/>

<div class="flex justify-center content-center mt-2">
    <div class="w-7/12 text-white" style="background-color: #2d3340;">
        {#if phase.phase !== undefined}
        {#if phase instanceof BlackHole}
            <h2 class="font-bold">{phase.phase}</h2>
            <p>{phase.mass}</p>
        {:else}
            <h2 class="font-bold">{phase.phase}</h2>
            <p>{phase.luminosity}</p>
            <p>{phase.solarMass}</p>
            <p>{phase.surfaceTemperature}</p>
            <p>{phase.phaseDuration}</p>
            <p>{phase.diameter}</p>
        {/if}
        {/if}
    </div>
</div>


