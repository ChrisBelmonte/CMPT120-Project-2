var score = 0;
var north = 0;
var south = 1;
var west = 2;
var east = 3;
var userLocation = 0;
// above is location. below  is items.
var getKey = false;
var getDrink = false;
var getMoney = false;
var getCrowbar = false;

function move(direction) {
	userLocate = nav[userLocation][direction];
	if (userLocate >= 0) {
		userLocation = userLocate;
		updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);
		buttonHide();
	} else {
		updateDisplay("You cannot go that way!");
	}
}

function btn_go_click() {
    var ta = document.getElementById("txtCommand");
	switch (ta.value) {
		case "n" :
			move(north);
			txtCommand.value = "";
			break;
		case "w" :
			move(west);
			txtCommand.value = "";
			break;
		case "e" :
			move(east);
			txtCommand.value = "";
			break;
		case "s" :
			move(south);
			txtCommand.value = "";
			break;
		case "N" :
			move(north);
			txtCommand.value = "";
			break;
		case "W" :
			move(west);
			txtCommand.value = "";
			break;
		case "E" :
			move(east);
			txtCommand.value = "";
			break;
		case "S" :
			move(south);
			txtCommand.value = "";
			break;
		case "help" :
			var msg = "Type N, W, E, or S. Upper or lower case doesn't matter. If you find an item, type \"take item.\" Except don't type item, type the name of the item. For example, if you find a key, type \"take key\". If you do not want to type then you can use the buttons provided for you below."
			txtCommand.value = "";
			updateDisplay(msg);
			break;
		case "Help" :
			var msg = "Type N, W, E, or S. Upper or lower case doesn't matter. If you find an item, type \"take item.\" Except don't type item, type the name of the item. For example, if you find a key, type \"take key\". If you do not want to type then you can use the buttons provided for you below."
			txtCommand.value = "";
			updateDisplay(msg);
			break;
		case "take key" :
			if (userLocation == 4) {
				Item();
				txtCommand.value = "";
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				txtCommand.value = "";
				updateDisplay(msg);
			}
			break;
		case "Take key" :
			if (userLocation == 4) {
				Item();
				txtCommand.value = "";
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				txtCommand.value = "";
				updateDisplay(msg);
			}
			break;
		case "take cash" :
			if (userLocation === 10) {
				Item();
				txtCommand.value = "";
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				txtCommand.value = "";
				updateDisplay(msg);
			}
			break;
		case "Take cash" :
			if (userLocation === 10) {
				Item();
				txtCommand.value = "";
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				txtCommand.value = "";
				updateDisplay(msg);
			}
			break;
		case "take drink" :
			if (userLocation === 11) {
				Item();
				txtCommand.value = "";
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				txtCommand.value = "";
				updateDisplay(msg);
			}
			break;
		case "Take drink" :
			if (userLocation === 11) {
				Item();
				txtCommand.value = "";
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				txtCommand.value = "";
				updateDisplay(msg);
			}
			break;
		case "take crowbar" :
			if (userLocation === 5) {
				Item();
				txtCommand.value = "";
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				txtCommand.value = "";
				updateDisplay(msg);
			}
			break;
		case "Take crowbar" :
			if (userLocation === 5) {
				Item();
				txtCommand.value = "";
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				txtCommand.value = "";
				updateDisplay(msg);
			}
			break;
		
		case "1 6 4 2" :
			Item(); // not an item, but keeping all if statements for puzzles or items together
			break;
		default :
			var msg = "What you typed does not make sense! Type help if you need help.";
			txtCommand.value = "";
			updateDisplay(msg);
			break;
    }		
}

// these are global
var takeItem = new Array();
var userMove = new Array();

var nav = 	new Array	(		  	/* N S W E */
	/* houseFront 0 */				  [1,4,2,3],
	/* storeFront 1 */				  [8,0,-1,-1],
	/* homeDepot 2 */				  [-1,-1,5,0],
	/* moveEast 3 */				  [-1,-1,0,7],
	/* houseBack 4 */				  [0,6,-1,-1],
	/* depotCrowbar 5 */			  [-1,-1,-1,2],
	/* houseWoods 6 */				  [4,-1,-1,-1],
	/* moveEast2 7 */				  [-1,-1,3,-1],
	/* storeDoor 8 */				  [9,1,-1,-1],
	/* storeCenter 9 */				  [12,8,10,11],
	/* storeCash 10 */				  [-1,-1,-1,9],
	/* storeDrinks 11 */		      [-1,-1,9,-1],
	/* storeSecurity 12 */			  [-1,9,-1,-1],
	/* insideSecurity 13 */			  [-1,12,-1,-1]
	);
	
