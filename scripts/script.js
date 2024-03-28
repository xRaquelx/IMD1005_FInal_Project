const loadingText = document.querySelector(".loading-text");
const loading = document.querySelector(".loading-screen");
let load = 0;
const i = setInterval(blurring, 10);
/*
const circles = loading.children;
let active = 0;
let current = 0;
const circleTime = setInterval(loadCircles, 400);
setTimeout(() => {
    clearInterval(circleTime);
    loading.classList.add("opacity-none");
    setTimeout(() => loading.classList.add("display-none"), 400);
}, 2400);
*/
function blurring() {
    load++;
    //loadingText.style.opacity = `${(100-load)/100.0}`;
    loading.style.opacity = `${(100-load)/100.0}`;
    if(load > 99) {
        //clearInterval(i);
        //loadingText.className = "display-none";
        loading.className = "display-none";
        return;
    }
    //loadingText.innerHTML = `${load}%`;
}

function loadCircles() {
    circles[active].classList.remove("active");
    circles[current].classList.add("active");
    active = current;
    current = (current + 1) % circles.length;
    
}