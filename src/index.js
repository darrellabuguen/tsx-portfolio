window.addEventListener("scroll", () => {
    var back_btn = document.querySelector(".back-top");
    if (window.scrollY > 300) {
        back_btn.style.display = "flex";
    }
    else {
        back_btn.style.display = "none";
    }
})