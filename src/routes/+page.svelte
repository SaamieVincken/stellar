<script>
    import { onMount } from 'svelte';

    onMount(() => {
        // Redirect to the Stellar tool page after a delay (in milliseconds)
        const redirectToStellarTool = () => {
            window.location.href = './stellar-tool'; // Replace with the actual URL or route
        };

        // Adjust the delay time (e.g., 2000 milliseconds = 2 seconds)
        const delay = 0;

        // Use setTimeout to delay the redirection
        setTimeout(redirectToStellarTool, delay);
    });
</script>
