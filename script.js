
// Declare variables at the beginning of your script
let time = 0; // initialize time to 0
let Number_of_moves = 0; // initialize moves to 0
let intervalID = null; // Variable to store the interval ID


function swapTiles(cell1, cell2){
	var temp = document.getElementById(cell1).className;
	document.getElementById(cell1).className = document.getElementById(cell2).className;
	document.getElementById(cell2).className = temp;
	Number_of_moves++; // increment moves when tiles are swapped
}

function shuffle() {
    
	// Reset variables
    time = 0;
	Number_of_moves = -16;
	
	//Use nested loops to access each cell of the 4x4 grid
	for (var row=1; row <=4; row++) //for each row of the 4x4 grid
	{
		//for each column in this row
		for(var column=1; column <=4; column++){
		//pick a random row 1 to 4
		var row2=Math.floor(Math.random()*4+1);
		//pick random column from 1 to 4
		var column2=Math.floor(Math.random()*4+1);
		
		swapTiles("cell"+row+column, "cell"+row2+column2); //swap the look & feel of both cells
		}  
	} 
	
	//where 1000 is the delay time, represented in milliseconds, before the specified function or code is executed. 1000ms = 1sec
				setTimeout(() => {Win()}, 1000); 
				
				// Clear the previous interval before setting a new one
				clearInterval(intervalID);
				
				// Increment time whenever a move is made (assuming your game updates time every second)
				// Set a new interval
				intervalID = setInterval(() => {
					time++;
					updateGameInfo();
				}, 1000);
}

function clickTile(row, column) {
	var cell = document.getElementById("cell"+row+column);
	var tile = cell.className;
	
	if(tile!="tile16") {
		//check if the white tile is on the right
		if(column<4) {
			if (document.getElementById("cell"+row+(column+1)).className=="tile16") {
				swapTiles("cell"+row+column, "cell"+row+(column+1));

				
				//where 1000 is the delay time, represented in milliseconds, before the specified function or code is executed. 1000ms = 1sec
				setTimeout(() => {Win()}, 1000); 
				
				// Clear the previous interval before setting a new one
				clearInterval(intervalID);
				
				// Increment time whenever a move is made (assuming your game updates time every second)
				// Set a new interval
				intervalID = setInterval(() => {
					time++;
					updateGameInfo();
				}, 1000);
				
				return;
			}
		}
	
		//check if the white tile is in the left
		if(column > 1) {
			if(document.getElementById("cell"+row+(column-1)).className=="tile16"){
				swapTiles("cell"+row+column,"cell"+row+(column-1));
				
				//where 1000 is the delay time, represented in milliseconds, before the specified function or code is executed. 1000ms = 1sec
				setTimeout(() => {Win()}, 1000);
				return;
			}
		}
		//check if the white tile is above
		if(row > 1) {
			if(document.getElementById("cell"+(row-1)+column).className=="tile16") {
				swapTiles("cell"+row+column, "cell"+(row-1)+column);
				
				//where 1000 is the delay time, represented in milliseconds, before the specified function or code is executed. 1000ms = 1sec
				setTimeout(() => {Win()}, 1000);
				return;
			}
		}
		
		//check if the white tile is below
		if(row < 4) {
			if(document.getElementById("cell"+(row+1)+column).className=="tile16") {
				swapTiles("cell"+row+column, "cell"+(row+1)+column);
				
				//where 1000 is the delay time, represented in milliseconds, before the specified function or code is executed. 1000ms = 1sec
				setTimeout(() => {Win()}, 1000);
				return;
		
			}
		}
	}
}

// simple game game function with one tile out of position
function simpleGame() {
    // Reset variables
    time = 0;
    Number_of_moves = -1;

    // Creates an ordered puzzle
    for (var row = 1; row <= 4; row++) {
        for (var column = 1; column <= 4; column++) {
            var tileNumber = (row - 1) * 4 + column;
            document.getElementById("cell" + row + column).className = "tile" + tileNumber;
        }
    }

    // Randomly swaps one tile to create a simple game
    var randomRow = Math.floor(Math.random() * 4) + 1;
    var randomColumn = Math.floor(Math.random() * 4) + 1;
    swapTiles("cell" + randomRow + randomColumn, "cell44"); // Swap with the empty tile
	
	 
	//where 1000 is the delay time, represented in milliseconds, before the specified function or code is executed. 1000ms = 1sec
				setTimeout(() => {Win()}, 1000); 
				
				// Clear the previous interval before setting a new one
				clearInterval(intervalID);
				
				// Increment time whenever a move is made (assuming your game updates time every second)
				// Set a new interval
				intervalID = setInterval(() => {
					time++;
					updateGameInfo();
				}, 1000);
}

function updateGameInfo() {
    // Update the displayed time and number of moves
    document.getElementById("time").innerText = time;
    document.getElementById("moves").innerText = Number_of_moves;
}

function Win()
{
//Write some code logic here that determines if the tiles are all in order, hence the puzzle is won. If so, alert to the user that they won.
	if( //first row
	document.getElementById("cell11").className=="tile1"
	&&
	document.getElementById("cell12").className=="tile2"
	&&
	document.getElementById("cell13").className=="tile3"
	&&
	document.getElementById("cell14").className=="tile4"
	&& //second row
	document.getElementById("cell21").className=="tile5"
	&&
	document.getElementById("cell22").className=="tile6"
	&&
	document.getElementById("cell23").className=="tile7"
	&&
	document.getElementById("cell24").className=="tile8"
	&& //third row
	document.getElementById("cell31").className=="tile9"
	&&
	document.getElementById("cell32").className=="tile10"
	&&
	document.getElementById("cell33").className=="tile11"
	&&
	document.getElementById("cell34").className=="tile12"
	&& //fourth row
	document.getElementById("cell41").className=="tile13"
	&&
	document.getElementById("cell42").className=="tile14"
	&&
	document.getElementById("cell43").className=="tile15"
	&&
	document.getElementById("cell44").className=="tile16" )
	
	{
	window.alert("Congratulations!!\n Amount spent on current game in seconds: " + time +"\n Number of moves so far: " + Number_of_moves +"\nWould you like to play again?")
	window.location.reload(); //Reload page upon confirmation
	}
}
