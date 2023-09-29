<div class="fixed flex items-center justify-center w-full z-10">
    <div class="mt-72 w-1/2">
        <input type="range" value="50" class="h-6 bg-black rounded-lg appearance-none cursor-pointer custom-slider mx-auto w-full">
    </div>
</div>


<style>
    /* Webkit-based browsers (Chrome) */
    .custom-slider::-webkit-slider-thumb {
        background-image: linear-gradient(to right, blue, purple); /* Use linear gradient with desired colors */
        border: 2px solid purple;
    }

    /* Firefox */
    .custom-slider::-moz-range-thumb {
        background-image: linear-gradient(to right, blue, purple); /* Use linear gradient with desired colors */
        border: 2px solid purple;
    }
</style>
