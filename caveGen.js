// CaveGen test.

var world = function(width, height)  {
	this.cwidth = width;
	this.cheight = height;
	var tile;
	this.map = [];
	for (var i =0; i <= this.cwidth; i++) {
		tile = Math.round(Math.random(-1,1));
		if (tile === 1) { tile = '#'} else {tile = ' ';}
		this.map.push([]);
		for (var j = 0; j <= this.cheight; j++)
		{
			tile = Math.round(Math.random(-1,1));
			if (tile === 1) { tile = '#'} else {tile = ' ';}
			this.map[i].push(tile);
			console.log(tile);
		}
		console.log(tile);
	}

	this.printMap = function() {
		for (i in this.map) {console.log(this.map[i].join(""));}
	}
}



var smallCave = new world(10,10);

var board = document.getElementsByClassName("cave");
board.innerHTML = ("<p>shite</p>");

