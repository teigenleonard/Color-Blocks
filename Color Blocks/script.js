var blueBlocks = 1;
var redBlocks = 1;
var greenBlocks = 1;
var yellowBlocks = 1;

$(document).ready(function(){
  // console.log("hello!");
  $(".container").on('click','#bluebutton', function(){
    $(".container").append("<div class= 'blue'></div>");
      numClicks += 1;
  });

  $(".container").on('click','#redbutton', function(){
    $(".container").append("<div class= 'red'></div>");
      numClicks += 1;
  });

  $(".container").on('click','#greenbutton', function(){
    $(".container").append("<div class= 'green'></div>");
      numClicks += 1;
  });

  $(".container").on('click','#yellowbutton', function(){
    $(".container").append("<div class= 'yellow'></div>");
      numClicks += 1;
  });
  $(".container").on('click','button', function(){
  //       if ('#bluebutton') {
  //         blueBlocks += 1;
  //       } else ('#redbutton') {
  //         redBlocks += 1;
  //       } else ('#greenbutton') {
  //         greenBlocks += 1;
  //       } else ('#yellowbutton') {
  //         yellowBlocks += 1;
  //       }
  //
  // })
});
});
