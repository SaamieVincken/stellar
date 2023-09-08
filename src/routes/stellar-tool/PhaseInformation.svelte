<script>
    import sun from "$lib/images/sun.png";
    import TimeBar from "./TimeBar.svelte";
    export let phase;
</script>

<div class="flex justify-center content-center h-auto -mt-20">
    <img src={sun} alt="Sun Image" class="sunImage w-1/4 h-1/4" />
</div>

<TimeBar/>

<div class="flex justify-center content-center mt-2">
    <div class="w-7/12 bg-gray-300">
        <h2 class="ml-2">Phase of the star: {phase} </h2>
        <p class="ml-2">Here comes more detailed information of the star</p>
    </div>
</div>