function userLocate(id, name, description, item) {
	this.id = id;
	this.name = name;
	this.description = description;
	this.item = item;
	
	this.toString = function() {
		var retVal = description + "Items located here: " + item;	
		return retVal;
	} 
	
}

function Item(id, name, description) {
	this.id = id;
	this.name = name;
	this.description = description;
	
	this.toString = function() {
		var retVal = name + ": " + description;
		return retVal;
	}
	
	if (userLocation === 4 && getKey === false) {
		updateDisplay( "You have taken the " + takeItem[0].name + ". " + takeItem[0].description);
		getKey = true;	
	} else if (userLocation === 4 && getKey === true) {
		updateDisplay("You have already taken the " + takeItem[0].name);
	}	
	
	if (userLocation === 10 && getMoney === false) {
		updateDisplay( "You have taken the " + takeItem[1].name + ". " + takeItem[1].description);
		getMoney = true;
	} else if (userLocation === 10 && getMoney === true) {
		updateDisplay("You have already taken the " + takeItem[1].name);
	}
	
	if (userLocation === 11 && getDrink === false) {
		updateDisplay( "You have taken the " + takeItem[2].name + ". " + takeItem[2].description);
		getDrink = true;
	} else if (userLocation === 11 && getDrink === true) {
		updateDisplay("You have already taken the " + takeItem[2].name);
	}
	
	if (getMoney === true && userLocation === 5) {
		if (getCrowbar === false) {
			updateDisplay( "You have taken the " + takeItem[3].name + ". " + takeItem[3].description);
			getCrowbar = true;
		} else if (getCrowbar === true) {
			updateDisplay("You have already taken the " + takeItem[3].name);
		}	
	} else if (getMoney === false && userLocation === 5) {
		var msg = "You cannot buy the " + takeItem[3].name + "! Something else is required to buy it...";
		updateDisplay(msg);
	}

	if (userLocation === 12 && txtCommand.value === "1 6 4 2") {
		userLocate = 13;
		userLocation = userLocate;
		updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);
	} else if (userLocation === 12 && txtCommand.value !== "1 6 4 2") {
		var msg = "You have entered the wrong password! Try again or go find the hint somewhere else on the map!";
		updateDisplay(msg);
	} else if (txtCommand.value === "1 6 4 2") {
		var msg = "What you typed does not make sense! Type help if you need help.";
		txtCommand.value = "";
		updateDisplay(msg);
	}
}

