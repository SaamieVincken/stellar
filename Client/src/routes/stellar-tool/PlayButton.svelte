<!-- PlayButton.svelte -->
<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch('click');
    }
</script>

<button on:click={handleClick} class="play-button">
    <svg viewBox="0 0 24 24" class="play-icon">
        <path d="M8 5v14l11-7z"></path>
    </svg>
</button>

<style>
    .play-button {
        background-color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s, box-shadow 0.3s;
    }

    .play-button:hover {
        background-color: #f0f0f0; /* Slightly darker shade for hover effect */
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    }

    .play-icon {
        fill: black;
        width: 24px;
        height: 24px;
    }
</style>