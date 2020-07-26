
let inputText = document.querySelector(".input-text");
let body = document.querySelector("body")
let text = document.createElement("p");
inputText.addEventListener("input",()=>{
    text.textContent = inputText.value;
})
body.append(text)

