<script>
    import "../app.css";
    const Today = new Date();
    const stringDate = Today.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
</script>

<footer class="bg-gray-400 h-10 ">
    <div class="p-1 flex justify-center content-center">
        <p>{stringDate}</p>
    </div>
</footer>