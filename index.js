// Creating 2 random numbers
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

// Creating a random image filepath for the first image
var img1Path = "./images/dice6.png";
var img1PathFrontPart = img1Path.slice(0, 13);
var img1PathEndPart = img1Path.slice(14,18);
img1Path = img1PathFrontPart + randomNumber1 + img1PathEndPart;

// Creating a random image filepath for the second image
var img2Path = "./images/dice6.png";
var img2PathFrontPart = img2Path.slice(0, 13);
var img2PathEndPart = img2Path.slice(14,18);
img2Path = img2PathFrontPart + randomNumber2 + img2PathEndPart;

// Changing the image sources for both  the dice images
document.querySelector(".img1").setAttribute("src", img1Path);
document.querySelector(".img2").setAttribute("src", img2Path);

// Selecting a winner for the game
if(randomNumber1 > randomNumber2){
    document.querySelector("div h1").innerHTML = "🚩Player 1 Wins!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("div h1").innerHTML = "Player 2 Wins!🚩";
}else{
    document.querySelector("div h1").innerHTML = "🚩It's a Draw!🚩";
}