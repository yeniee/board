
/*ham nav script */

let hamNav = document.querySelector(".ham-nav");
let hamNavSection = document.querySelector(".ham-nav-section")
let closeBtn = document.querySelector(".close-btn");

hamNav.addEventListener("click",function(){
    hamNavSection.classList.add("on")
})

closeBtn.addEventListener("click",function(){
    hamNavSection.classList.remove("on")
})