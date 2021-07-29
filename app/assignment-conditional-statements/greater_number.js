let number2 = 47;
let number3 = 20;
console.log("If else");
if(number2 > number3){
    console.log(number2);
}else{
    console.log(number3);
}


console.log("Switch");
switch(true){
    case number2 > number3:
        console.log(number2)
        break;
    case number3 > number2:
        console.log(number3)
        break;
}


console.log("Ternary");

console.log(number2 > number3 ? number2 : number3)