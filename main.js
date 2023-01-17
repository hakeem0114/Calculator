console.log("Test");

//Equalizers
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let decimal = document.querySelector(".decimal");

//Nodelists
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

//Output
let old = document.querySelector(".old");
let current = document.querySelector(".new");

//Global Initials
old = "";
current = "";
operator = "";

//Output values
numbers.forEach((number) => { //For each node in nodelist, check if # is pressed
    number.addEventListener("click",(button)=>{
       value = button.target.textContent; //Add target to avoid event bubbling
       console.log(value)
    })
});
