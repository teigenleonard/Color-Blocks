var blueBlocks = 1;
var redBlocks = 1;
var greenBlocks = 1;
var yellowBlocks = 1;

$(document).ready(function(){
  // console.log("hello!");

  $(".container").append("<div class= 'blue'></div>");
  $(".container").append("<div class= 'red'></div>");
  $(".container").append("<div class= 'green'></div>");
  $(".container").append("<div class= 'yellow'></div>");






  $(".container").on('click','#bluebutton', function(){
    $(".container").append("<div class= 'blue'></div>");
      // numClicks += 1;
  });

  // $(".container").on('click','#redbutton', function(){
      // numClicks += 1;
  // });

  // $(".container").on('click','#greenbutton', function(){
      // numClicks += 1;
  // });

  // $(".container").on('click','#yellowbutton', function(){
      // numClicks += 1;
  // });
  // $(".container").on('click','button', function(){
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
// });
});
