document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".scroll-music img");
    images.forEach(function(image) {
        image.addEventListener("click", function() {
            var videoLink = this.getAttribute("data-videolink");
            var songName = this.getAttribute("data-songname");
            localStorage.setItem("selectedVideo", videoLink);
            localStorage.setItem("selectedSong", songName);
            window.location.href = "song1login.html";
        });
    });
});