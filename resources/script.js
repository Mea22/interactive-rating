let buttons = document.querySelectorAll(".number");
let point = document.querySelector('.point')
let submit = document.querySelector("button")
let page1 =document.querySelector(".page1")
let page2 =document.querySelector(".page2")
let rateNum = 0;

function rate(number) {
    
    rateNum = number;
    console.log(rateNum)
    point.textContent = `You selected ${rateNum} out of 5`

}
    point.textContent = `You selected ${rateNum} out of 5`


submit.addEventListener("click", function(){
    page1.style.display = "none";
    page2.style.display = "flex";
})

buttons.forEach(button =>{
    button.addEventListener("click", function(){
        buttons.forEach(bttn =>{
            bttn.classList.remove("active")
        })
        button.classList.add("active");
})
    })

