function Matching(ele, clicked, matched) {
  if(check_if_matched(ele, matched)){
    // do nothing.
    return ;
  }
  else if(clicked.length>0){
    if (check_if_same_row(ele, clicked)) {
      // cannot click the imags in the same row other than itself
      if (check_if_match(ele, clicked)) {
        border_turns_black(ele, clicked);
        clicked.pop();
      }
    }
    else if(check_if_match(ele, clicked)){
      // matching
      border_turns_green(ele);
      border_turns_green(clicked[0]);
      clicked.pop();
      matched[$(ele).attr("id")] = true;
    }   
    else{     
      // not matching    
      border_turns_red(ele);
      border_turns_red(clicked[0]);
      clicked.pop();
    }
  }
  else{
    // click one image
    border_turns_yellow(ele, clicked);
    clicked.push(ele);
  }
}

// check if the image is at the same row of the clicked image
function check_if_same_row(ele, clicked) {
  var clicked_item = clicked[0];
  var clicked_parent = $(clicked_item).parent();
  var ele_parent = $(ele).parent();

  return $(clicked_parent).attr("class") == $(ele_parent).attr("class");
}

// check if the image has same id as the clicked image
function check_if_match(ele, clicked){ 
  var clicked_item = clicked[0];
  return $(clicked_item).attr("id") == $(ele).attr("id");
}

// check if the image is already matched
function check_if_matched(ele, matched) {
  var id = $(ele).attr("id");
  return matched.hasOwnProperty(id) && matched[id];
}

function border_turns_yellow(id) {
  $(id).css('border-color', 'yellow');
}

// when images match, call this function for border changes
function border_turns_green(id){
  $(id).css('border-color', 'rgb(124, 252, 0)');
}

// when images doesn't match, call this function for border changes
function border_turns_red(id){
  $(id).css('border-color', 'red');
}

function border_turns_black(id){
  $(id).css('border-color', 'black');
}

module.exports = {}