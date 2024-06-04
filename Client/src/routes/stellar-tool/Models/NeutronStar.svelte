<script>
    import { onMount } from 'svelte';
    import {initializeNeutronStar, exportGLTF} from "$lib/shared/Models/NeutronStar.js";
    import {disposeAllModels} from "$lib/shared/Models/DisposeAll.js";

    onMount(async () => {
        await disposeAllModels();
        initializeNeutronStar();
    });

    function exportGLTFnow(){
        exportGLTF();
        console.log("SUCCESSFUL EXPORT");
    }
</script>
<div id="renderer-container"></div>

<!--<button class="text-white bg-yellow-100 content-start ml-96 mt-40 z-1000" onclick="exportGLTFnow()">Export Scene</button>-->


