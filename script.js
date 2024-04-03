const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
let xo = document.querySelector("#xo");
xo.addEventListener("mouseenter",()=>{
    xo.classList.remove("xo");
xo.classList.add("xo_hover");
})
xo.addEventListener("mouseleave",()=>{
    xo.classList.add("xo");
xo.classList.remove("xo_hover");
})