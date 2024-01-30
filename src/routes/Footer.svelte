<script>
    import { onMount, onDestroy } from "svelte";
    import { page } from "$app/stores";

    let stringDate = "";

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

    updateDateTime();

    const interval = setInterval(updateDateTime, 1000);

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
    });

    onDestroy(() => {
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
        z-index: 1000;
        color: white;
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 40px;
        background-color: #121212;
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
            <li class:active={$page.url.pathname === './stellar-tool'}
                class="mt-1 mr-2 w-36 text-center text-white"
                style="background-color: #3F3F3F;">
                <a href="./stellar-tool">stellar tool</a>
            </li>

            <li
                class:active={$page.url.pathname === "/stellar-models"}
                class="mt-1 mr-2  w-36 text-center text-white"
                style="background-color: #3F3F3F;">

                <a href="./stellar-models">data set</a>
            </li>
        </ul>
    </div>
</footer>
