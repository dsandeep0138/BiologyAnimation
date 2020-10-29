window.onload = function() {
    var grid = document.getElementById("puzzle-grid");
    var numChildren = grid.childElementCount;

    // randomize the list
    for (i = numChildren; i >= 0; i--) {
        grid.appendChild(grid.children[Math.random() * i | 0]);
    }

    var set1 = document.getElementsByClassName("set1");
    var set2 = document.getElementsByClassName("set2");
    var set3 = document.getElementsByClassName("set3");
    var set4 = document.getElementsByClassName("set4");

    set11 = set1[0].cloneNode(true); 
    set12 = set1[1].cloneNode(true); 
    set21 = set2[0].cloneNode(true); 
    set22 = set2[1].cloneNode(true); 
    set31 = set3[0].cloneNode(true); 
    set32 = set3[1].cloneNode(true); 
    set41 = set4[0].cloneNode(true); 
    set42 = set4[1].cloneNode(true); 

    var outputText = document.getElementById("output-text");
    var clickedTiles = [];

    for (i = 0; i < numChildren; i++) {
        grid.children[i].addEventListener("click", matchTile);
    }

    function sleep(ms, func) {
        return setTimeout(func, ms);
    }

    function matchTile() {
        if (clickedTiles.length === 0) {
	    clickedTiles.push(this);
	    this.id = "clicked";
        } else {
	    var previousTile = clickedTiles.pop();
            var currentTile = this;

	    if (previousTile.className == currentTile.className) {
                previousTile.id = "correct";
		currentTile.id = "correct";

		sleep(1000, function() {
		    var tiles = document.getElementsByClassName(currentTile.className);
		
		    for (i = 0; i < tiles.length; i++) {
                        tiles[i].innerHTML = "";
		        tiles[i].id = "removed";
                        tiles[i].removeEventListener("click", matchTile);
		    }

		    var count = 0;
                    for (i = 0; i < numChildren; i++) {
                        if (grid.children[i].id == "removed") {
                            count += 1;
                        }
		    }

                    if (count == 8) {
			grid.innerHTML = "";

			grid.appendChild(set11);
			grid.appendChild(set21);
			grid.appendChild(set31);
			grid.appendChild(set41);
			grid.appendChild(set12);
			grid.appendChild(set22);
			grid.appendChild(set32);
			grid.appendChild(set42);

                        outputText.innerHTML = "All tiles are matched!";
		    }
		});
	    } else {
                previousTile.id = "incorrect";
		currentTile.id = "incorrect";

		sleep(1000, function() {
		    previousTile.id = "unclicked";
		    currentTile.id = "unclicked";
		});
	    }
	}
    }
}
