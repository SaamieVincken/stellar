<script>
	import { page } from '$app/stores';
	import "../app.css";
	import download from '$lib/images/download.png';
</script>

<header class="header h-11 flex justify-between items-center" style="background-color: #2d3340;">
	<nav>
		<div class="flex mx-2">
			<ul class="flex h-7">
				<li class:active={$page.url.pathname === '/'} class="mr-3 w-36 text-center text-white" style="background-color: #586278;">
					<a href="/">Stellar tool</a>
				</li>
				<li class:active={$page.url.pathname === '/redGiant'} class="mr-3 bg-gray-400 w-36 text-center text-white" style="background-color: #586278;">
					<a href="stellar-models/starModel.svelte">Star database</a>
				</li>
			</ul>
		</div>
	</nav>
	<div class="mr-5">
		<a href="https://git.fhict.nl/I503004">
			<img src={download} alt="Github" class="w-8 h-8 rounded-full" />
		</a>
	</div>
</header>
