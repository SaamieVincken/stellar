<script>
    import { onMount, onDestroy } from 'svelte';
    import {initializeNebula} from "$lib/shared/Models/NebulaModel.js";
    import {disposeAllModels} from "$lib/shared/Models/DisposeAll.js";

    onMount(async () => {
        await disposeAllModels();
        initializeNebula();
    });
</script>

<style>
    #renderer-container{
    }
</style>

<div id="renderer-container"></div>
