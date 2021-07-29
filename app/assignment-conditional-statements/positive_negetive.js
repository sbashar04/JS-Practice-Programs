let number = 47;
console.log("If else");
if(number > 0){
    console.log("This is positive number");
}else if(number < 0){
    console.log("This is negetive number");
}else{
    console.log("This is zero");
}

console.log("Switch");
switch(true){
    case number > 0:
        console.log("This is positive number");
        break;
    case number < 0:
        console.log("This is negetive number");
        break;
    case number === 0:
        console.log("This is zero");
        break;
}

console.log("Ternary");

console.log(
    number > 0 ? 'Positive' : number < 0 ? 'Negetive' : 'Zero'
)