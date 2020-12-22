function Matching(ele, clicked, matched, error) {
  if(check_if_matched(ele, matched)){
    // do nothing.
    return ;
  }
  else if(clicked.length>0){
    hide_errors(error, clicked[0]);
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
      let slide_name = [get_slide_name(ele), get_slide_name(clicked[0])];
      store_error(error, ele, clicked[0]);
      store_error(error, clicked[0], ele);
      $("#Hint").text(`Hint:  Look at the slide on ${slide_name[0]}, and ${slide_name[1]}`);
      clicked.pop();
    }
  }
  else{
    // click one image
    if($(ele).css("border-color") != 'rgb(255, 0, 0)'){
      border_turns_yellow(ele, clicked);
      clicked.push(ele);
      show_errors(error, ele);
    }
    else{
      return ;
    }
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
  setTimeout(function(){
    $(id).css('border-color', 'black'); 
    $("#Hint").text("");
  }, 1000);
}

function border_turns_black(id){
  $(id).css('border-color', 'black');
}

function get_slide_name(ele){
  var slides_name = ['Mitochondria', 'Nucleus', 'Cell membrane', 'Cytoskeleton', 'Lysosome and Vacuole'];
  var id = parseInt($(ele).attr("id"));
  return slides_name[id-1];
}

function store_error(error, ele1, ele2) {
  var id1 = $(ele1).attr("id");
  var par1_class = $(ele1).parent().attr("class");
  var id2 = $(ele2).attr("id");
  
  if (!error[par1_class].hasOwnProperty(id1)) {
    error[par1_class][id1] = [];
  }
  if (!error[par1_class][id1].includes(id2) ){
    error[par1_class][id1].push(id2);
  }
}

function show_errors(error, ele) {
  var id = $(ele).attr("id");
  var par_class = $(ele).parent().attr("class");
  var other_par;
  if (par_class == 'row-1') {
    other_par = $('.row-2');
  } else {
    other_par = $('.row-1');
  }
  
  if (error[par_class].hasOwnProperty(id)) {
    error_id = error[par_class][id];
    error_id.forEach(function(error_id){
      error_img = other_par.find(`#${error_id}`);
      if (error_img.css('border-color') != 'rgb(124, 252, 0)') {
        $(error_img).css('border-color', 'red');
      }
    });
  }
}

function hide_errors(error, ele) {
  var id = $(ele).attr("id");
  var par_class = $(ele).parent().attr("class");
  var other_par;
  if (par_class == 'row-1') {
    other_par = $('.row-2');
  } else {
    other_par = $('.row-1');
  }
  
  if (error[par_class].hasOwnProperty(id)) {
    error_id = error[par_class][id];
    error_id.forEach(function(error_id){
      error_img = other_par.find(`#${error_id}`);
      if (error_img.css('border-color') != 'rgb(124, 252, 0)') {
        $(error_img).css('border-color', 'black');
      }
    });
  }
}

module.exports = {}