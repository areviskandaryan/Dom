
let btn = document.querySelector(".btn");
let p = document.createElement("p");

let showCurrentTime=()=>{
        let div = document.querySelector(".container")
        p.innerHTML= "";
        p.className = "timeBox";
        let currentDate = new Date();
        p.textContent= currentDate.toString().slice(4,25);
        div.append(p);
}

btn.addEventListener("click",showCurrentTime)





