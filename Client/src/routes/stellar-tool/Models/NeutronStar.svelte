<script>
    import { onMount, onDestroy } from 'svelte';
    import {initializeNeutronStar} from "$lib/shared/Models/NeutronStar.js";
    import {disposeAllModels} from "$lib/shared/Models/DisposeAll.js";

    onMount(async () => {
        await disposeAllModels();
        initializeNeutronStar();
    });
</script>

<div id="renderer-container"></div>
