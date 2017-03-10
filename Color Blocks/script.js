var blueBlocks = 1;
var redBlocks = 1;
var greenBlocks = 1;
var yellowBlocks = 1;

$(document).ready(function(){
  // console.log("hello!");

  $(".blocks").append("<div class= 'blue'></div>");
  $(".blocks").append("<div class= 'red'></div>");
  $(".blocks").append("<div class= 'green'></div>");
  $(".blocks").append("<div class= 'yellow'></div>");






  $(".container").on('click','#bluebutton', function(){
    $(".blocks").append("<div class= 'blue'></div>");
      // numClicks += 1;
  });

  $(".container").on('click','#redbutton', function(){
  $(".blocks").append("<div class= 'red'></div>");
      // numClicks += 1;
  });

  $(".container").on('click','#greenbutton', function(){
  $(".blocks").append("<div class= 'green'></div>");
      // numClicks += 1;
  });

  $(".container").on('click','#yellowbutton', function(){
  $(".blocks").append("<div class= 'yellow'></div>");
      // numClicks += 1;
  });
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

// function addBlock() {
//   $(".blocks").append("<div class='blue'></div>");
//
// }
