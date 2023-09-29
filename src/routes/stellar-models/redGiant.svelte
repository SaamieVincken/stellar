<script>
    import { onMount } from 'svelte';
    import { initializeRedGiant } from './redGiant'; // Update the path as needed

    onMount(() => {
        initializeRedGiant();
    });
</script>

<div id="renderer-container" class="mt-40"></div>
