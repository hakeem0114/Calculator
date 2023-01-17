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
currentNum = "";
operator = "";

//Output values
numbers.forEach((number) => { //For each node in nodelist, check if # is pressed
    number.addEventListener("click",(button)=>{
       changeNum(button.target.textContent); //Add target to get where element occurs. Textcontent display targeted value.
        current.textContent = currentNum;
    })
});




function changeNum(num){
    (currentNum.length <=10) ? currentNum += num : ""; //Takes in 10 max #s & returns number 
}