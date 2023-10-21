function toggleMenu() {
    var mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.style.left === "0px") {
        mobileMenu.style.left = "-100%";
    } else {
        mobileMenu.style.left = "0px";
    }
}