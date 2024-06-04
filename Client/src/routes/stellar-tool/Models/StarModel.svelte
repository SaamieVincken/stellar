<script>
    import { onMount} from 'svelte';
    import { initializeStar, updateStar } from "$lib/shared/Models/StarModel.js";
    import { star } from '$lib/shared/StarStore.js';
    import {disposeStar} from "$lib/shared/Models/StarModel.js";
    import {disposeAllModels} from "$lib/shared/Models/DisposeAll.js";

    let starData = {};
    let containerStyle = '';
    $: if ($star) {
        starData = $star;
        updateStar(starData.hslColor, 1.6, 1, starData.phase);
        updateContainerStyle(starData.phase);
    } else {
        initializeStar();
    }


    onMount(async () => {
        await disposeAllModels();
        initializeStar();
        const unsubscribe = star.subscribe(value => {
            if (value) {
                updateStar(value.hslColor, 1.6, 1, value.phase);
            }
        });

        if (starData) {
            updateStar(starData.hslColor, 1.6, 1, starData.phase);

        } else {
            initializeStar();
        }
    });
    function updateContainerStyle(phase) {
        let width, height, marginTop;
        switch (phase) {
            case 'Red Dwarf':
                width = '400px';
                height = '400px';
                marginTop = '70px';
                break;
            case 'White Dwarf':
                width = '400px';
                height = '400px';
                marginTop = '70px';
                break;
            case 'Red Giant':
                width = '700px';
                height = '700px';
                marginTop = '-60px';
                break;
            case 'Blue Giant':
                width = '700px';
                height = '700px';
                marginTop = '-60px';
                break;
            default:
                width = '600px';
                height = '600px';
                marginTop = '90px';
        }
        containerStyle = `width: ${width}; height: ${height}; margin-top: ${marginTop};`;
    }
</script>

<style>
</style>

<div id="renderer-container" style={containerStyle}></div>

