console.log("Test");

//Equalizers
let clear = document.querySelector(".clear");
let equal = document.querySelector(".equal");
let decimal = document.querySelector(".decimal");

//Nodelists
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

//Output
let oldScreen = document.querySelector(".old");
let currentScreen = document.querySelector(".new");

//Mutable Global Initials as strings
oldNum = "";
currentNum = "";
operator = "";

//Output values
numbers.forEach((number) => { //For each node in nodelist, check if # is pressed
    number.addEventListener("click",(button)=>{
       changeNum(button.target.textContent); //Add target to get where element occurs. Textcontent display targeted value.
        currentScreen.textContent = currentNum; //Outputs current value on current screen box
    })
});

operators.forEach((operand)=>{
    operand.addEventListener("click",(op)=>{
        changeOp(op.target.textContent); //Get value of operator from nodelist

        oldScreen.textContent = oldNum + "" + operator; //Displays after each other
    })
})

//Clear
clear.addEventListener("click",(cl)=>{
    oldNum = "";
    currentNum = "";
    operator = "";

    oldScreen.textContent = oldNum;
    currentScreen.textContent = currentNum;
})

// =
equal.addEventListener("click",(eq)=>{
    oldScreen.textContent =  operate();

})


function changeNum(num){ //Parameter from argument
    (currentNum.length <=10) ? currentNum += num : ""; //Takes in 10 max #s & returns number 
                                // += Enables all #s to be shown next to each other
}

function changeOp(oper){  //Stores operators
    operator = oper; //Changes global var to current operand.
    oldNum = currentNum;
    currentNum="";
}

function operate(){ 
    oldNum = Number(oldNum); //Converts user input string to num
    currentNum = Number(currentNum);

    (operator === "/") ? oldNum /= currentNum : "";
    (operator === "x") ? oldNum *= currentNum : "";
    (operator === "+") ? oldNum += currentNum : "";
    (operator === "-") ? oldNum -= currentNum : "";

    return oldNum;
}