document.addEventListener('DOMContentLoaded', function() {
	'use strict';
	
	let box = document.querySelector('.box'),
		price = document.querySelector('.price'),
		item = document.querySelectorAll('.item');
	
	item.forEach(function(e) {
		e.addEventListener('click', function() {
			this.classList.toggle('active');
			calcPrice();
		});
	});
	
	box.addEventListener('click', function() {
		this.classList.add('border');
	});

	function calcPrice() {
		let totalPrice = 0;
		item.forEach(function(e) {
			if (e.classList.contains('active')) {
				totalPrice += parseInt(e.getAttribute('data-price'));
			}
			
		});

		price.innerHTML = totalPrice;
		
	}

});