let mark = 90;

if(mark < 0 && mark > 100){
    console.log('Invalid mark');
}else if(mark >= 80 && mark <= 100){
    console.log("A+");
}else if(mark >= 70 && mark <= 79){
    console.log("A");
}else if(mark >= 60 && mark <= 69){
    console.log("A-");
}else if(mark >= 50 && mark <= 59){
    console.log("B");
}else if(mark >= 40 && mark <= 49){
    console.log("C");
}else if(mark >= 33 && mark <= 39){
    console.log("D");
}else {
    console.log("F");
}