function loadLocs() {
	houseFront = new userLocate			(0, "CENTER OF MAP.", "You are in front of the house.", "");
	storeFront = new userLocate			(1, "STORE FRONT.", "There is a store further to the North. You should continue towards it.", "");
	homeDepot = new userLocate			(2, "HOME DEPOT ENTRANCE.", "You have approached a Home Depot. Continue West to enter.", "");
	eastGust = new userLocate			(3, "GUSTY AREA.", "As you head east you feel a very strong gust coming up ahead. Continue east to enter the gust.", "");
	houseBack = new userLocate			(4, "HOUSE BACK.", "You are in the back of the house. There is a key back here.", "key");
	homeDepotCrowbar = new userLocate	(5, "HOME DEPOT STORE.", "Among many items, a crowbar sticks out the most. You think about the possibilities of having a crowbar and decide you want it. But it will cost you. You need to pay with something.", "crowbar");
	houseWoods= new userLocate			(6, "WOODS.", "You are standing in front of the woods. Nothing to see here, move along.", "");
	eastSecret = new userLocate			(7, "STRONG GUSTS.", "Through the very strong gusts, you hear a voice in the wind mutter \"one six four two.\"", "");
	storeDoor = new userLocate 			(8, "STORE DOOR.", "You are standing at the door. The door is opened. Continue North to enter.", "");
	storeCenter = new userLocate		(9, "STORE CENTER.", "You are in the store. The place is empty. Go east to see the cash register. Head north to look at the security door. Go west to see the drinks. Go back south to leave the store.", ""); 
	storeCash = new userLocate			(10, "STORE REGISTER.", "You are at the cash register. You should take the cash. Maybe you can buy something with it. HINT: TYPE \"TAKE CASH\" INSTEAD OF TAKE MONEY. ", "money");
	storeDrinks = new userLocate		(11, "STORE DRINKS.", "You are in front of the drinks", "drink");
	storeSecurity = new userLocate		(12, "STORE SECURITY.", "The security door is locked. There is a key pad. Maybe if you know the right combination you can get in. HINT: Enter the numbers in the text box and put spaces in between each number.", "");
	insideSecurity = new userLocate 	(13, "WINNER!!!!!", "You have gotten inside the security entrance. Sorry for all of those useless items! I was never able to make use of them. You have won the game! Congratulations! Feel free to just roam around or refresh to try again!", "");
	
	takeKey = new Item					(0, "KEY", "This may be used to open something!");
	takeMoney = new Item				(1, "MONEY", "You can buy something with this!");
	takeDrink = new Item				(2, "DRINK", "You feel refreshed!");
	takeCrowbar = new Item				(3, "CROWBAR", "You can probably open something with this.");

	userMove[0] = houseFront;
	userMove[1] = storeFront;
	userMove[2] = homeDepot;
	userMove[3] = eastGust;
	userMove[4] = houseBack;
	userMove[5] = homeDepotCrowbar;
	userMove[6] = houseWoods;
	userMove[7] = eastSecret;
	userMove[8] = storeDoor;
	userMove[9] = storeCenter;
	userMove[10] = storeCash;
	userMove[11] = storeDrinks;
	userMove[12] = storeSecurity;
	userMove[13] = insideSecurity;

	takeItem[0] = takeKey;
	takeItem[1] = takeMoney;
	takeItem[2] = takeDrink;
	takeItem[3] = takeCrowbar;
}

function showItems() { // cannot get it to work when bools are only true.
	if (getKey === true) {
		updateDisplay(takeItem[0])
	}
	else {
		var msg = "You have not found this item!"
		updateDisplay(msg);
	}
	if (getMoney === true) {
		updateDisplay(takeItem[1])
	}
	else {
		var msg = "You have not found this item!"
		updateDisplay(msg);
	}
	if (getDrink === true) {
		updateDisplay(takeItem[2])
	}
	else {
		var msg = "You have not found this item!"
		updateDisplay(msg);
	}
	if (getCrowbar === true) {
		updateDisplay(takeItem[3])
	}
	else {
		var msg = "You have not found this item!"
		updateDisplay(msg);
	}
}

function buttonHide() {
	switch (userLocation) {
		case 0 :
			document.getElementById('N').style.visibility ='visible';
			document.getElementById('S').style.visibility ='visible';
			document.getElementById('W').style.visibility ='visible';
			document.getElementById('E').style.visibility ='visible';
			break;
		case 1 :
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
			
		case 2 :
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			document.getElementById('W').style.visibility ='visible';
			break;
			
		case 3 :
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='visible';
			break;
			
		case 4 :
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='visible';
			break;
		
		case 5 :
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			document.getElementById('W').style.visibility ='hidden';
			break;
		
		case 6 :
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			break;
		
		case 7 :
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
		
		case 8 :
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
		
		case 9 :
			document.getElementById('N').style.visibility ='visible';
			document.getElementById('S').style.visibility ='visible';
			document.getElementById('W').style.visibility ='visible';
			document.getElementById('E').style.visibility ='visible';
			break;
		
		case 10 :
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			document.getElementById('W').style.visibility ='hidden';
			break;
		
		case 11 :
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
		
		case 12 :
			document.getElementById('N').style.visibility ='visible';
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='visible';
			break;
		case 13 :
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
			
		default :
			document.getElementById('N').style.visibility ='visible';
			document.getElementById('S').style.visibility ='visible';
			document.getElementById('W').style.visibility ='visible';
			document.getElementById('E').style.visibility ='visible';
			break;
		
	}
}

function start() {
	loadLocs();
	var msg = "Welcome to my game. You are standing on the porch outside of a house. This house is not your house, and you are not quite sure how you got here.";
	updateDisplay(msg);
}

function updateDisplay(msg) {
	var ta = document.getElementById("taGame");
	ta.value = msg + "\n" + ta.value;
}

function btnScore() {
	alert("Your score is: " + score);
}
