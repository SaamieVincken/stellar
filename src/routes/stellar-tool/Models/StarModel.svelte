<script>
    import { onMount} from 'svelte';
    import { initializeStar, updateStar } from "$lib/shared/Models/StarModel.js";
    import { star } from '$lib/shared/StarStore.js';

    let starData = {};
    $: if ($star) {
        console.log("Reactive $star update:", $star);
        starData = $star;
    }

    onMount(() => {
        initializeStar();
        const unsubscribe = star.subscribe(value => {
            if(value) {
                updateStar(value.hslColor, 1.6, 1);
            }
        });

        if(starData) {
            updateStar(starData.hslColor, 1.6, 1);
        }
        else{
            initializeStar();
        }


    });
</script>

<style>
    #renderer-container {
        width: 600px;
        height: 600px;
    }
</style>

<div id="renderer-container"></div>
