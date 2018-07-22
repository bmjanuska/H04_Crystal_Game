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


        // Object array of all the crystals. Maps a random number to each crystal
          // Declare array for crystal
          var crystal = ["crystal_1", "crystal_2", "crystal_3", "crystal_4" ];
          
          // Declare var rndnum 
          var rndnum = 0;

          // For loop each element in array
          for ( var i = 0; i < crystal.length; i++){
          console.log("this is my array: " + crystal);

            // While rndnum is being tested for duplicates 
            while (1) { 
              // Get random number
              // For each element 
              rndnum = Math.floor(Math.random() * 12) + 1;

              //Checking rndnum against next item in array
              for ( var j = 0; j < crystal.length; j++){

                // If rndnum is in array then test = false
                if (rndnum === crystal[j]){
                  // Restart while loop
                  console.log("found a dup " + rndnum); break;
                };
              };

              //Where you are adding random number to the array
              crystal[i] = rndnum;
              break;
            };
          };
          
          console.log("this is my array: " + crystal);

          // test = true
          // Place rndnum in array
          // Exit while




        });