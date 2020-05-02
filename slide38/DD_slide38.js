$(document).ready(function () {
    var answered=[]
    var magicString = "position: relative; width: 100px; inset: 0px auto auto 0px; height: "
    var moveBack = function(id){
        var check  = $('#'+id).text().substring(0,2);
        //console.log(check);
        if(check == "Ro")
            $('#'+id).attr("style", magicString+"30px");
        else if (check == "Sm")
            $('#'+id).attr("style", magicString+"45px");
        else
            $('#'+id).attr("style", magicString+"15px");
    }
    $(".answer").draggable({
        revert: "invalid",
        revertDuration: 0,
        start:function(ev, ui){
            //console.log($(this).text());
        }
    });
    $(".question").droppable({
        // over: function(event, ui) {
		// 	if($.inArray($(this).text(), answered) < 0)
        //         $(this).css('background', 'orange');
        //},
        out: function(event, ui) {
			if($.inArray($(this).text(), answered) < 0) {
                if($(this).attr("ans") == ui.draggable.attr('id')) {
                    console.log("plz")
                    $(this).css('background', 'cyan');
                    $(this).attr("ans", "");
                    $(this).text($(this).attr('qid'));
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
                $(this).text("");
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
            $(this).text($(this).attr('qid'));
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
                $('#hint').text('Hint: Go back and study the diagram in the section Organisms');
                $('#hint').css('font', '12px');
                if($(this).attr("ans")) {
                    $(this).css('background', 'red');
                    moveBack($(this).attr("ans"));
                }
            }
        });
       alert( "You got " + correct +" answers correct.\n");
    });
});
