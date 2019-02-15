let $boardPositions = document.querySelectorAll('.board-position');
let $allPieces = document.querySelectorAll('.piece');
let player1ReorderKeys = [3,2,1,0,7,8,9,10,11,12,13,14,6,5,4];
let presetPos1 = [];
let player2ReorderKeys = [11,10,9,8,0,1,2,3,4,5,6,7,14,13,12];
let presetPos2 = [];

let roll;
let turn = 0;
let currentPlayer; //binary numeric of player (1 & 2)
let currentPiece;
let currentPosition;
let player1Spaces = [];
let player2Spaces = [];

populateP1Spaces();
populateP2Spaces();
assignPieceCheck();
addReset();
spaceEventListener();

function populateP1Spaces(){
	player1Spaces.push(document.querySelectorAll('.startBox')[0])
	$boardPositions.forEach(function(el){
		if (el.id.includes('A') || el.id.includes('N')){
			presetPos1.push(el);
		}
	})
	for (let i = 0; i<player1ReorderKeys.length; i++){
		player1Spaces.push(presetPos1[player1ReorderKeys[i]])

	}
}

function populateP2Spaces(){
	player2Spaces.push(document.querySelectorAll('.startBox')[1])
	$boardPositions.forEach(function(el){
		if (el.id.includes('B') || el.id.includes('N')){
			presetPos2.push(el);
		}
	})
	for (let i = 0; i<player2ReorderKeys.length; i++){
		player2Spaces.push(presetPos2[player2ReorderKeys[i]])
	}
}

function rollDice(){ // Generate 4 rolls of either 0 or 1
	let rollArray = [];
	for (let roll = 0; roll<4; roll++){
		rollArray.push(Math.round(Math.random()));
	}
	return rollArray;
}

function addRolls(){ //add the values of each roll (from rollDice) together
	let rollArray = rollDice();
	let sum = 0;
	for (let i = 0; i<rollArray.length; i++){
		sum = sum + rollArray[i];
	}
	roll = sum;
	return sum;
}

function incrementTurn(){
	currentPiece = null;
	turn++;
	roll = null;
	document.querySelector('.roll-display').innerHTML = " - ";
	document.querySelector('.roll-button').setAttribute('onclick', "displayRoll()");
	showPlayer();
}

function displayRoll(){
	addRolls();
	document.querySelector('.roll-display').innerHTML = roll
	document.querySelector('.roll-button').onclick = "";
	showPlayer();
	roll === 0 ? window.setTimeout(incrementTurn(),3000) : false; // not working, need to fix
}

function showPlayer(){
	turn % 2 === 0 ? displayPlayer1() : displayPlayer2();
}

function checkPlayer(){
	return (turn % 2 + 1 === currentPlayer ? true : false);
}

function displayPlayer1(){
	document.querySelector('.display-turn').innerHTML = 'Player 1';
	currentPlayer = 1;
}

function displayPlayer2(){
	document.querySelector('.display-turn').innerHTML = 'Player 2';
	currentPlayer = 2;
}

function checkPiece(event){
	let piece = null;
	if (event.path[0].classList[1].slice(-1) === "1"){ //takes node, gets array of classes, second item is player reference, the last character differentiates player
		piece = 1;
	}else if (event.path[0].classList[1].slice(-1) === "2"){ //takes node, gets array of classes, second item is player reference, the last character differentiates player
		piece = 2;
	}
	if (piece === currentPlayer ? true : invalidMove()){ // checks to see if the piece belongs to the current player
		currentPiece = event.path[0];
	}
}

function checkValidSpace(event){
	if (currentPiece.classList[1].slice(-1) === currentPlayer.toString()){ //matches last character of class attr of selected piece to the currentPlayer value (as string)
		let check1 = checkMoveValidity(event) === true ? true : invalidMove();
		let check2 = checkSpaceNotOccupied(event);
		currentPosition = event.path[0];
		let check3 = checkRollMatch(event) === true ? true : invalidMove();
		if (check1 === true && check2 === true && check3 === true){
			movePiece();
		}
	}

}

