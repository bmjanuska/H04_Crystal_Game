
  var targetNumber = Math.floor(Math.random() * 101) +19;

  $(".guess_this_number").text(targetNumber);

  var counter = 0;

  $(".userTotal").text(counter);

  var wins = 0;

  $("#wins").text(wins);

  var loss = 0;

  $("#loss").text(loss);



  //Number options for what numbers the crystal can pick from 
  // var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12]; 
  
  var crystal_1Val = Math.floor(Math.random() * 11) +1; 

  var crystal_2Val = Math.floor(Math.random() * 11) +1;

  var crystal_3Val = Math.floor(Math.random() * 11) +1;

  var crystal_4Val = Math.floor(Math.random() * 11) +1;


if (crystal_1Val === crystal_2Val) {
   let newNum = Math.floor(Math.random() * 11) +1
   if (newNum !== crystal_1Val){
     crystal_2Val = newNum
}
  
 };

  // if (crystal_1Val === crystal_2Val) {
  //  crystal_2Val !== crystal_1Val || 
  //  crystal_3Val !== crystal_2Val || 
  //  crystal_1Val !== crystal_4Val ;
  //   Math.floor(Math.random() * 11) +1;
  // }

  // if (crystal_2Val === crystal_3Val) {
  //  Math.floor(Math.random() * 11) +1;
  //  crystal_3Val !== crystal_2Val;
  // }

  // if (crystal_3Val === crystal_4Val) {
  //  Math.floor(Math.random() * 11) +1;
  //  crystal_4Val !== crystal_3Val;
  // }

  // if (crystal_4Val === crystal_1Val) {
  //  Math.floor(Math.random() * 11) +1;
  //  crystal_1Val !== crystal_4Val;
  // }


  $(".crystal_1").on("click", function() {
    counter += crystal_1Val
    // console.log("this is from clicking crystal 1");
    // var crystalValue = ($(this).attr(".userTotal"));
    // crystal_1Val = parseInt(crystalValue);
    console.log(crystal_1Val);
    });

  $(".crystal_2").on("click", function() {
    counter += crystal_2Val
    // console.log("this is from clicking crystal 2");
    // crystal_2Val = parseInt(crystalValue);
    console.log(crystal_2Val);
  });

  $(".crystal_3").on("click", function() {
    counter += crystal_3Val
    // console.log("this is from clicking crystal 3");
    // crystal_3Val = parseInt(crystalValue);
    console.log(crystal_3Val);  });

  $(".crystal_4").on("click", function() {
    counter += crystal_4Val
    // console.log("this is from clicking crystal 4");
    // crystal_4Val = parseInt(crystalValue);
    console.log(crystal_4Val);
  });


  //   alert("New score: " + counter);

  //   if (counter === targetNumber) {
  //     alert("You win!");
  //   }

  //   else if (counter >= targetNumber) {
  //     alert("You lose!!");


  