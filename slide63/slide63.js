// function called when a div is selected, check if only one and turn yellow

$(document).ready(function () {
  var clicked = [];
  var matched = {};
  $(".box").click(function(){
    Matching(this, clicked, matched);
  });
});