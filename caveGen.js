// CaveGen test.

var caveTiles = function(width, height)  {
	this.cwidth = width;
	this.cheight = height;
	this.wallCount = 0;
	this.floorCount = 0;
	var tile;
	this.map = [];
	for (var i =0; i <= this.cwidth; i++) {
		tile = Math.round(Math.random(-1,1));	
		this.map.push([]);
		for (var j = 0; j <= this.cheight; j++)
		{
			tile = Math.round(Math.random(-1,1));
			if (tile === 1) { tile = '#';} else {tile = ' ';}
			if (tile === '#') {this.wallCount++;} else {this.floorCount++;}
			this.map[i].push(tile);
			// console.log(tile);
		}
		// console.log(tile);
	}

	this.printMap = function() {
		for (i in this.map) {console.log(this.map[i].join(""));}
	}
}
	
	this.smoothMap = function() {
		// First get a list of tiles to change THEN perform the change after all changes are determined.
		
	}



var smallCave = new caveTiles(10,10);

var board = document.getElementsByClassName("cave");
board.innerHTML = ("<p>shite</p>");

