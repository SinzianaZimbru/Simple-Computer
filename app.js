
// Declare our variables

let buton1 = document.querySelector('#digit1');
let buton2 = document.querySelector('#digit2');
let buton3 = document.querySelector('#digit3');
let buton4 = document.querySelector('#digit4');
let buton5 = document.querySelector('#digit5');
let buton6 = document.querySelector('#digit6');
let buton7 = document.querySelector('#digit7');
let buton8 = document.querySelector('#digit8');
let buton9 = document.querySelector('#digit9');
let buton0 = document.querySelector('#digit0');

let multiply = document.querySelector('#multiply');
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let equal = document.querySelector("#equal");
let show = document.querySelector(".show");
let remove = document.querySelector("#remove");


let number1 = 0;
let number2 = 0;
let falseVariable = false;

buton1.addEventListener('click', function(){
	buildNumber(1);
});
buton2.addEventListener('click', function(){
	buildNumber(2);
});
buton3.addEventListener('click', function(){
	buildNumber(3);
});
buton4.addEventListener('click', function(){
	buildNumber(4);
});
buton5.addEventListener('click', function(){
	buildNumber(5);
});
buton6.addEventListener('click', function(){
	buildNumber(6);
});
buton7.addEventListener('click', function(){
	buildNumber(7);
});
buton8.addEventListener('click', function(){
	buildNumber(8);
});
buton9.addEventListener('click', function(){
	buildNumber(9);
});
buton0.addEventListener('click', function(){
	buildNumber(0);
});

multiply.addEventListener('click', function(){
	falseVariable = true;
	operationNumber = 'multiply';
});
plus.addEventListener('click', function(){
	falseVariable = true;
	operationNumber = 'plus';
});
minus.addEventListener('click', function(){
	falseVariable = true;
	operationNumber = 'minus';
});


equal.addEventListener('click', function(){
	applyOperation(operationNumber);
});
remove.addEventListener('click', function(){
	show.innerHTML = 0;
	number1 = 0;
	number2 = 0;
});	


function buildNumber(number){
	if (falseVariable === false) {
		number1 = number1*10 + number;
		show.innerHTML = number1;
	}else{
		number2 = number2*10 + number;
		show.innerHTML = number2;
	}
}


function applyOperation(){
	if (operationNumber === 'multiply') {
		show.innerHTML = number1 * number2;
		falseVariable = false;
		number1 = 0;
		number2 = 0;
	}else if(operationNumber === 'plus'){
		show.innerHTML = number1 + number2;
		falseVariable = false;
		number1 = 0;
		number2 = 0;
	}else if(operationNumber === 'minus'){
		show.innerHTML = number1 - number2;
		falseVariable = false;
		number1 = 0;
		number2 = 0;
	}
}