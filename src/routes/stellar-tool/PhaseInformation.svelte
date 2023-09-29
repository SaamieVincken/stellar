<script>
    import TimeBar from "./TimeBar.svelte";
    import { BlackHole } from "$lib/shared/Phase/StellarObjects";
    import {savedPhase} from "./phaseStore.js";
    import ThreeCube from '../stellar-models/redGiant.svelte'
    let phase = "Unknown";

    savedPhase.subscribe((value) => {
        phase = value;
    });
</script>

<div class="fixed flex items-center justify-center w-full">
    <div class="-mt-52">
        {#if phase.img !== undefined}
            <ThreeCube/>
        {:else}
           <!--- <img src="src/lib/images/StellarNebula.png" alt="StellarNebula" class="w-1/4 h-1/4 mx-auto" style="margin-top: 20px;">-->
            <ThreeCube/>
        {/if}
    </div>
</div>

<div>
    <TimeBar/>
</div>

<div class="fixed flex items-center justify-center w-full">
    <div class="mt-80 w-1/2 text-white">
        {#if phase.phase !== undefined}
            {#if phase instanceof BlackHole}
                <h2 class="font-bold">{phase.phase}</h2>
                <p>{phase.mass}</p>
            {:else}
                <h2 class="font-bold">{phase.phase}</h2>
                <p>{phase.luminosity}</p>
                <p>{phase.mass}</p>
                <p>{phase.temperature}</p>
                <p>{phase.phaseDuration}</p>
                <p>{phase.diameter}</p>
            {/if}
        {/if}
    </div>
</div>


