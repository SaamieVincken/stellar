<script>
    import { onMount } from 'svelte';

    onMount(() => {
        const redirectToStellarTool = () => {
            window.location.href = './stellar-tool';
        };

        const delay = 0;

        setTimeout(redirectToStellarTool, delay);
    });
</script>
