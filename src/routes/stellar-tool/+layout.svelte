<script>
	import "../../app.css";
	import image from '$lib/images/starrySky.jpg'
	import Footer from "../Footer.svelte";
</script>

<div class="app min-h-screen relative">
	<div class="bg-cover bg-no-repeat bg-center h-full z-0">
		<img src="{image}" alt="background image" class="object-cover w-full h-full" />
	</div>
	<main class="absolute inset-0 z-10 overflow-y-auto">
		<slot />
	</main>
	<Footer class="z-20" />
</div>

