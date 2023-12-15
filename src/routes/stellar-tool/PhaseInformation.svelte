<script>
    import TimeBar from "./TimeBar.svelte";
    //import { BlackHole } from "$lib/shared/Phase/StellarObjects.js";
    import StarModel from "../stellar-models/StarModel.svelte";
    import { onMount, onDestroy } from 'svelte';
    import * as THREE from "three";
    import {initializeStar} from "$lib/shared/StarModel.js";
    import { star } from '$lib/shared/StarStore.js';

    let phase = "Unknown";
    let starData = {};

    const unsubscribe = star.subscribe(value => {
        starData = value;
    });

    onMount(() => {
        initializeStar(new THREE.Color(0xD8BFD8), 1.6, 1);
    });

    onDestroy(() => {
        unsubscribe();
    });
</script>

<div class="fixed flex items-center justify-center w-full">
    <div class="-mt-52">
            <StarModel/>
    </div>
</div>

<div>
    <TimeBar/>
</div>

<div class="fixed flex items-center justify-center w-full">
    <div class="mt-80 w-1/2 text-white">
        {#if phase.phase !== undefined}
            <!--{#if isBlackHole}-->
            <!--    <h2 class="font-bold">{phase.phase}</h2>-->
            <!--    <p>{phase.mass}</p>-->
            <!--{:else}-->
            <!--    <h2 class="font-bold">{phase.phase}</h2>-->
            <!--    <p>{phase.luminosity}</p>-->
            <!--    <p>{phase.mass}</p>-->
            <!--    <p>{phase.temperature}</p>-->
            <!--    <p>{phase.phaseDuration}</p>-->
            <!--    <p>{phase.diameter}</p>-->
            <!--{/if}-->
        {/if}
    </div>
</div>
