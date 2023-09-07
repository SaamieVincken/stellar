<script>
    import "../app.css";
    const Today = new Date();
    const stringDate = Today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
</script>

<footer class="h-10 text-white" style="background-color: #2d3340;">
    <div class="p-1 flex justify-center content-center">
        <p>{stringDate}</p>
    </div>
</footer>