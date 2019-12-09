$(document).ready(function () {
    var correct =0;
    var q_selected = -1;
    $(".question").click(function(){
      $('#hint').text("");
      if(q_selected == -1){
        q_selected = $(this)
        $(this).css('border-color', 'yellow');
      }
    });
    $(".answer").click(function(){
      if(q_selected!=-1){
        if($(this).attr("id") == q_selected.text()){
          q_selected.css('border-color', 'rgb(124,252,0)');
          $(this).css('border-color', 'rgb(124,252,0)');
          q_selected = -1;
        }else{
          q_selected.css('border-color', 'red');
          $(this).css('border-color', 'red');
          if(q_selected.text()==1 ){
              $('#hint').text("Hint: Look at the slide on mitochondria");
          }
          if(q_selected.text()==2 ){
              $('#hint').text("Hint: Look at the slide on nucleus");
          }
          if(q_selected.text()==3 ){
              $('#hint').text("Hint: Look at the slide on cell membrane");
          }
          if(q_selected.text()==4){
              $('#hint').text("Hint: Look at the slide on cytoskeleton");
          }
          if(q_selected.text()==5){
              $('#hint').text("Hint: Look at the slide on Lysosome and Vacuole");
          }
          q_selected = -1;
        }
      }else{
        $('#hint').text("Please Select a Box from top Row First");
      }
    });


});
