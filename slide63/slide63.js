$(document).ready(function () {
  var clicked = [];
  var matched = {};
  var error = {"row-1":{}, "row-2":{}};
  $(".box").click(function(){
    Matching(this, clicked, matched, error);
  });
});