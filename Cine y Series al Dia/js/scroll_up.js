document.addEventListener("DOMContentLoaded", function () {
    const scrollToTop = document.getElementById("scrollToTop");

    scrollToTop.addEventListener("click", function () {
        document.querySelector("header").scrollIntoView({ behavior: "smooth" });
    });
    });