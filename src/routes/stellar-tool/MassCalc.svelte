<script>
    let amountMass = "";
    function editText() {
        if (amountMass === "Input mass (kg)") {
            amountMass = "";
        }
    }
</script>


<div class="flex justify-left ml-20 mt-7">
    <div class="border border-gray-600 h-7 text-center">
        <input
                type="text"
                placeholder="Input mass (kg)"
                value={amountMass}
                on:focus={editText()}
        />
    </div>
</div>