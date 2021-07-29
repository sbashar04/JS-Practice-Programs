let number = 2000;

if(number % 400 === 0){
    console.log("This is a leap year");
}else if(number % 4 === 0 && number % 100 !== 0){
    console.log("This is a leap year");
}else{
    console.log("This is not a leap year");
}