let btn = document.querySelector(".button-to-main");
let dataArr =document.querySelectorAll(".data");
const state = {};
dataArr.forEach(input=> {
    input.addEventListener("input", (event) => {

        state[input.name] = event.target.value;

    })
})

btn.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("state" , state)
    let jsonData =  JSON.stringify(state);
    alert(jsonData)

})


