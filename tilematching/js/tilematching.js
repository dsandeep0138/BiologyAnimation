window.onload = function() {
    var grid = document.getElementById("puzzle-grid");
    var numChildren = grid.childElementCount;

    // randomize the list
    for (i = numChildren; i >= 0; i--) {
        grid.appendChild(grid.children[Math.random() * i | 0]);
    }

    var set1 = document.querySelectorAll(".set1 .flip-tile-back");
    var set2 = document.querySelectorAll(".set2 .flip-tile-back");
    var set3 = document.querySelectorAll(".set3 .flip-tile-back");
    var set4 = document.querySelectorAll(".set4 .flip-tile-back");

    // clone the nodes, needed to display the correct matches
    set11 = set1[0].firstElementChild.cloneNode(true);
    set12 = set1[1].firstElementChild.cloneNode(true);
    set21 = set2[0].firstElementChild.cloneNode(true);
    set22 = set2[1].firstElementChild.cloneNode(true);
    set31 = set3[0].firstElementChild.cloneNode(true);
    set32 = set3[1].firstElementChild.cloneNode(true);
    set41 = set4[0].firstElementChild.cloneNode(true);
    set42 = set4[1].firstElementChild.cloneNode(true);

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

            // remove click listener to avoid clicking on the same tile
            this.removeEventListener("click", matchTile);
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

                        var node = document.createElement("li");
                        node.appendChild(set11);
                        grid.appendChild(node);

                        node = document.createElement("li");
                        node.appendChild(set21);
                        grid.appendChild(node);

                        node = document.createElement("li");
                        node.appendChild(set31);
                        grid.appendChild(node);

                        node = document.createElement("li");
                        node.appendChild(set41);
                        grid.appendChild(node);

                        node = document.createElement("li");
                        node.appendChild(set12);
                        grid.appendChild(node);

                        node = document.createElement("li");
                        node.appendChild(set22);
                        grid.appendChild(node);

                        node = document.createElement("li");
                        node.appendChild(set32);
                        grid.appendChild(node);

                        node = document.createElement("li");
                        node.appendChild(set42);
                        grid.appendChild(node);

                        outputText.innerHTML = "All tiles are matched!";
		    }
                });
	   } else {
                previousTile.id = "incorrect";
                currentTile.id = "incorrect";

                previousTile.addEventListener("click", matchTile);

                sleep(1000, function() {
                    previousTile.id = "unclicked";
                    currentTile.id = "unclicked";
                });
            }
        }
    }
}
