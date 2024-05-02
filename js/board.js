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


/*mobile header scroll */
let mobileHeaderSectionTop = document.querySelector(".mobile-header-section").offsetTop;
let mobileHeaderSection = document.querySelector(".mobile-header-section")


window.addEventListener("scroll",function(){
  let scrollY = window.scrollY;
  //console.log(scrollY);
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

//paging script
let pagingLi = document.querySelectorAll(".paging-li")
//console.log(pagingLi)

paging()
function paging(){
    for(let i=0; i<pagingLi.length; i++){
        pagingLi[i].addEventListener("click",function(){
            //alert("누름");
            for(j=0; j<pagingLi.length; j++){
                pagingLi[j].classList.remove("on");//클릭한 페이지 이외에는 클레스 on을 제거
            }
            pagingLi[i].classList.add("on");
        }) //i for end
    }
}

//scroll src