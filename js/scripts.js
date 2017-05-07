// make sure number is positive
function positiveNumber (input) {
  if (input > 0 ) {
    return true;
  } else {
    return false;
  }
}

// count to number inputted by user

// replace number divislbe by 3 with ping

// repalce numbers divisible by 5 with pong

// replace numbers divivsible by 15 with pingpong


$(document).ready(function() {
  // submit is method
  $("form#user-input").submit(function(event) {

      event.preventDefault();
      var input = parseInt($("input#number").val());
      var resultsDiv = $('#results');
      resultsDiv.empty();

      //do something with positive
      if(input > 0){




          for (var i=1;i<=input;i++)
          {
              if((i%3)===0)
              {
                  //console.log("ping");
                  resultsDiv.append('<span>ping</span>');
              }
              else if((i%5)===0)
              {
                  //console.log("ping");
                  resultsDiv.append('<span>pong</span>');
              }
              else if((i%15)===0)
              {
                  //console.log("pingpong");
                  resultsDiv.append('<span>pingpong</span>');
              }

              else
              {
                  //console.log(i);
                  resultsDiv.append('<span>' + i + '</span>');
              }
          }

      }
      //do something with negative values
      else {
          resultsDiv.append('<span>Please Enter a positive number.</span>');

      }
  });
});
