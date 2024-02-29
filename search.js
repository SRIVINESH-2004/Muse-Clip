document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".search input");
    const songs = document.querySelectorAll(".scroll-music img");

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.trim().toLowerCase();

        songs.forEach(function(song) {
            const songName = song.dataset.songname.toLowerCase();
            if (songName.includes(searchTerm)) {
                song.style.display = "inline-flex";
            } else {
                song.style.display = "none";
            }
        });
    });
});
