var score = 0;
var north = true;
var west = true;
var east = true;
var south = true;
var userLocation = 0;
// above is location. below  is items.
var key = false;
var drink = false;
var money = false;
var crowbar = false;
function btnNorth() {
    switch (userLocation) { 
		case 0 :
			var msg = "You have walked North. There is a convenience store further to the North. You should approach the door.?";
			updateDisplay(msg);
			userLocation = 1;
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
		case 1 :
			userLocation = 8;
			if (key === false) {
				var msg = "The door is locked. Perhaps if you had a key?";
				updateDisplay(msg);
			} else if (key === true) {
				var msg = "The door has unlocked. Continue north to enter the store.";
				updateDisplay(msg);
			}
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
		case 8 :
			if (key === true) {
				var msg = "You are in the store. The place is empty. Go east to see the cash register. Head north to look at the security door. Go west to see the drinks. Go back south to leave the store.";
				updateDisplay(msg);
				userLocation = 9;
				document.getElementById('W').style.visibility ='visible';
				document.getElementById('E').style.visibility ='visible';
			} else if (key === false) {
				var msg = "You do not have the key to enter the store. Go find the key! You are standing at the door.";
				updateDisplay(msg);
				userLocation = 8;
			}
			break;
		case 9 :
			var msg = "The security door is locked. No use of going in there. Head back south to go to the center of the store.";
			updateDisplay(msg);
			userLocation = 12;
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
		case 4 : 
			var msg = "You have walked back North. You are back in front of the house.";
			updateDisplay(msg);
			userLocation = 0;
			document.getElementById('W').style.visibility ='visible';
			document.getElementById('E').style.visibility ='visible';
			break;
		case 6 :
			userLocation = 4;
			if (key === false) {
				var msg = "You have walked back North. You are behind the house. The key is still on the porch.";
				updateDisplay(msg);
			}
			else if (key === true) {
				var msg = "You have walked back North. You are behind the house.";
				updateDisplay(msg);
			}
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
		case 2 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 5 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 3 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 7 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 10 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 11 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 12 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		}    
		if (north === true) {
			score = score + 5; 
			north = false;
		}          
}
  
function btnWest() {
    switch(userLocation) {
		case 0 :
			var msg = "There is a Home Depot. Continue west to go inside and look around.";
			updateDisplay(msg);
			userLocation = 2;
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			break;
		case 2 : 
			var msg = "Among many items, a crowbar sticks out the most. You think about the possibilities of having a crowbar and decide you want it. But it will cost you. You need to pay with something.";
			updateDisplay(msg);
			userLocation = 5;
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			break;
		case 9 :
			var msg = "You are at the cash register. You should take the money. Maybe you can buy something with it.";
			updateDisplay(msg);
			userLocation = 10;
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			break;
		case 11 :
			var msg = "You have returned to the center of the store.";
			updateDisplay(msg);
			userLocation = 9;
			document.getElementById('N').style.visibility ='visible';
			document.getElementById('S').style.visibility ='visible';
			break;
		case 3 :
			var msg = "You have walked back West. You are back in front of the house.";
			updateDisplay(msg);
			userLocation = 0;
			document.getElementById('N').style.visibility ='visible';
			document.getElementById('S').style.visibility ='visible';
			break;
		case 7 :
			var msg = "You have walked back West.";
			updateDisplay(msg);
			userLocation = 3;
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			break;
		case 1 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 8 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 12 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 4 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 6 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
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
			var msg = "You have walked East.";
			updateDisplay(msg);
			userLocation = 3;
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			break;
		case 3 :
			var msg = "You have walked further East.";
			updateDisplay(msg);
			userLocation = 7;
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			break;
		case 9 :
			var msg = "You are standing in front of the drinks. You should take one.";
			updateDisplay(msg);
			userLocation = 11;
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			break;
		case 10 :
			var msg = "You have returned to the center of the store.";
			updateDisplay(msg);
			userLocation = 9;
			document.getElementById('N').style.visibility ='visible';
			document.getElementById('S').style.visibility ='visible';
			break;
		case 2 :
			var msg = "You have walked back East. You are back in front of the house.";
			updateDisplay(msg);
			userLocation = 0;
			document.getElementById('N').style.visibility ='visible';
			document.getElementById('S').style.visibility ='visible';
			break;
		case 5 :
			var msg = "You have walked back East.";
			updateDisplay(msg);
			userLocation = 2;
			document.getElementById('N').style.visibility ='hidden';
			document.getElementById('S').style.visibility ='hidden';
			break;
		case 1 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 8 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 12 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 4 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 6 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		}  
		if (east === true) {
			score = score + 5;
			east = false; 
		}
    
}

