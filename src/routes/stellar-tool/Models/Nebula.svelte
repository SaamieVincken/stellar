<script>
    import { onMount, onDestroy } from 'svelte';
    import {initializeNebula} from "$lib/shared/Models/NebulaModel.js";

    onMount(() => {
        initializeNebula();
    });
</script>

<style>
    #renderer-container{
    }
</style>

<div id="renderer-container"></div>
