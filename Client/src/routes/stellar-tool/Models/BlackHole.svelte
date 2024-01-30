<script>
    import { onMount } from 'svelte';
    import { initializeBlackHole } from "$lib/shared/Models/BlackHoleModel.js";
    import {disposeAllModels} from "$lib/shared/Models/DisposeAll.js";

    onMount(async () => {
        await disposeAllModels();
        initializeBlackHole();
    });
</script>

<style>
</style>

<div id="renderer-container"></div>
