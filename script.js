
//counter

var DeadLIne = new Date("june 29, 2025 8:30:25").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var t = DeadLIne - now;

    console.log(t);

    var days = Math.floor(t/ (1000 * 60 * 60 * 24));
    var hours = Math.floor((t% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t% (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t% (1000 * 60)) / 1000);

    document.getElementById("counter").innerHTML = days + "D - " + hours + "H - "
        + minutes + "M - " + seconds + "S ";

    if (t < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "EXPIRED";
    }
}, 1000);

// Navbar ScrollBar

let navBar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    navBar.classList.toggle("scroll", window.scrollY > navBar.offsetHeight);
});





