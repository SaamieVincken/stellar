<style>
    .input-stellar-tool {
        position: relative;
        z-index: 1000;
    }

    .input-style {
        border: 1px solid #000d21;
        padding: 5px;
        font-size: small;
        text-align: center;
        width: 150px;
        margin: 5px;
        caret-color: black;
        background-color: #121212;
        color: white;
    }

    .input-style:focus {
        outline: none;
        background-color: #3F3F3F;
        color: white;
    }
</style>

<script>
    import {setStar} from "$lib/shared/SetStar.js";

    let _mass = '';
    let _luminosity = '';
    let _temperature = '';

    function editText(field, fieldValue) {
        if (field === "mass") {
            _mass = fieldValue;
        } else if (field === "luminosity") {
            _luminosity = fieldValue;
        } else if (field === "temperature") {
            _temperature = fieldValue;
        }
        if(_mass && _luminosity && _temperature){
            setStar(_mass, _luminosity, _temperature);
        }
    }
</script>

<div class="flex flex-col ml-20 mt-7 input-stellar-tool">
    <input
        class="input-style"
        type="text"
        placeholder="Input mass (M☉)"
        bind:value={_mass}
        on:input={(e) => {
            editText("mass", e.target.value);
        }}
        title="1 solar mass = 1.9891 × 10^30 kilograms"
    />

    <input
        class="input-style"
        type="text"
        placeholder="Input luminosity (L☉)"
        bind:value={_luminosity}
        on:input={(e) => {
            editText("luminosity", e.target.value);
        }}
        title="1 solar luminosity = 3.828 × 10e26 watts"
    />

    <input
        class="input-style"
        type="text"
        placeholder="Input temperature (K)"
        bind:value={_temperature}
        on:input={(e) => {
            editText("temperature", e.target.value);
        }}
        title="Kelvin"
    />
</div>
