window.onload = function() {
    var outputText = document.getElementById("output-text");

    document.getElementById("q1option1").onclick = function() {
        q1Function(1)
    };

    document.getElementById("q1option2").onclick = function() {
        q1Function(2)
    };

    function q1Function(btn_id) {
        console.log(btn_id);
        if (btn_id == 1) {
            document.getElementById("q1option1").disabled = true;
            document.getElementById("q1option2").disabled = true;

            outputText.innerHTML = "That's right!";
            outputText.style.color = "blue";
            var x = document.getElementById("question1");
            if (x.style.display === "none") {
                x.style.display = "block";
            } 
        } else {
            outputText.innerHTML = "That's wrong! Try again. \nHint: Go back and take a look at types of cells";
            outputText.style.color = "red";
        }
    }

    document.getElementById("q2option1").onclick = function() {
        q2Function(2)
    };

    document.getElementById("q2option2").onclick = function() {
        q2Function(1)
    };

    function q2Function(btn_id) {
        console.log(btn_id);
        if (btn_id == 1) {
            document.getElementById("q2option1").disabled = true;
            document.getElementById("q2option2").disabled = true;
            outputText.innerHTML = "That's right! Now try this next one";
            var y = document.getElementById("question2");
            outputText.style.color = "blue";
            if (y.style.display == "none") {
                y.style.display = "block";
            } else {
                y.style.display = "none";
            }
        } else {
            outputText.innerHTML = "That's wrong! Try again. \nHint: Go back and take a look at types of cells";
            outputText.style.color = "red";
	}
    }

    document.getElementById("q3option1").onclick = function() {
        q3Function(1)
    };

    document.getElementById("q3option2").onclick = function() {
        q3Function(2)
    };

    function q3Function(btn_id) {
        console.log(btn_id);
        if (btn_id == 1) {
            document.getElementById("q3option1").disabled = true;
            document.getElementById("q3option2").disabled = true;
            outputText.innerHTML = "That's right! Now try this next one";
            var x = document.getElementById("question3");
            outputText.style.color = "blue";
            if (x.style.display == "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        } else {
            outputText.innerHTML = "That's wrong! Try again. \nHint: Go back and take a look at types of cells";
            outputText.style.color = "red";
        }
    }
}
