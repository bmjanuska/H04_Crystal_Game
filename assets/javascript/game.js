$(document).ready(function(){
  
  //========= Variables ========= 

  //Our number that starts at zero
  var counter = 0;

  //"Your Number" is chaning the DOM of to equal whatever is added
  $(".userTotal").text(counter);

  //Wins that starts at zero 
  var wins = 0;
  //Update DOM with wins
  $("#wins").text(wins);

  //losseses that starts at zero 
  var losses = 0;
  //Update DOM with losses
  $("#losses").text(losses);

  //The computer generated number is determined by a math random
  var targetNumber = Math.floor(Math.random() * 120) + 1;
  $('.guess_this_number').text(targetNumber);

  // Declare array for crystal
  var crystal = ["crystal_1", "crystal_2", "crystal_3", "crystal_4" ];

  // Declare variable for holding a random number 
  var rndnum = 0;

//========= Functions =========

function resetGame(){
    counter = 0;
    $(".userTotal").text(counter);
    targetNumber = (Math.floor(Math.random() * 120) + 1);
    $('.guess_this_number').text(targetNumber);
    genCryNum();
  };

  //Random number generator for crystals
  function genCryNum(){
  // Loading the array elements one at a time 
  for ( var i = 0; i < crystal.length; i++){
    // Generating a random number between 1 through 12
    rndnum = (Math.floor(Math.random() * 12) + 1);
    
    //If there is a duplicate number, it will be regenerated
    while (crystal.includes(rndnum)) { 
      rndnum = (Math.floor(Math.random() * 12) + 1);
    };

    //Random number is now assigned to each crystal    
    crystal[i] = rndnum;
  };
};


  //Losing score increases and displays message
  function youLose(){ 
    $('#wlMessage').text("You Lose :(" );
      losses ++;
      $('#losses').text(losses);
    };

  //Winning score increases and displays message
  function youWon(){
    $('#wlMessage').text("You Won!!!");
    wins ++;
    $('#wins').text(wins);
  };

  (genCryNum());

//========= On Clicks ========= 

//Crystal 1/ button one
$(".crystal_1").on("click", function () {

  counter += crystal[0];

  $('.userTotal').html(counter);
  if(counter > targetNumber){
    youLose();
    resetGame();
  };
  if(counter === targetNumber){
    youWon();
    resetGame();
  };
});

//Crystal 2/ button one
$(".crystal_2").on("click", function () {

  counter += crystal[1];

  $('.userTotal').html(counter);
  if(counter > targetNumber){
    youLose();
    resetGame();
  };
  if(counter === targetNumber){
    youWon();
    resetGame();
  };
});

//Crystal 3/ button one
$(".crystal_3").on("click", function () {

  counter += crystal[2];

  $('.userTotal').html(counter);
  if(counter > targetNumber){
    youLose();
    resetGame();
  };
  if(counter === targetNumber){
    youWon();
    resetGame();
  };
});

//Crystal 4/ button one
$(".crystal_4").on("click", function () {

  counter += crystal[3];
  $('.userTotal').html(counter);

  if(counter > targetNumber){
    youLose();
    resetGame();
  };
  if(counter === targetNumber){
    youWon();
    resetGame();
  };
});


});