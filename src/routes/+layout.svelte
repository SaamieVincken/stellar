<script xmlns="http://www.w3.org/1999/html">
	import Header from './Header.svelte';

	import "../app.css";
	import Footer from "./Footer.svelte";
</script>
<div class="app flex flex-col h-screen">
	<Header />
	<main class="h-screen">
		<slot />
	</main>
	<Footer/>
</div>
<style>
	main{
		background-image: url("$lib/images/starrySky.jpg");
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
