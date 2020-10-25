window.onload = function() {
    var grid = document.getElementById("puzzle-grid");
    var numChildren = grid.childElementCount;
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
