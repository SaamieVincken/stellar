<script>
	import sun from '$lib/images/sun.png';
	import "../app.css";
	let amountMass = ""; // Initialize the variable to store the input value

	function handleInputFocus() {
		// Clear the placeholder text when the input is focused
		if (amountMass === "Input mass (kg)") {
			amountMass = "";
		}
	}
</script>

<svelte:head>
	<title>Stellar tool</title>
	<meta name="stellar tool" content="Tool to view stellar evolution." />
</svelte:head>

<section>
	<div class="flex justify-left mx-20 my-10">
		<div class="border border-gray-600">
			<input
					type="text"
					placeholder="Input mass (kg)"
					value={amountMass}
					on:focus={handleInputFocus}
			/>
		</div>

	</div>
	<div class="flex justify-center content-center">
		<img src={sun} alt="Sun Image" class="sunImage" />
	</div>
</section>

<style lang="postcss">
	.sunImage {
		width: 300px;
		height: 300px;
	}
</style>

