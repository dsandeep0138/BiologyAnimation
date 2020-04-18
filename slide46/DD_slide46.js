$(document).ready(function () {
    var answered=[]
    var magicString = "position: relative; width: 100px; inset: 0px auto auto 0px; height: 15px"
    var moveBack = function(id){
        $('#'+id).attr("style", magicString);
    }
    $(".answer").draggable({
        revert: "invalid",
        revertDuration: 0,
        start:function(ev, ui){
            //console.log($(this).text());
        }
    });
    $(".question").droppable({
        out: function(event, ui) {
			if($.inArray($(this).text(), answered) < 0) {
                if($(this).attr("ans") == ui.draggable.attr('id')) {
                    console.log("plz")
                    $(this).css('background', 'cyan');
                    $(this).attr("ans", "");
                }
            }
        },
        drop: function(event, ui) {
			if($.inArray($(this).text(), answered) < 0) {
                if ($(this).attr("ans") != ui.draggable.attr('id')) {
                    moveBack($(this).attr("ans"));
                }
                $(this).css('background', 'orange');
                $(this).attr("ans",ui.draggable.attr('id'));
                //console.log(ui.draggable);
            }
            else {
                moveBack(ui.draggable.attr('id'));
            }
        }
    });
    $(".question").dblclick(function(){
        console.log($(this));
        if($.inArray($(this).attr("ans"), answered) < 0) {
            moveBack($(this).attr("ans"));
            $(this).css('background', 'cyan');
            $(this).attr("ans", 0);
        }
    });
    $( "#submit" ).click(function() {
		var correct =0;
        $('.question').each(function() {
            if($(this).attr("ans") == $(this).text()){
                correct=correct+1;
			    if($.inArray($(this).text(), answered) < 0)
				    answered.push($(this).text())
                $(this).css('background', 'green');
				$('#'+$(this).attr("ans")).draggable('disable');
            }else{
                //$('#hint').text('Hint: Go back and study the diagram in the section Organisms');
                //$('#hint').css('font', '12px');
                if($(this).attr("ans")) {
                    $(this).css('background', 'red');
                    moveBack($(this).attr("ans"));
                }
            }
        });
        if (correct == 11)
            alert( "You got " + correct +" answers correct.\n");
        else
            alert( "You got " + correct +" answers correct.\nHint: Go back and study the diagram in the section Organisms");
    });
});
