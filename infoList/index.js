let list = document.querySelectorAll("li");

let mouseoverFn =(event)=>{
    event.target.className = "list-item"
}
let clickFn = (item,index)=>{
    console.log(index)
    if (index === 0){
        item.style.textDecoration ="line-through";
    } else if (list[index-1].style.textDecoration && index >0){
        item.style.textDecoration ="line-through";
    }
}

let fnMouseEvents= () =>{
    list.forEach((item,index) => {
        item.addEventListener("mouseover",mouseoverFn);
        item.addEventListener("click",clickFn.bind(null,item,index));
        console.log(index)
    })
}

fnMouseEvents()



