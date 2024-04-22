
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

//scroll src


let mobileHeaderSectionTop = document.querySelector(".mobile-header-section").offsetTop;
let mobileHeaderSection = document.querySelector(".mobile-header-section")


window.addEventListener("scroll",function(){
  let scrollY = window.scrollY;
  console.log(scrollY);
  if(scrollY>mobileHeaderSectionTop+50){
    mobileHeaderSection.classList.add("on")
  }
  else{
    mobileHeaderSection.classList.remove("on")
  }

})

// pc scroll

let pcHeaderSectionTop = document.querySelector(".pc-header-section").offsetTop;
let pcHeaderSection = document.querySelector(".pc-header-section")

window.addEventListener("scroll",function(){
    if(scrollY>pcHeaderSectionTop+50){
        pcHeaderSection.classList.add("on")
      }
      else{
        pcHeaderSection.classList.remove("on")
      }
})//end