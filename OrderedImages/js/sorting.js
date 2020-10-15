window.onload = function() {
    this.jQuery(); 
}

$(function(){
    jQuery("#imageListItems").sortable({
        tolerance: "pointer",
        update: function(event, ui) {
	    updateBorderToDefault();
	}
    });
});

$(document).ready(function() {
    $("#checkAnswer").click(function() {
        getIdsOfImages();
    });
});

function updateBorderToDefault() {
    $("#checked_order").html("")
    $(".imageList").css("border", "3px solid");
}

function getIdsOfImages() {
    var student_answer = [];
    var correct_answer = [5, 4, 2, 1, 3];

    $('.imageList').each(function (index) {
        student_answer.push($(this).attr("id").replace("image", ""));
    });

    compareArr(student_answer, correct_answer);
}

function compareArr(arr1, arr2) {
    var incorrect_answer = false;

    if (arr1.length != arr2.length) {
        $(".imageList").css("border", "3px solid red");
    }

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            incorrect_answer = true;
            $(".imageList").eq(i).css("border", "3px solid red");
        } else {
            $(".imageList").eq(i).css("border", "3px solid lime");
        }
    }

    if (incorrect_answer) {
        $("#checked_order").html("<b style='color: red'>Incorrect Ordering!</b>")
    } else {
        $("#checked_order").html("<b style='color: green'>Correct Ordering! Good Job!</b>")
    }
}
