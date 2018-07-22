    $(document).ready(function(){
        //Varriable for the number you have to guess
        var targetNumber = Math.floor(Math.random() * 101) + 19;

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
      var targetNumber = Math.floor(Math.random() * 101) + 19;
      $('.guess_this_number').text(targetNumber);


          // Declare array for crystal
          var crystal = ["crystal_1", "crystal_2", "crystal_3", "crystal_4" ];
          
          // Declare variable for holding a random number 
          var rndnum = 0;

          // Loading the array elements one at a time
          for ( var i = 0; i < crystal.length; i++){

            // Generating a random number between 1 through 12
            rndnum = (Math.floor(Math.random() * 12) + 1);
            
            //If there is a duplicate number, it will be regenerated
            while (crystal.includes(rndnum)) { 
              rndnum = (Math.floor(Math.random() * 12) + 1);
            };

            //Add the random number to the array
            crystal[i] = rndnum;
          };
          


        });