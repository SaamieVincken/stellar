<div class="fixed flex items-center justify-center w-full h-screen">
    <div class="-mt-20 w-1/2"> <!-- Add mt-24 for vertical margin and w-3/4 for width -->
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
