<script>
    import { onMount, onDestroy } from 'svelte';
    import {initializeSupernova} from "$lib/shared/Models/SupernovaModel.js";
    import {disposeAllModels} from "$lib/shared/Models/DisposeAll.js";

    onMount(async () => {
        await disposeAllModels();
        initializeSupernova();
    });
</script>


<div id="renderer-container"></div>
<br/>
<br/>
