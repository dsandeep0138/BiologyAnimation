$(document).ready(function () {
    var move_to = function( $obj, $target) {
        $parent = $obj.parent();
        $parent.detach($obj);
        $target.append($obj);
        update($parent);
        update($target);
    }

    var update = function($con) {
        if ($con.hasClass("dropBox")) {
            $children = $con.children();
            if ($children.length == 0) {
                $con.text($con.attr("id"));
            } 
            if ($children.hasClass("answer")) {
                $con.addClass("has-answer");
                $con.contents().each(function() {
                    if (!$(this).hasClass("answer")) {
                        $(this).remove();
                    }
                });
            } else {
                $con.removeClass("has-answer");
            }
        } else if ($con.hasClass("word-bank")) {
        }
    }

    $(".answer").draggable({
        revert: "invalid",
        revertDuration: 0,
        stop:function(ev, ui) {
            $q = $(this);
            $q.css("top", "");
            $q.css("left", "");
        },
        zIndex: 1
    });

    $(".dropBox").droppable({
        accept: ".answer",
        tolerance: "pointer",
        addClasses: false,
        classes: {
            "ui-droppable-hover": "answer-hover"
        },
        drop: function(event, ui) {
            var $q = $(this);
            $ans = ui.draggable;
            if($q.hasClass("has-answer")) {
                move_to($q.children(), $(".word-bank"));
            }
            move_to($ans, $q);
        }
    });

    $(".dropBox").dblclick(function() {
        $q = $(this)
        if($q.hasClass("has-answer")) {
            move_to($q.children(), $(".word-bank"));
            $q.css('background', 'lightskyblue');
        }
    });

    $("#submit").click(function() {
        var numCorrect = 0;
        $('.dropBox').each(function() {
            $q = $(this);
            if($q.attr("id") == "#" + $q.children().attr("id")) {
                numCorrect=numCorrect+1;
                $q.css('background', 'green');
                $q.children().draggable('disable');
                $q.droppable('disable');
                $q.off('dblclick');
            } else {
                $q.css('background', 'red');
                $q.children().draggable('enable');
                $q.droppable('enable');
            }
        });

        $('#result').text(`You answered ${numCorrect}/11 questions correctly!`);
        $('#result').css({'position': 'absolute', 'bottom': '-5%', 'font-size': '1.5vw', 'font-weight': 'bold', 'float': 'center'});

        window.setTimeout(function() {
            $('#result').text('');
        }, 2500)
    });
});