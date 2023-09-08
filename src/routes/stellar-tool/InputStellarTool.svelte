<script>
    import { phaseCalc } from '$lib/shared/calculations.ts';
    import PhaseInformation from './PhaseInformation.svelte';
    import TimeBar from "./TimeBar.svelte";

    let amountMass = "";
    let amountLuminosity = "";
    let amountTemperature = "";
    let phase = "Unknown";

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
        phase = calculateStarProperties(amountMass, amountLuminosity, amountTemperature);
    }

    function calculateStarProperties(mass, luminosity, temperature) {
        if (mass && luminosity && temperature) {
            const parsedMass = parseFloat(mass);
            const parsedLuminosity = parseFloat(luminosity);
            const parsedTemperature = parseFloat(temperature);
            return phaseCalc(parsedLuminosity, parsedMass, parsedTemperature);
        } else {
            return "Unknown";
        }
    }
</script>

<div class="flex flex-col justify-left ml-20 mt-7 text-black">
    <input
            class="border border-gray-600 w-1/6 m-1 h-7"
            type="text"
            placeholder="Input mass (M☉)"
            bind:value={amountMass}
            on:input={(e) => {
            editText("mass", e.target.value);
        }}
            title="1 solar mass = 1.9891 × 10^30 kilograms"
    />

    <input
            class="border border-gray-600 w-1/6 m-1 h-7"
            type="text"
            placeholder="Input luminosity (W)"
            bind:value={amountLuminosity}
            on:input={(e) => {
            editText("luminosity", e.target.value);
        }}
    />

    <input
            class="border border-gray-600 w-1/6 m-1 h-7"
            type="text"
            placeholder="Input temperature (K)"
            bind:value={amountTemperature}
            on:input={(e) => {
            editText("temperature", e.target.value);
        }}
    />
</div>


<div class="">
    <PhaseInformation {phase} />
</div>