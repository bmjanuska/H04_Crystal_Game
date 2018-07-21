$(document).ready(function(){
    //Varriable for the number you have to guess
  var targetNumber = Math.floor(Math.random() * 101) +19;

  //Varriable that edits the DOM for the number we have to guess
  $(".guess_this_number").text(targetNumber);

  //Our number that starts at zero
  var counter = 0;

  //
  $(".userTotal").text(counter);

  //Counter that starts at zero 
  var wins = 0;

  //
  $("#wins").text(wins);

  //
  var loss = 0;

  //
  $("#loss").text(loss);
       
       var targetNumber = Math.floor(Math.random() * 101) +19;
       $('.guess_this_number').text(targetNumber);
       
       
      // Object array of all the crystals. Maps a random number to each crystal
      var numbers = {
      "crystal_1": Math.floor(Math.random() * 11) +1,
      "crystal_2": Math.floor(Math.random() * 11) +1,
      "crystal_3": Math.floor(Math.random() * 11) +1,
      "crystal_4": Math.floor(Math.random() * 11) +1,
      };
      
      //For each 
      // key is the cryston and the value is the math.floor 
      //'#' edits our DOM
     $.each(numbers, function(key, value){
       $('.'+key).click(function(){
          

          counter += value;
          
         $('.userTotal').html(counter);
         if(counter > targetNumber){
         $('#wlMessage').text("You Lose :(" );
         loss ++;
         $('#loss').text(loss);
         counter = 0;
         $(".userTotal").text(counter);
                    $(".guess_this_number").text(Math.floor(Math.random() * 101) +19);
         }

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