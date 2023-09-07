<script>
    let value = "";
    let amountMass = "";
    let amountLuminosity = "";
    let amountTemperature = "";

    function editText(field, fieldValue) {
        if (fieldValue === `Input ${value} (kg)`) {
            fieldValue = "";
            if (field === "mass") {
                amountMass = fieldValue;
            }
            else if (field === "luminosity") {
                amountLuminosity = fieldValue;
            }
            else if (field === "temperature"){
                amountTemperature = fieldValue;
            }
        }
    }
</script>

<div class="flex flex-col justify-left ml-20 mt-7 text-black">
    <input
            class="border border-gray-600  w-1/6 m-1 h-7"
            type="text"
            placeholder="Input mass (kg)"
            bind:value={amountMass}
            on:focus={() => editText("mass", amountMass)}
    />
    <input
            class="border border-gray-600  w-1/6 m-1 h-7"
            type="text"
            placeholder="Input luminosity (W)"
            bind:value={amountLuminosity}
            on:focus={() => editText("luminosity", amountLuminosity)}
    />
    <input
            class="border border-gray-600  w-1/6 m-1 h-7"
            type="text"
            placeholder="Input temperature (K)"
            bind:value={amountTemperature}
            on:focus={() => editText("temperature", amountTemperature)}
    />
</div>
