<script>
    import { onMount, onDestroy } from "svelte";
    import { page } from "$app/stores";

    let stringDate = "";

    // Function to update the time
    function updateDateTime() {
        const Today = new Date();
        stringDate = Today.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    }

    // Call the function initially
    updateDateTime();

    // Update the time every second (you can adjust the interval)
    const interval = setInterval(updateDateTime, 1000);

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
    });

    onDestroy(() => {
        // Clear the interval when the component is destroyed to prevent memory leaks
        clearInterval(interval);
    });

    let isScrolled = false;

    function handleScroll() {
        const scrollY = window.scrollY || window.pageYOffset;
        if (scrollY > 100 && !isScrolled) {
            isScrolled = true;
        } else if (scrollY <= 100 && isScrolled) {
            isScrolled = false;
        }
    }
</script>

<style>
    #footer {
        color: white;
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 9999;
        height: 30px;
        background-color: #2d3340;
        transition: height 0.4s ease;
    }

    #footer.expanded {
        height: 100vh;
    }
</style>

<footer
        class="sticky h-10 text-white"
        id="footer"
        class:expanded={isScrolled}>
    <div class="items-center justify-center mt-1 p-1">
        <p>{stringDate}</p>
    </div>
    <div class="flex justify-end items-center">
        <ul class="flex h-7 -mt-8">
            <li
                class:active={$page.url.pathname === "./stellar-tool"}
                class="mr-2 w-36 text-center text-white"
                style="background-color: #586278;">
                <a href="./stellar-tool">Stellar tool</a>
            </li>
            <li
                class:active={$page.url.pathname === "/stellar-models"}
                class="mr-2 bg-gray-400 w-36 text-center text-white"
                style="background-color: #586278;">

                <a href="./stellar-models">Model test</a>
            </li>
        </ul>
    </div>
</footer>
