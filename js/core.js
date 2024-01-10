function onLoad() {
    var hamburger = document.getElementById("mobile-hamburger-btn");
    var nav = document.getElementById("main-nav");
    var shown = false;

    hamburger.addEventListener("click", function(e) {
        nav.style.left = "0";
        shown = true;
        nav.children[0].children[0].focus();
    });

    nav.addEventListener("click", function(e) {
        nav.style.left = "-100%";
        shown = false;
    });

    for (var child of nav.children) {
        console.log(child.children[0]);
        child.children[0].addEventListener("focus", function(e) {
            console.log(e.target);
            if (!shown) {
                hamburger.focus();
            }
        });
    }
}


document.addEventListener("DOMContentLoaded", onLoad);