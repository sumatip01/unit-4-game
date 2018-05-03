var random_result;
var counter = 0;
var wins;
var loses;

random_result = Math.floor(Math.random() * 60) + 30;

$("result").html('Random Result: ');
for (var i = 0; i < 4; i++){

    var randomNumber = Math.floor(Math.random() * 10) +1;
    

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal';
            "data-random": randomNumber

        });
    $(".crystals").append(crystal);
}



//while (Attempts != randomNumber) {
  //  var Attempts = prompt("Try to match the number");
    //counter += 1;

 //   if (counter > randomNumber) {
   //     document.write ("That's too high!");
   //     break
    
   // }

   // if (Attempts == randomNumber) {
     //   document.write ("You got it!");

//    }
//}


// Display 4 Crystals, assign a random number to each Crystal that will be hidden and not displayed
// A random number should generate, that is displayed
// Clicking on crystals should add the numbers assigned to the crystals
// user is attempting to match the crystal-number to the random number displayed
// if the crystal-number and random number match, then we increment a win
// if the crystal-number is higher than random number, then we increment a loss 