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



/*tab section script*/
let tabliA = document.querySelectorAll(".tab-li>a")
let boardSection = document.querySelectorAll(".board-section");
let onContent = "";
console.log(tabliA)
console.log(boardSection)

tabClick();
function tabClick(){
    for(let i=0; i<tabliA.length; i++){
        tabliA[i].addEventListener("click",function(e){
            //alert("dd")
            e.preventDefault();
            for(let j=0; j<tabliA.length;j++){
                tabliA[j].classList.remove("on");
                boardSection[j].style.display = "none"
            }
            tabliA[i].classList.add("on")
            onContent = this.getAttribute("href");
            //console.log(onContent)
            document.querySelector(onContent).style.display = 'block';
        })//click event end
    }
}//function end

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