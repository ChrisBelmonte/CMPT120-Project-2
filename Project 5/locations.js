var score = 0;
var north = true;
var west = true;
var east = true;
var south = true;
var userLocation = 0;
// above is location. below  is items.
var getKey = false;
var getDrink = false;
var getMoney = false;
var getCrowbar = false;

function btnNorth() {
	switch(userLocation) {
		case 0 : //approaching store
			userLocation = 1;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
		case 1 : // store door
			userLocation = 8;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
		case 8 : // store inside
			userLocation = 9;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('W').style.visibility ='visible';
			document.getElementById('E').style.visibility ='visible';
			break;
		case 9 : // security door
			userLocation = 12;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
		case 4 : // behind house
			userLocation = 0;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('W').style.visibility ='visible';
			document.getElementById('E').style.visibility ='visible';
			break;
		case 6 : // woods
			userLocation = 4;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
		case 2 :
			updateDisplay(userMove[100]);
			break;
		case 5 :
			updateDisplay(userMove[100]);
			break;
		case 3 :
			updateDisplay(userMove[100]);
			break;
		case 7 :
			updateDisplay(userMove[100]);
			break;
		case 10 :
			updateDisplay(userMove[100]);
			break;
		case 11 :
			updateDisplay(userMove[100]);	
			break;
		case 12 :
			updateDisplay(userMove[100]);
			break;
		}    
		if (north === true) {
			score = score + 5; 
			north = false;
		}          
}
  
function btnWest() {
    switch(userLocation) {
	 	case 0 : // home depot
			userLocation = 2;
            updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);		
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			break;
		case 2 : // crowbar
			userLocation = 5;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			break;
		case 9 : // cash register
			userLocation = 10;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			break;
		case 11 : // store center
			userLocation = 9;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('N').style.visibility ='visible';
			document.getElementById('S').style.visibility ='visible';
			break;
		case 3 : // placeholder
			userLocation = 0;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('N').style.visibility ='visible';
			document.getElementById('S').style.visibility ='visible';
			break;
		case 7 : // rebelious
			userLocation = 3;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			break;
		case 1 :
			updateDisplay(userMove[100]);
			break;
		case 8 :
			updateDisplay(userMove[100]);	
			break;
		case 12 :
			updateDisplay(userMove[100]);
			break;
		case 4 :
			updateDisplay(userMove[100]);	
			break;
		case 6 :
			updateDisplay(userMove[100]);
			break;
		}  
		if (west === true) {
			score = score + 5; 
			west = false;
		} 
}

function btnEast() {
    switch(userLocation) {
		case 0 :
			userLocation = 3; // placeholder
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			break;
		case 3 : // rebel
			userLocation = 7; 
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			break;
		case 9 : // drinks
			userLocation = 11;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			break;
		case 10 : // center
			userLocation = 9;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('N').style.visibility ='visible';
			document.getElementById('S').style.visibility ='visible';
			break;
		case 2 : // center
			userLocation = 0;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);
			document.getElementById('N').style.visibility ='visible';
			document.getElementById('S').style.visibility ='visible';
			break;
		case 5 : //crowbar
			userLocation = 2;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			break;
		case 1 :
			updateDisplay(userMove[100]);
			break;
		case 8 :
			updateDisplay(userMove[100]);
			break;
		case 12 :
			updateDisplay(userMove[100]);
			break;
		case 4 :
			updateDisplay(userMove[100]);
			break;
		case 6 :
			updateDisplay(userMove[100]);
			break;
		}  
		if (east === true) {
			score = score + 5;
			east = false; 
		} 
    
}

function btnSouth() {
    switch(userLocation) {
		case 0 : // back of house
			userLocation = 4;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
		case 4 : // woods
			userLocation = 6;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
		case 9 : // door
			userLocation = 8;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			break;
		case 12 : // center of store
			userLocation = 9;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('W').style.visibility ='visible';
			document.getElementById('E').style.visibility ='visible';
			document.getElementById('N').style.visibility ='visible';
			break;
		case 1 : // center
			userLocation = 0;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('W').style.visibility ='visible';
			document.getElementById('E').style.visibility ='visible';
			break;
		case 8 : // store
			userLocation = 1;
			updateDisplay( userMove[userLocation].name + " " + userMove[userLocation].description);	
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
		case 2 :
			updateDisplay(userMove[100]);
			break;
		case 5 :
			updateDisplay(userMove[100]);
			break;
		case 3 :
			updateDisplay(userMove[100]);
			break;
		case 7 :
			updateDisplay(userMove[100]);
			break;
		case 10 :
			updateDisplay(userMove[100]);
			break;
		case 11 :
			updateDisplay(userMove[100]);
			break;
		} 
		if (south === true) {
			score = score + 5;
			south = false;
		} 
}      

