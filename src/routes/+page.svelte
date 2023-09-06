<script>
	import sun from '$lib/images/sun.png';
	import "../app.css";
	import TimeBar from "./stellar-tool/TimeBar.svelte";
	import PhaseInformation from "./stellar-tool/PhaseInformation.svelte";
	import MassCalc from "./stellar-tool/MassCalc.svelte";
</script>

<svelte:head>
	<title>Stellar tool</title>
	<meta name="stellar tool" content="Tool to view stellar evolution." />
</svelte:head>

<MassCalc/>
<!----Image --->
	<div class="flex justify-center content-center ">
		<img src={sun} alt="Sun Image" class="sunImage w-1/4 h-1/4" />
	</div>
	<br>

<TimeBar/>
<PhaseInformation/>





