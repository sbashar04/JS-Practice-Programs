let number1 = 12;

console.log("If Statement");

if(number1 % 2 === 0){
    console.log("This is an even number");
}else {
    console.log("This is an odd number");
}

console.log("Switch");

switch(true){
    case number1 % 2 === 0:
        console.log("This is an even number");
        break;
    case number1 % 2 === 1:
        console.log("This is an odd number");
        break;
}

console.log("Ternary");

console.log((number1 % 2 === 0) ? 'Even number' : 'Odd number');