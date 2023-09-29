<style>
    /* Define the common styles for the input boxes */
    .input-style {
        border: 2px solid #e8e8e8;
        padding: 5px;
        border-radius: 10px;
        background-color: #212121;
        font-size: small;
        font-weight: bold;
        text-align: center;
        color: #e8e8e8;
        width: 150px; /* Adjust the width as needed */
        margin: 5px; /* Adjust the margin as needed */
    }

    .input-style:focus {
        outline-color: white;
        background-color: #212121;
        color: #e8e8e8;
        box-shadow: 5px 5px #888888;
    }
</style>

<script>
    import { GetPhases } from '$lib/shared/Phase/PhaseCalc';
    import { savedPhase } from "./phaseStore.js";

    let amountMass = "";
    let amountLuminosity = "";
    let amountTemperature = "";

    function editText(field, fieldValue) {
        if (fieldValue === `Input ${field} (kg)`) {
            fieldValue = "";
            if (field === "mass") {
                amountMass = fieldValue;
            } else if (field === "luminosity") {
                amountLuminosity = fieldValue;
            } else if (field === "temperature") {
                amountTemperature = fieldValue;
            }
        }
        savedPhase.set(calculateStarProperties(amountMass, amountLuminosity, amountTemperature));
    }

    function calculateStarProperties(mass, luminosity, temperature) {
        if (mass && luminosity && temperature) {
            const parsedMass = parseFloat(mass);
            const parsedLuminosity = parseFloat(luminosity);
            const parsedTemperature = parseFloat(temperature);
            return GetPhases(parsedLuminosity, parsedMass, parsedTemperature);
        } else {
            return "Unknown";
        }
    }
</script>

<div class="flex flex-col ml-20 mt-7 text-black">
    <input
            class="input-style"
            type="text"
            placeholder="Input mass (M☉)"
            bind:value={amountMass}
            on:input={(e) => {
            editText("mass", e.target.value);
        }}
            title="1 solar mass = 1.9891 × 10^30 kilograms"
    />

    <input
            class="input-style"
            type="text"
            placeholder="Input luminosity (W)"
            bind:value={amountLuminosity}
            on:input={(e) => {
            editText("luminosity", e.target.value);
        }}
    />

    <input
            class="input-style"
            type="text"
            placeholder="Input temperature (K)"
            bind:value={amountTemperature}
            on:input={(e) => {
            editText("temperature", e.target.value);
        }}
    />
</div>


