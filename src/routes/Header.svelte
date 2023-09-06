<script>
	import { page } from '$app/stores';
	import "../app.css";
	import download from '$lib/images/download.png';
</script>

<header class="header bg-gray-400 h-11 flex justify-between items-center mx-10">
	<nav>
		<div class="justify content-between">
			<ul>
				<li class:active={$page.url.pathname === '/'}><a href="/">Stellar tool</a></li>
				<li class:active={$page.url.pathname === '/about'}><a href="/about">Star database</a></li>
			</ul>
		</div>
	</nav>
	<div>
		<a href="https://git.fhict.nl/I503004">
			<img src={download} alt="Github" class="w-10 h-10 rounded-full" />
		</a>
	</div>
</header>
