const prompt = require('prompt-sync')({sigint: true});

let choice = prompt("combine or deconstruct:")
if(choice === "combine"){
let color1 = prompt("First color");
let color2 = prompt("second color ");

if (color2 === "red" && color1 === "blue"){
    console.log("purple");
} else if (color2 === "blue" && color1 === "red"){
    console.log("purple");
} else if (color2 === "yellow" && color1 === "red"){
    console.log("orange");
}else if (color2 === "red" && color1 === "yellow"){
    console.log("orange");
} else if (color2 === "yellow" && color1 === blue){
    console.log("green");
}else if (color2 === "blue" && color1 === "yellow"){
    console.log("green");
} else {
    console.log("error");
} 
}
if (choice === "deconstruct"){ 
    let color = prompt("color");

if (color === "purple") {
    console.log("red + blue")
} else if (color === "orange"){
    console.log("red + yellow")
} else if (color === "green"){
    console.log("blue + yellow")
} else {
    console.log("error")
} 
}