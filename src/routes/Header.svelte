<script>
	import { page } from '$app/stores';
	import "../app.css";
	import download from '$lib/images/download.png';
</script>

<header class="header bg-gray-300 h-11 flex justify-between items-center">
	<nav>
		<div class="flex mx-2">
			<ul class="flex h-7">
				<li class:active={$page.url.pathname === '/'} class="mr-3 bg-gray-400 w-36 text-center">
					<a href="/">Stellar tool</a>
				</li>
				<li class:active={$page.url.pathname === '/database'} class="mr-3 bg-gray-400 w-36 text-center">
					<a href="/about">Star database</a>
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
