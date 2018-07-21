
  var targetNumber = Math.floor(Math.random() * 101) +19;

  $(".guess_this_number").text(targetNumber);

  var counter = 0;

  $(".userTotal").text(counter);

  var wins = 0;

  $("#wins").text(wins);

    var loss = 0;

  $("#loss").text(loss);


  //Number options for what numbers the crystal can pick from 
  var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12]; 

  //if the number a cyrstal picks is already selected it will pick another number
 

  // Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    $(".cystal_1").attr(numberOptions[i]);

        $(".cystal_2").attr(numberOptions[i]);


    $(".cystal_3").attr(numberOptions[i]);


    $(".cystal_4").attr(numberOptions[i]);


  }


  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal_1").on("click", function() {

   
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
      alert("You win!");
    }

    else if (counter >= targetNumber) {
      alert("You lose!!");
    }

  });