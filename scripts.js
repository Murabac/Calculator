
// Select all the from document using queryselectAll
let keys = document.querySelectorAll('#calculator span');
// Define operators
let operators = ['+', '-', 'x', '÷', '^'];
// Set decimal flag for use later
let decimalAdded = false;

// loop through all keys
for(let i = 0; i < keys.length; i++) {
  //add onclick event to the keys
	keys[i].onclick = function(e) {
		// Get the input and button values
		let input = document.querySelector('.screen');
		let inputVal = input.innerHTML;
		let btnVal = this.innerHTML;

		// If clear key is pressed, erase everything
		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}

		// If equal key is pressed, calculate and display the result
		else if(btnVal == '=') {
			let equation = inputVal; //append equation to letiable
			let lastChar = equation[equation.length - 1]; //target the end of the eval string

			// Use regex to replace all instances of x, ÷, ^ with *, / and **
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

			//Use regex to remove decimals from the end of an equation
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');

			// use javascript's eval function to get the result

			if(equation)
				input.innerHTML = eval(equation);
			  decimalAdded = false;
		}

		// Javascript checks

    // No two operators should be added consecutively.
		else if(operators.indexOf(btnVal) > -1) {
			// Get the last character from the equation
			let lastChar = inputVal[inputVal.length - 1];

			// Only add operator if input is not empty
			if(inputVal != '' && operators.indexOf(lastChar) == -1)
				input.innerHTML += btnVal;

			// Allow minus operator if the string is empty
			else if(inputVal == '' && btnVal == '-')
				input.innerHTML += btnVal;

			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}

			decimalAdded =false;
		}
    // allow decimal point input
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}

		// if any other key is pressed, just append it after the decimal
		else {
			input.innerHTML += btnVal;
		}

		// prevent page jumps
		e.preventDefault();
	}
}

//adding keyboard input functionality
document.onkeydown = function(event) {

	var key_press = String.fromCharCode(event.keyCode);
	var key_code = event.keyCode;
	var key = event.key;
	var input = document.querySelector('.screen');
	var inputVal = input.innerHTML;
	var btnVal = this.innerHTML;
  var lastChar = inputVal[inputVal.length - 1];
  var equation = inputVal;
	// Using regex to replace all instances of x, ÷, ^ with *, / and ** respectively.
	equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');

 // Target each keypress and update the input screen

    if(key_press==1) {
      input.innerHTML += key_press;
  }
    if(key_press==2) {
      input.innerHTML += key_press;
  }
    if(key_press==3 || key_code == 32) {
      input.innerHTML += key_press;
  }
    if(key_press==4) {
      input.innerHTML += key_press;
  }
    if(key_press==5) {
      input.innerHTML += key_press;
  }
    if(key_press==6 && event.shiftKey == false) {
      input.innerHTML += key_press;
  }
    if(key_press==7) {
      input.innerHTML += key_press;
  }
    if(key_press==8 && event.shiftKey == false) {
      input.innerHTML += key_press;
  }
    if(key_press==9) {
      input.innerHTML += key_press;
  }
    if(key_press==0) {
      input.innerHTML += key_press;
  }
	if(key == "+") {
		input.innerHTML += key;
}
if(key == "x") {
	input.innerHTML += key;
}
if(key == "/") {
	input.innerHTML += key;
}
if(key == "-") {
	input.innerHTML += key;
}

    if(key_code==13 || key_code==187 && event.shiftKey == false) {
      input.innerHTML = eval(equation);
      //reset decimal added flag
      decimalAdded =false;
  }
    if(key_code==8 || key_code==46 || key == "C") {
			input.innerHTML = '';
			decimalAdded = false;
  }
	else {
		return
	}
}

window.addEventListener('keydown', function(e) {
let keyPress = String.fromCharCode(event.keyCode);
let keyCode = e.key;
const key = document.querySelector(`span[data-key="${keyPress}"]`);
console.log(keyCode);
if(!key)return;
key.classList.add("active");

});

window.addEventListener('keyup', function(e) {
let keyPress = String.fromCharCode(event.keyCode);
let keyCode = e.key;
const key = document.querySelector(`span[data-key="${keyPress}"]`);
if(!key)return;
key.classList.remove("active");
console.log(key);
});
