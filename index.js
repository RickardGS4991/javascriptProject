//Detecting click buttom
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function clickHand(){
        var buttomInnerHTML = this.innerHTML;

        makeSound(buttomInnerHTML);
        buttomAnimation(buttomInnerHTML);
    });
}

//Detecting key press
document.addEventListener("keydown", function keyyy(event){
    makeSound(event.key);
    buttomAnimation(event.key);
});

//Function to make the sound with every event
function makeSound(key){

    switch(key){
        case "w":
            var plate = new Audio ('sounds/crash.mp3');
            plate.play();
          break;
        case "a":
            var bass = new Audio('sounds/kick-bass.mp3');
            bass.play();
          break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        default:
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
    }
        
}

function buttomAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}


/*
//if you want to select an only TAG to change it
document.querySelector("h1").style.color = "blue";

//If you want to select all tag relate ->
document.querySelectorAll(.buttom).style.color = "blue";

//if you want to add an function or property to the new object ->
document.querySelector("h1").addEventListener("Event", what should object do after this event?)

//If you want to change, add or delete a class, you must use the nexct line
document.querySelector("h1").classList.add("pressed");
document.querySelector("h1").classList.remove("pressed");

//Develop a new object with a function
function videogame(name, year, platform){
    this.name = name;
    this.year = year;
    this.platform = platform;
    this.playing = function(){
        alert("Would you like to play?");
        stopPlay();
    }
}

videogame1("Harry Potter", 1999, "PlayStation");
videogame.playing();

//If you want to add a delay in some function, you can put the next line
setTimeOut(function(),time);
*/
