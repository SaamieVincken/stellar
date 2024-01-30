<script>
    import { onMount } from 'svelte';
    import {createExplosionScene} from "$lib/shared/Models/ExplodingSphereModel.js";

    onMount(async () => {
        createExplosionScene();
    });
</script>
<div id="renderer-container"></div>