function btn_go_click() {
    var ta = document.getElementById("txtCommand");
	switch (ta.value) {
		case "n" :
			btnNorth();
			break;
		case "w" :
			btnWest();
			break;
		case "e" :
			btnEast();
			break;
		case "s" :
			btnSouth();
			break;
		case "N" :
			btnNorth();
			break;
		case "W" :
			btnWest();
			break;
		case "E" :
			btnEast();
			break;
		case "S" :
			btnSouth();
			break;
		case "help" :
			var msg = "Type N, W, E, or S. Upper or lower case doesn't matter. If you find an item, type \"take item.\" Except don't type item, type the name of the item. For example, if you find a key, type \"take key\". If you do not want to type then you can use the buttons provided for you below."
			updateDisplay(msg);
			break;
		case "Help" :
			var msg = "Type N, W, E, or S. Upper or lower case doesn't matter. If you find an item, type \"take item.\" Except don't type item, type the name of the item. For example, if you find a key, type \"take key\". If you do not want to type then you can use the buttons provided for you below."
			updateDisplay(msg);
			break;
		case "take key" :
			if (userLocation == 4) {
				Item();
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				updateDisplay(msg);
			}
			break;
		case "Take key" :
			if (userLocation == 4) {
				Item();
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				updateDisplay(msg);
			}
			break;
		case "take cash" :
			if (userLocation === 10) {
				Item();
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				updateDisplay(msg);
			}
			break;
		case "Take cash" :
			if (userLocation === 10) {
				Item();
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				updateDisplay(msg);
			}
			break;
		case "take drink" :
			if (userLocation === 11) {
				Item();
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				updateDisplay(msg);
			}
			break;
		case "Take drink" :
			if (userLocation === 11) {
				Item();
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				updateDisplay(msg);
			}
			break;
		case "take crowbar" :
			if (userLocation === 5) {
				Item();
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				updateDisplay(msg);
			}
			break;
		case "Take crowbar" :
			if (userLocation === 5) {
				Item();
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				updateDisplay(msg);
			}
			break;
		default :
			var msg = "What you typed does not make sense! Type help if you need help.";
			updateDisplay(msg);
			break;
    }		
}

// these are global
var takeItem = new Array();
var userMove = new Array();
	
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
}
function loadLocs() {
	houseFront = new userLocate			(0, "CENTER OF MAP.", "You are in front of the house.", "");
	storeFront = new userLocate			(1, "STORE FRONT.", "There is a store further to the North. You should continue towards it.", "");
	homeDepot = new userLocate			(2, "HOME DEPOT ENTRANCE.", "You have approached a Home Depot. Continue West to enter.", "");
	moveEast = new userLocate			(3, "PLACEHOLDER.", "NOTHING IS HERE GO BACK WEST.", "");
	houseBack = new userLocate			(4, "HOUSE BACK.", "You are in the back of the house. There is a key back here.", "key");
	homeDepotCrowbar = new userLocate	(5, "HOME DEPOT STORE.", "Among many items, a crowbar sticks out the most. You think about the possibilities of having a crowbar and decide you want it. But it will cost you. You need to pay with something.", "crowbar");
	houseWoods= new userLocate			(6, "WOODS.", "You are standing in front of the woods. Nothing to see here, move along.", "");
	moveEast2 = new userLocate			(7, "YOU REBEL.", "You are a rebel. You ignored what I told you. You get nothing.", "");
	storeDoor = new userLocate 			(8, "STORE DOOR.", "You are standing at the door. The door is opened. Continue North to enter.", "");
	storeCenter = new userLocate		(9, "STORE CENTER.", "You are in the store. The place is empty. Go east to see the cash register. Head north to look at the security door. Go west to see the drinks. Go back south to leave the store.", ""); 
	storeCash = new userLocate			(10, "STORE REGISTER.", "You are at the cash register. You should take the cash. Maybe you can buy something with it. HINT: TYPE \"TAKE CASH\" INSTEAD OF TAKE MONEY. ", "money");
	storeDrinks = new userLocate		(11, "STORE DRINKS.", "You are in front of the drinks", "drink");
	storeSecurity = new userLocate		(12, "STORE SECURITY.", "The security door is locked. No use of going in there. Head back south to go to the center of the store.", "");
	invalidMove = new userLocate 		(100, "INVALID MOVE.", "You cannot go that way!", "");
	
	takeKey = new Item					(0, "KEY", "This may be used to open something!");
	takeMoney = new Item				(1, "MONEY", "You can buy something with this!");
	takeDrink = new Item				(2, "DRINK", "You feel refreshed!");
	takeCrowbar = new Item				(3, "CROWBAR", "You can probably open something with this.");

	userMove[0] = houseFront;
	userMove[1] = storeFront;
	userMove[2] = homeDepot;
	userMove[3] = moveEast;
	userMove[4] = houseBack;
	userMove[5] = homeDepotCrowbar;
	userMove[6] = houseWoods;
	userMove[7] = moveEast2;
	userMove[8] = storeDoor;
	userMove[9] = storeCenter;
	userMove[10] = storeCash;
	userMove[11] = storeDrinks;
	userMove[12] = storeSecurity;
	userMove[100] = invalidMove;

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
