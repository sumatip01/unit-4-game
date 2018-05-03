var random_result;
var wins;
var loses;
var previous =0;

//$(".crystal").attr('class', 'red');

var startGame = function() {

//images
    $(".crystals").empty();

    var img = document.createElement("img")
    img.src = "crystal1.jpg";
    var src = document.getElementById("x");
    src.appendChild(img);

    var img = document.createElement("img")
    img.src = "crystal2.jpg";
    var src = document.getElementById("x");
    src.appendChild(img);

    var img = document.createElement("img")
    img.src = "crystal3.jpg";
    var src = document.getElementById("x");
    src.appendChild(img);

    var img = document.createElement("img")
    img.src = "crystal4.jpg";
    var src = document.getElementById("x");
    src.appendChild(img);

    
random_result = Math.floor(Math.random() * 60) + 30;


$ ("#result").html('Random Result: ' + random_result);

for (var i = 0; i < 4; i++){

    var randomNumber = Math.floor(Math.random() * 10) +1;
    
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal'
           data-random = "randomNumber"
        });
        crystal.css({
            "background-image":"url" + (image[1]) + "')",
            "background-size":"cover"
        });

     $(".crystal").append(crystal);

    }

}

startGame();

var reset = function () {

}
//event delegation
$(document).on('click', ".crystal", function () {
    

    var num = parseInt($(this).attr('data-random'));
    
    previous += num;

    $("#previous").html("Total score: ",previous);
    

    console.log(previous);

    if(previous > random_result){
        document.write("That's too high!");
        lost--;

        $("#lost").html(lost);

        previous = 0;

        startGame();

    }
    else if(previous === random_result){
        document.write("You got it!");
        win++;

        $("#win").html(win);

        previous = 0;

        startGame();

    }
});




// Display 4 Crystals, assign a random number to each Crystal that will be hidden and not displayed
// A random number should generate, that is displayed
// Clicking on crystals should add the numbers assigned to the crystals
// user is attempting to match the crystal-number to the random number displayed
// if the crystal-number and random number match, then we increment a win
// if the crystal-number is higher than random number, then we increment a loss 