function checkMoveValidity(event){
	let test;
	if (currentPlayer === 1){
		player1Spaces.forEach(function(el){
			if (event.path[0] === el){
				test = true
				return test;
			}
			return test;
		})
	}else{
		player2Spaces.forEach(function(el){
			if (event.path[0] === el){
				test = true;
				return test;
			}
			return test;
		})
	}return test
}

function checkSpaceNotOccupied(event){ //works either on end-space OR occupying piece removal, but not both.
	console.log(event.path[0].childNodes);
	if (event.path[0].childNodes.length > 1){
		console.log(event);
		let playerId = event.path[0].childNodes[1].className.slice(-1);
		console.log(playerId);
		playerId === currentPlayer ? invalidMove() : removePiece(event);
	}else{
		return true; 		
	}
}

function checkRollMatch(event){
	if (currentPlayer === 1){
		let num1 = player1Spaces.indexOf(event.path[0]);
		let num2 = player1Spaces.indexOf(currentPiece.parentNode);
		return (num1 - num2 === roll);
	}else {
		let num1 = player2Spaces.indexOf(event.path[0]);
		let num2 = player2Spaces.indexOf(currentPiece.parentNode);
		return (num1 - num2 === roll);
	}
}

function removePiece(event){ // works correctly, but only if clicking on position, which is difficult because piece almost completely covers it
	let existingPiece = event.path[0].childNodes;
	console.log('existingPiece ' + existingPiece);
	let existingPiecePlayer = existingPiece[0].classList[1].slice(-1);
	console.log('existingPiecePlayer ' + existingPiecePlayer)
	let player1Start = document.querySelectorAll('.startBox')[0];
	let player2Start = document.querySelectorAll('.startBox')[1];
	let existingPlayerStart = existingPiecePlayer === "1" ? player1Start : player2Start;
	console.log('existingPlayerStart '+ existingPlayerStart);
	existingPlayerStart.appendChild(existingPiece[0]);
	movePiece()
}

function movePiece(){
	let endBox;
	if ((currentPosition.classList[1] === "end-space") && currentPlayer === 1){
		endBox = document.querySelectorAll('.endBox')[0];
		endBox.appendChild(currentPiece);
		endBox.innerHTML = endBox.childElementCount; // removes the element, so the text stays at one
		checkWin();
	}else if ((currentPosition.classList[1] === "end-space") && currentPlayer === 2){
		endBox = document.querySelectorAll('.endBox')[1];
		endBox.appendChild(currentPiece);
		endBox.innerHTML = endBox.childElementCount;
		checkWin();
	}else{
		console.log(currentPiece);
		currentPosition.appendChild(currentPiece);
	}
	incrementTurn();
}

function invalidMove(){
	return false;
}

function checkWin(){
	let winDisplay = document.querySelector('.display-turn');
	if (document.querySelectorAll('.endBox')[0].childElementCount === 6){
		winDisplay.style.backgroundColor = 'rgb(0, 0, 200)';
		winDisplay.innerHTML = "1 WINS";
	}else if (document.querySelectorAll('.endBox')[1].childElementCount === 6){
		winDisplay.style.backgroundColor = 'rgb(200, 0, 0)';
		winDisplay.innerHTML = "2 WINS";
	}
}

function reset(){
	if (confirm('Are you sure you want to Reset Everything?')){
		location.reload();
	}
}

function addReset(){
	document.querySelector('.reset').addEventListener('click', reset);
}

function assignPieceCheck(){
	$allPieces.forEach(function(el){
		el.addEventListener('click', checkPiece);
	})
}

function spaceEventListener(){
	let allSpaces = document.querySelectorAll('.board-position');
	allSpaces.forEach(function(el){
		el.addEventListener('click', checkValidSpace);
	})
}