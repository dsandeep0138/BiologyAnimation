$(document).ready(function () {
    var move_to = function( $obj, $target){
        $parent = $obj.parent();
        $parent.detach($obj);
        $target.append($obj);
        update($parent);
        update($target);
    }
    var update = function($con){
        if($con.hasClass("question")){
            $children = $con.children();
            if($children.length == 0){
                $con.text($con.attr("id"));
            } 
            if($children.hasClass("answer")){
                $con.addClass("has-answer");
                $con.contents().each(function(){
                    if(!$(this).hasClass("answer")){
                        $(this).remove();
                    }
                });
            }else{
                $con.removeClass("has-answer");
            }
        }else if($con.hasClass("answer-container")){
        }
    }
    $(".answer").draggable({
        revert: "invalid",
        revertDuration: 0,
        stop:function(ev, ui){
            $q = $(this);
            $q.css("top", "");
            $q.css("left", "");
        }
    });
    $(".question").droppable({
        accept: ".answer",
        tolerance: "pointer",
        addClasses: false,
        classes: {
            "ui-droppable-hover": "answer-hover"
        },
        drop: function(event, ui) {
            var $q = $(this);
            $ans = ui.draggable;
            if($q.hasClass("has-answer")){
                move_to($q.children(), $(".answer-container"));
            }
            move_to($ans, $q);
        }
    });
    $(".question").dblclick(function(){
        $q = $(this)
        if($q.hasClass("has-answer")){
            move_to($q.children(), $(".answer-container"));
        }
    });
    $( "#submit" ).click(function() {
        var correct =0;
        $('.question').each(function() {
            $q = $(this);
            if("a" + $q.attr("id") == $q.children().attr("id")){
                correct=correct+1;
                $q.css('background', 'green');
                $q.children().draggable('disable');
                $q.droppable('disable');
                $q.off('dblclick');
            }else{
                $('#hint').text('Hint: Go back and look at Cell Theory Slides');
                $('#hint').css('font', '12px');
            }
        });
        alert( "You got " + correct +" answers correct.\n");
    });

    $('.question').each(function(){
        update($(this));
    });
});
