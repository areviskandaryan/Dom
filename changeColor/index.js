let colorInput = document.querySelector(".color-input");
let backColorInput = document.querySelector(".backcolor-input");
let p = document.querySelectorAll(".text");
let btn= document.querySelector(".btn");

const validationHexColor = (hex) => {
    if(typeof hex === "string" && hex.substring(0,1) === "#" && hex.length === 7) {
        hex = hex.substring(1)
        let parsedNum = parseInt(hex, 16);
        return (!Number.isNaN(parsedNum))
    }
    return false;
}

colorInput.addEventListener("input", (event) => {

    if( !validationHexColor(event.target.value) ){
        throw new Error("Value must be a hexademical code");
    }

})

backColorInput.addEventListener("input", (event) => {
    if( !validationHexColor(event.target.value)) {
        throw new Error("Value must be a hexademical code");
    }

})


btn.addEventListener("click", (event)=> {
    event.preventDefault(event);
    p.forEach((item) => {
        item.style.color = colorInput.value;
        item.style.backgroundColor = backColorInput.value;
    })
})










