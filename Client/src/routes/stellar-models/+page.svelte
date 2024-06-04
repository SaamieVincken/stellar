<script>
    import StarModel from "../stellar-tool/Models/StarModel.svelte";
    import { star } from '$lib/shared/StarStore.js';
    import {streamParseCSV, findClosestMatch} from "$lib/shared/KeplerDataSet/KeplerDataInteractor.js";
    import {onMount} from "svelte";

    let closestKeplerStar = {};

    onMount(async () => {
        keplerData = await streamParseCSV('src/lib/shared/KeplerDataSet/keplerstellar.csv');
        closestKeplerStar = findClosestMatch(starData, keplerData );
        console.log(closestKeplerStar);
    });

    let keplerData = {};

    let starData = {};
    $: if ($star) {
       // luminosityClassKey = getKeyByValue(LuminosityClassPercentage, starData.luminosityClass);
        starData = $star;
    }
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
</script>
<svelte:head>
    <title>Stellar tool</title>
    <meta name="stellar tool" content="Tool to view stellar evolution." />
</svelte:head>


<div class="fixed flex items-center justify-center w-full">
    <div class="text-black bg-gray-500 h-6 w-3/5 text-center mt-20">
        <p>Work in progress... NASA and Caltech database connection coming...</p>
    </div>
</div>
