<script>
    import { onMount } from 'svelte';
    import { initializeBlackHole } from "$lib/shared/Models/BlackHoleModel.js";
    import {disposeStar} from "$lib/shared/Models/StarModel.js";

    onMount(() => {
        initializeBlackHole();
    });
</script>

<style>
    #renderer-container{

    }
</style>

<div id="renderer-container"></div>
