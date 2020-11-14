window.onload = function() {

var q_num=0;


    var outputText = document.getElementById("output-text");
    var h2 = document.getElementById("question_no");
    var p = document.getElementById("question_body");
    var button1 = document.getElementById("option1");
    var button2 = document.getElementById("option2");


    
genQuestion(q_num)

    document.getElementById("option1").onclick = function() {
       
        qFunction(document.getElementById("option1").textContent)
        
    };

    document.getElementById("option2").onclick = function() {
        qFunction(document.getElementById("option2").textContent)
    };



    function genQuestion(q_num)
    {
        h2.innerHTML = "Question " + (q_num+1) + " of " + questions.length;
        p.innerHTML = questions[q_num]["question"];
        button1.innerHTML = questions[q_num]["options"][0]
        button2.innerHTML = questions[q_num]["options"][1]
       
    }

     function qFunction(value)
     {
         console.log(value);
         console.log(questions[q_num]["answer"]);
         if(value.localeCompare(questions[q_num]["answer"]) ==0)
         {
             q_num += 1;
             outputText.innerHTML = "That's right!";
             if(q_num >= questions.length)
             {
                document.getElementById("option1").disabled = true;
                document.getElementById("option2").disabled = true;
                h2.disabled = true;
                p.disabled = true;
             }
             else
             {
	    	    genQuestion(q_num);
		       
             }
         }
         else
         {
             outputText.innerHTML = "That's Incorrect! Try again!";
         }
         
      
     }
}


    
