// For left dice
var randomNumber1 = Math.random();  // gives random decimal number of 16 digits between 0 and 1

// by multiplying it by 6 it will give a 16 digits decimal number from range  0 to 5 
randomNumber1 =  randomNumber1*6;

/*floor function cut down the decimal part and make it an integer.
At last adding 1 to the random number obtained will make its range from integer 1 to 6
which is our requirement. */
randomNumber1 = Math.floor(randomNumber1) + 1;

var i1 = "image/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", i1);

// For right dice
var randomNumber2 = Math.random();
randomNumber2 =  randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var i2 = "image/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", i2);


if(i1 === i2) {
    document.querySelector("h1").innerHTML = "Draw!"
}
else if (i1 > i2) {
    document.querySelector("h1").innerHTML = "Player 1 wins 🚩"
}
else {
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩"
}

