$(document).ready(function(){
    //Varriable for the number you have to guess
    var targetNumber = Math.floor(Math.random() * 101) +19;

  //Varriable that edits the DOM for the number we have to guess
  $(".guess_this_number").text(targetNumber);

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
  var targetNumber = Math.floor(Math.random() * 101) +19;
  $('.guess_this_number').text(targetNumber);


      // Object array of all the crystals. Maps a random number to each crystal
      var numbers = {
        "crystal_1": Math.floor(Math.random() * 11) +1,
        "crystal_2": Math.floor(Math.random() * 11) +1,
        "crystal_3": Math.floor(Math.random() * 11) +1,
        "crystal_4": Math.floor(Math.random() * 11) +1,
      };
      console.log(numbers)
      
      //For each 
      // key is the crystal and the value is the math.floor 
      $.each(numbers, function(key, value){
       $('.'+key).click(function(){

        //Counter will increase from the value of each number
        counter += value;

        //Prevents same number appearing twice...maybe 
        if ((numbers["crystal_1"]) === (numbers["crystal_2"]) || 
            (numbers["crystal_1"]) === (numbers["crystal_3"]) ||
            (numbers["crystal_1"]) === (numbers["crystal_4"]) ||
            (numbers["crystal_2"]) === (numbers["crystal_3"]) ||
            (numbers["crystal_2"]) === (numbers["crystal_4"]) ||
            (numbers["crystal_3"]) === (numbers["crystal_4"])) {
        };

        //Counter class is updated with new number, 
        //if go over the goal number lose, add loss, and reset
        $('.userTotal').html(counter);
        if(counter > targetNumber){
         $('#wlMessage').text("You Lose :(" );
           losses ++;
           $('#losses').text(losses);
           counter = 0;
           $(".userTotal").text(counter);
           $(".guess_this_number").text(Math.floor(Math.random() * 101) +19);
         }

          //Counter class is updated with new number, 
          //if user number equals goal numer its a win, add win, and reset
         if(counter === targetNumber){
           $('#wlMessage').text("You Won!!!");
           wins ++;
           $('#wins').text(wins);
           counter = 0;
           $(".userTotal").text(counter);
           $(".guess_this_number").text(Math.floor(Math.random() * 101) +19);
         }

       });

     });

    });