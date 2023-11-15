<style>
    .input-style {
        border: 2px solid #e8e8e8;
        padding: 5px;
        font-size: small;
        text-align: center;
        color: #5d5d6a;
        width: 150px;
        margin: 5px;
        caret-color: black;
    }

    .input-style:focus {
        outline: none;
        background-color: #eff0f1;
        color: #5d5d6a;
    }

</style>

<script>
    import {setStar} from "./SetStar.js";
    let _mass = '';
    let _luminosity = ''
    let _temperature = ''

    function editText(field, fieldValue) {
        if (field === "mass") {
            _mass = fieldValue;
        } else if (field === "luminosity") {
            _luminosity = fieldValue;
        } else if (field === "temperature") {
            _temperature = fieldValue;
        }
    }
    setStar(_mass, _luminosity, _temperature);
</script>

<div class="flex flex-col ml-20 mt-7 bg-white">
    <input
        class="input-style"
        type="text"
        placeholder={"Input mass (M☉)"}
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


