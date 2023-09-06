<script>
	import Header from './Header.svelte';
	import "../app.css";
	const Today = new Date();
	const stringDate = Today.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<div class="flex content-center">
			<p>{stringDate}</p>
		</div>
	</footer>
</div>


<style>
	@import 'tailwindcss/base';
	@import 'tailwindcss/components';
	@import 'tailwindcss/utilities';
</style>
