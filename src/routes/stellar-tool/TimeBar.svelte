<div class="fixed flex items-center justify-center w-full z-10">
    <div class="mt-72 w-1/2">
        <input type="range" value="50" class="h-6 rounded-lg appearance-none cursor-pointer custom-slider mx-auto w-full" style="margin-top: 40px;">
    </div>
</div>


<style>
    .custom-slider {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 12px;
        border-radius: 5px;
        background: #121212;
        outline: none;
        opacity: 0.7;
        transition: opacity .2s;
        cursor: pointer;
    }

    .custom-slider:hover {
        opacity: 1;
    }

    .custom-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #000d21;
        cursor: pointer;
        border: 2px solid #000d21;
    }

    .custom-slider::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #1f3e6e;
        cursor: pointer;
        border: 2px solid #000d21;
    }

    .custom-slider::-moz-range-thumb:active {
        background-color: #1f3e6e;
    }
</style>
