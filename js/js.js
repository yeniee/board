
/*ham nav script */

let hamNav = document.querySelector(".ham_nav");
let hamNavSection = document.querySelector(".ham_nav_section")
let closeBtn = document.querySelector(".close_btn");

hamNav.addEventListener("click",function(){
    hamNavSection.classList.add("on")
})

closeBtn.addEventListener("click",function(){
    hamNavSection.classList.remove("on")
})

//scroll src


let mobileHeaderSectionTop = document.querySelector(".mobile_header_section").offsetTop;
let mobileHeaderSection = document.querySelector(".mobile_header_section")


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

let pcHeaderSectionTop = document.querySelector(".pc_header_section").offsetTop;
let pcHeaderSection = document.querySelector(".pc_header_section")

window.addEventListener("scroll",function(){
    if(scrollY>pcHeaderSectionTop+50){
        pcHeaderSection.classList.add("on")
      }
      else{
        pcHeaderSection.classList.remove("on")
      }
})//end