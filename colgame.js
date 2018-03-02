
 //VARIABLES CREATED FROM RETRIEVED ELEMENTS
var squares = document.getElementsByClassName("square");
var squareLength = squares.length;
// display screen items (rgb#, pass/fail, etc.)
var header = document.querySelector("header");
var colorDisplay = document.querySelector("#colDisplay");
// buttons on horizontal stripe
var newColors = document.getElementById('newCol');
var screen = document.querySelector("#status");
var easy = document.getElementById('easy');
var hard = document.getElementById('hard');
// assign random colors to squares
var colors = [];
	//pick random 'chosen' color for squares --> pickedColor
	var pickedColor;
var modeButtons = document.querySelectorAll(".mode");
var j;

generateNewColors();
currentMode();


// SELECT NEW COLORS AND BEGINS GAME
hard.classList.toggle("selected", true);
function generateNewColors(){
		randomColor(squareLength);
		var pickColor = colors[Math.floor(Math.random()*squareLength)];
		pickedColor = pickColor;
		// pickedColor[0].textContent = "R";
		colorDisplay.textContent = pickedColor;
		selectTiles();
		
}

// ADD COLORS AND EVENT LISTENERS TO SQUARES
function selectTiles(){
	for(var i=0; i<squareLength; i++){
		// console.log(i, num);
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
		newColors.textContent = "New Colors";

		// add click listeners to squares
		squares[i].addEventListener("click",function(){
			if(this.style.backgroundColor != pickedColor){
				this.style.backgroundColor = "#242e35";
				screen.textContent = "Try Again"
				console.log("compare", this.style.backgroundColor, pickedColor)
			}
			else if (this.style.backgroundColor = pickedColor){
				// alert("yess correct");
				screen.textContent = "Correct!";
				header.style.backgroundColor = pickedColor;
				console.log(squareLength, );
				if(squareLength == 3){
					for(var i = 3; i<6; i++){
						squares[i].style.backgroundColor = "#242e35";
					}
				} 
				change2SameColors(squares, squareLength);
				newColors.textContent = "Play Again";
				console.log("compare", this.style.backgroundColor, pickedColor)

				
			} })
	}
}

// SELECT BETWEEN EASY OR HARD FUNCTION
	function currentMode(){
		
		for(j = 0; j <modeButtons.length; j++ ){
			modeButtons[j].addEventListener("click", function(){
				modeButtons[0].classList.remove("selected");
				modeButtons[1].classList.remove("selected");
				this.classList.add("selected");
				console.log(this);

				if (this.textContent == "Easy"){
					squareLength = 3;
					for(var j = 3; j<6; j++){
						squares[j].style.backgroundColor = "#242e35";
					}
				}
				else if (this.textContent == "Hard"){
					squareLength = 6;
				}
				generateNewColors();
				selectTiles();
			})
		}

	}
		// easy.addEventListener("click", function(){
	// 	easy.classList.toggle("selected", true);
	// 	hard.classList.toggle("selected", false);
	// 	squareLength = 3;
	// 	generateNewColors();
	// 	selectTiles();
	// 	for(var i = 3; i<6; i++){
	// 		squares[i].style.backgroundColor = "#242e35";
	// 	}

	// })

	// hard.addEventListener("click", function(){
	// 	hard.classList.toggle("selected", true);
	// 	easy.classList.toggle("selected", false);
	// 	squareLength = 6;
	// 	generateNewColors();
	// 	selectTiles();
	// })
	
// CREATE FUNCTIONS TO CREATE AND CHANGE COLORS
	function change2SameColors(color, squareNum){
		for(var i=0; i<squareNum; i++){
			color[i].style.backgroundColor = pickedColor;
		}
	}

	function randomColor(num){
		for(var i=0; i<num; i++){
			colors[i] = "rgb("+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+", "+Math.floor(Math.random()*256)+")"
		}
		return colors;
	}

// PLAY AGAIN - NEW COLOR BUTTON
	newColors.addEventListener("click",function(){
		generateNewColors();
		header.style.backgroundColor = "#346f99";
		screen.textContent = "  ";
	})
