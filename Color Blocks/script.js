var blueBlocks = 1;
var redBlocks = 1;
var greenBlocks = 1;
var yellowBlocks = 1;

$(document).ready(function() {
    // console.log("hello!");
    $(".count").append("<div class='bluecount'>" + "<p>Blue Blocks: </p>" + "</div>");
    $(".count").append("<div class='redcount'>" + "<p>Red Blocks: </p>" + "</div>");
    $(".count").append("<div class='greencount'>" + "<p>Green Blocks: </p>" + "</div>");
    $(".count").append("<div class='yellowcount'>" + "<p>Yellow Blocks: </p>" + "</div>");


    $(".blocks").append("<div class= 'blue'></div>");
    $(".blocks").append("<div class= 'red'></div>");
    $(".blocks").append("<div class= 'green'></div>");
    $(".blocks").append("<div class= 'yellow'></div>");



    $(".container").on('click', '#bluebutton', function() {
        blueBlocks += 1;
        $(".bluecount").children().last().text("Blue Blocks: " + blueBlocks);
        $(".blocks").append("<div class= 'blue'></div>");
    });

    $(".container").on('click', '#redbutton', function() {
        $(".blocks").append("<div class= 'red'></div>");
        redBlocks += 1;
        $(".redcount").children().last().text("Red Blocks: " + redBlocks);
    });

    $(".container").on('click', '#greenbutton', function() {
        $(".blocks").append("<div class= 'green'></div>");
        greenBlocks += 1;
        $(".greencount").children().last().text("Green Blocks: " + greenBlocks);
    });

    $(".container").on('click', '#yellowbutton', function() {
        $(".blocks").append("<div class= 'yellow'></div>");
        yellowBlocks += 1;
        $(".yellowcount").children().last().text("Yellow Blocks: " + yellowBlocks);
    });


    // ** HARD MODE ** //
    $(".container").on('click', '.blue', function() {
        $(this).remove();
        blueBlocks -= 1;
        $(".bluecount").children().last().text("Blue Blocks: " + blueBlocks);
    });

    $(".container").on('click', '.red', function() {
        $(this).remove();
        redBlocks -= 1;
        $(".redcount").children().last().text("Red Blocks: " + redBlocks);
    });

    $(".container").on('click', '.green', function() {
        $(this).remove();
        greenBlocks -= 1;
        $(".greencount").children().last().text("Green Blocks: " + greenBlocks);
    });

    $(".container").on('click', '.yellow', function() {
        $(this).remove();
        yellowBlocks -= 1;
        $(".yellowcount").children().last().text("Yellow Blocks: " + yellowBlocks);

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
