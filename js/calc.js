window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	let value = document.querySelectorAll('.value'),
		display = document.querySelector('.calc-display'),
		reset = document.querySelector('.calc-reset'),
		operand1 = 0,
		operand2 = 0,
		operand22 = 0,
		operator = '',
		operSec = '',
		resultIndex = 0,
		totalRes = 0,
		operatorSelect = document.querySelectorAll('.operator'),
		result = document.querySelector('.calc-result');

	function calc(op1, op2, oper) {
		switch(oper) {
			case "+":
				return op1 + op2;
			case "-":
				return op1 - op2;
			case "*":
				return op1 * op2;
			case "/":
				return op1 / op2;
			default:
				totalRes = 1;
				resetFunc();
				console.log('Не задан оператор, full reset');
		}
	}
	function fullResetFunc() {
		operand1 = 0;
		operand2 = 0;
		operator = '';
		display.innerHTML = 0;
		console.log('reset');
	}
	function resetMark() {
		for (let i = 0; i < operatorSelect.length; i++) {
			if (operatorSelect[i].classList.contains('active')) {
				operatorSelect[i].classList.remove('active');
			}
			operatorSelect[i].disabled = false;
		}
	}
	function resetFunc() {
		if (totalRes) {
			operand1 = 0;
			operand2 = 0;
			operand22 = 0;
			operator = '';
			operSec = '';
			display.innerHTML = 0;
			resultIndex = 0;
			totalRes = 0;
			resetMark();
			console.log('reset');
		}
		operand2 = 0;
		operator = '';
	}
	
	value.forEach(element => {
		
		element.addEventListener('click', function() {
			if (operator != '') {
				operand2 += this.getAttribute('data-value');
				operand2 = parseInt(operand2);
				display.innerHTML = operand1.toString() + operator.toString() + operand2.toString();
			} else {
				operand1 += this.getAttribute('data-value');
				operand1 = parseInt(operand1);
				display.innerHTML = operand1.toString();
			}
		});
	});
	operatorSelect.forEach(e => {
		e.addEventListener('click', function() {
			if (this.classList.contains('active')) {
				for (let i = 0; i < operatorSelect.length; i++ ) {
					operatorSelect[i].disabled = false;
				}
			} else {
				for (let i = 0; i < operatorSelect.length; i++ ) {
					operatorSelect[i].disabled = true;
				}
			}
			this.disabled = false;
			this.classList.toggle('active');
			operator = this.getAttribute('data-value');
			display.innerHTML = operand1.toString() + operator.toString();
			resultIndex = 0;
		});
	});

	result.addEventListener('click', function() {
		if (!resultIndex) {
			result = calc(operand1, operand2, operator);
			display.innerHTML = result;
			operand1 = result;
			operSec = operator;
			operand22 = operand2;
			resetMark();
		} else if (resultIndex > 0) {
			result = calc(operand1, operand22, operSec);
			operand1 = result;
			display.innerHTML = result;
			resetMark();
		}
		resetFunc();
		resultIndex = 1;
	});
	
	reset.addEventListener('click', function() {
		resultIndex = 0;
		totalRes = 1;
		resetFunc();
	});
	
});