<script>
    import TimeBar from "./TimeBar.svelte";
    import { BlackHole } from "$lib/shared/StellarObjects";
    import { fly } from 'svelte/transition';
    import {typewriter} from './transitionLetters.js'
    export let phase;
</script>

<div class="flex justify-center content-center h-auto -mt-20">
    {#if phase.img !== undefined}
        <img src={phase.img} alt="Stellar Image" class="w-1/4 h-1/4" />
    {:else}
        <img src="src/lib/images/StellarNebula.png" alt="StellarNebula" class="w-1/4 h-1/4">
    {/if}
</div>
<br>
<br>

<TimeBar/>

<div class="flex justify-center content-center mt-2">
    <div class="w-7/12 text-white">
        {#if phase.phase !== undefined}

            <!---<div transition:fly={{ y: 200, duration: 2000 }}>--->
            {#if phase instanceof BlackHole}
                <h2 class="font-bold">{phase.phase}</h2>
                <p>{phase.mass}</p>
            {:else}
                <h2 class="font-bold">{phase.phase}</h2>
                <p  transition:typewriter>{phase.luminosity}</p>
                <p>{phase.solarMass}</p>
                <p>{phase.surfaceTemperature}</p>
                <p>{phase.phaseDuration}</p>
                <p>{phase.diameter}</p>
            {/if}

        {/if}
    </div>
</div>



