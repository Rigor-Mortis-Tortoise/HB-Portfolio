document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".zoomable");
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");

    // Only add event listeners if the modal exists on the current page
    if (modal && modalImg) {
        images.forEach(function(img) {
            img.addEventListener("click", function() {
                modal.style.display = "block";
                modalImg.src = this.src;
            });
        });

        // Close modal when the close button is clicked
        document.querySelector(".close").addEventListener("click", function() {
            modal.style.display = "none";
        });

        // Close modal when clicking outside of the image
        modal.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});