function btnSouth() {
    switch(userLocation) {
		case 0 :
			userLocation = 4;
			if (key === false) {
				var msg = "You have walked towards the back of the house. There is a key on the porch.";
				updateDisplay(msg);
			}
			else if (key === true) {
				var msg = "You have walked towards the back of the house.";
				updateDisplay(msg);
			}
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
		case 4 :
			var msg = "There are only woods here. Head back north.";
			updateDisplay(msg);
			userLocation = 6;
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
		case 9 :
			var msg = "You have returned to outside of the store. You are in front of the door again.";
			updateDisplay(msg);
			userLocation = 8;
			break;
		case 12 :
			var msg = "You have returned to the center of the store.";
			updateDisplay(msg);
			userLocation = 9;
			document.getElementById('W').style.visibility ='visible';
			document.getElementById('E').style.visibility ='visible';
			document.getElementById('N').style.visibility ='visible';
			break;
		case 1 :
			var msg = "You have walked back South. You are back in front of the house.";
			updateDisplay(msg);
			userLocation = 0;
			document.getElementById('W').style.visibility ='visible';
			document.getElementById('E').style.visibility ='visible';
			break;
		case 8 :
			var msg = "You have walked back South.";
			updateDisplay(msg);
			userLocation = 1;
			document.getElementById('W').style.visibility ='hidden';
			document.getElementById('E').style.visibility ='hidden';
			break;
		case 2 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 5 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 3 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 7 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 10 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
			break;
		case 11 :
			var msg = "You cannot walk that way!";
			updateDisplay(msg);
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
				items();
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				updateDisplay(msg);
			}
			break;
		case "Take key" :
			if (userLocation == 4) {
				items();
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				updateDisplay(msg);
			}
			break;
		case "take cash" :
			if (userLocation === 10) {
				items();
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				updateDisplay(msg);
			}
			break;
		case "Take cash" :
			if (userLocation === 10) {
				items();
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				updateDisplay(msg);
			}
			break;
		case "take drink" :
			if (userLocation === 11) {
				items();
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				updateDisplay(msg);
			}
			break;
		case "Take drink" :
			if (userLocation === 11) {
				items();
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				updateDisplay(msg);
			}
			break;
		case "take crowbar" :
			if (userLocation === 5) {
				items();
			} else {
				var msg = "What you typed does not make sense! Type help if you need help.";
				updateDisplay(msg);
			}
			break;
		case "Take crowbar" :
			if (userLocation === 5) {
				items();
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

function items() {
	var ta = document.getElementById("txtCommand");
	if (userLocation === 4 && key === false) {
		var msg = "You have taken the key.";
		updateDisplay(msg);
		key = true;	
	} else if (userLocation === 4 && key === true) {
		var msg = "You have already taken the key.";
		updateDisplay(msg);
	}	
	if (userLocation === 10 && money === false) {
		var msg = "You have taken the money.";
		updateDisplay(msg);
		money = true;
	} else if (userLocation === 10 && money === false) {
		var msg = "You have already taken the money.";
		updateDisplay(msg);
	}
	if (userLocation === 11 && drink === false) {
		var msg = "You took and drank your delicious Arizona Iced Tea! You feel refreshed.";
		updateDisplay(msg);
		drink = true;
	} else if (userLocation === 11 && drink === true) {
		var msg = "You have already taken a drink. You don't need another.";
		updateDisplay(msg);
	}
	if (money === true && userLocation === 5) {
		if (crowbar === false) {
			var msg = "You bought the crowbar.";
			updateDisplay(msg);
			crowbar = true;
		} else if (crowbar === true) {
			var msg = "You have already bought the crowbar. You don't need another.";
			updateDisplay(msg);
		}	
	} else if (money === false && userLocation === 5) {
		var msg = "You cannot buy the crowbar! Something else is required to buy it...";
		updateDisplay(msg);
	}	
}
	
function start() {
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
