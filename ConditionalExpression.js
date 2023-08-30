const prompt = require("prompt-sync")({sigint: true});
let a = prompt("Hey whats your age?");

a = Number.parseInt(a); //Converting string to a Number
if (a<0) {
    console.log("This is invalid age");
}
else if(a<9){
    console.log("You are a kid and you cannot drive");
}
else if(a<18 && a>=9)
{
    console.log("You are a kid and you can think of driviing after 18");   
}
else
{
    console.log("You can drive");   
}

console.log("Done!");   
