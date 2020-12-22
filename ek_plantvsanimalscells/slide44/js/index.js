window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  

  var getHint ;          // Word getHint
  var word = "photosynthesis"; // Selected word
  var guess ;             // Guess
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");
  
  var state1 = 0;

  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    

  // Create geusses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You got it correct";
      }
    }
  }

      // Animate man
  var animate = function () {
    var drawMe = lives ;
    show_image(drawArray[drawMe]);
  }

  
   // Hangman
  	function removeElement(id) {
		var elem = document.getElementById(id);
		return elem.parentNode.removeChild(elem);
	}	
    var img = document.createElement("img");    
   function show_image(src) {
	if (state1 == 0) {
			img.setAttribute("id", "pic");
			state1 = 1;
	}
	else if(state1 == 1) {
			removeElement("pic");
			img.setAttribute("id", "pic1");
			state1 = 2;
	} else if(state1 == 2){
			removeElement("pic1");
			img.setAttribute("id", "pic");
			state1 = 1;
	}		
    img.src = src;
    img.width = 200;
    img.height = 200;
    img.hspace = 200;
	img.style.position = "absolute";
	img.style.top = "250px";
	img.style.left = "800px";
    document.body.appendChild(img);
	}
   
   layer1 = "layer1.png";
   layer2 = "layer2.png";
   layer3 = "layer3.png";
   layer4 = "layer4.png";
   layer5 = "layer5.png";
  
  drawArray = [layer5,layer4,layer3,layer2,layer1]; 


  // OnClick Function
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
		animate();
      }
    }
  }
  
    
  // Play
  play = function () {
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();
    geusses = [ ];
    lives = 4;
    counter = 0;
    space = 0;
    result();
    comments();
	show_image(layer1);
  }

  play();
  
  // Hint

    hint.onclick = function() {

      hints = [
        ["Go back and read about Chloroplast"],
    ];

    showClue.innerHTML = "Clue: - " +  hints[0];
  };

   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
	img.remove();	
	state1 = 0; 
    play();
  }
}