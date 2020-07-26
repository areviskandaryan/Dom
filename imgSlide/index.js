let next = document.querySelector(".next")
let prev = document.querySelector(".prev")
let images= document.querySelectorAll(".image-item")
console.log(images)
let n = 0;
function nextPrevSlides(n) {
    images.forEach(elem=> {
        elem.classList.remove("active")
        elem.classList.add("hidden");

    })
  images[n].classList.replace("hidden","active");

}

nextPrevSlides(n)

next.addEventListener("click",next=()=>{
    if ( n === images.length-1){
       n =  0;
        nextPrevSlides(0)
    } else {
        nextPrevSlides(n+=1)
    }
})


prev.addEventListener("click",prev=()=>{
    if ( n == 0){
        n = 2;
        nextPrevSlides(2)
    } else {
        nextPrevSlides(n-=1)
    }
})


let id = setInterval(next, 1500);

setTimeout(()=>{
    clearInterval(id)
},7000)













