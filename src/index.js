window.addEventListener("scroll", () => {
    var back_btn = document.querySelector(".back-top");
    if (window.scrollY > 300) {
        back_btn.style.display = "flex";
    }
    else {
        back_btn.style.display = "none";
    }
})

setTimeout(() => {
    let options = {
        root: null,
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px"
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        })
    }, options);

    const hidden = document.querySelectorAll(".hidden");
    hidden.forEach((tag) => {
        observer.observe(tag);
    })
}, 1000);