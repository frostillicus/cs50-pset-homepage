// moon phase animation

var phases = document.querySelectorAll(".phases-images img");

if (phases.length > 0) {
    var phasesSlider = document.querySelector("#phases-slider");
    var phaseLen = phases.length;
    var i = 0;
    var phasesInterval;

    phasesSlider.oninput = function () {
        stopAnimation();
        startAnimation(10000 / this.value);
    };

    function startAnimation(speed) {
        phasesInterval = setInterval(function () {
            i++;
            phases[i % phaseLen].classList.add("phases-image-selected");
            phases[(i - 1) % phaseLen].classList.remove("phases-image-selected");
        }, speed);
    }

    function stopAnimation() {
        clearInterval(phasesInterval);
    }

    startAnimation(200);
}

// toggle nav menu (instead of using Bootstrap's JS + jQuery)

var navToggler = document.querySelector(".navbar-toggler");
var navMenu = document.querySelector("#navbarSupportedContent");

navToggler.addEventListener("click", toggleMenu);

function toggleMenu() {
    navToggler.classList.toggle("collapsed");
    navMenu.classList.toggle("show");
    navToggler.toggleAttribute("aria-expanded");
}
