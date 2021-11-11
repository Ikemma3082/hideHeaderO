const lastScrollTop = 0;
header = document.querySelector(".header-content");
window.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.top = "-5000px";
    } else {
        header.style.top = "0";
    }
})