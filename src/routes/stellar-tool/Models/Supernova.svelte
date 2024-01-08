<script>
    import { onMount, onDestroy } from 'svelte';
    import {initializeSupernova} from "$lib/shared/Models/SupernovaModel.js";

    onMount(() => {
        initializeSupernova();
    });
</script>

<style>
    #renderer-container {
    }
</style>

<div id="renderer-container"></div>
