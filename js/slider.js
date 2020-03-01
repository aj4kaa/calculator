window.addEventListener('DOMContentLoaded', function() {
	'use strict';

	//SLIDER VERSiON 1
	// let next = document.querySelector('.slider-next'),
	// 	prev = document.querySelector('.slider-prev'),
	// 	items = document.querySelectorAll('.slider-item'),
	// 	index = 0;
	
	// next.addEventListener('click', function() {
	// 	items[index].style.display = 'none';
	// 	index++;
	// 	if (index >= items.length) {
	// 		index = 0;
	// 	}
	// 	items[index].style.display = 'block';
	// });

	// prev.addEventListener('click', function() {
	// 	items[index].style.display = 'none';
	// 	index--;
	// 	if (index < 0) {
	// 		index = items.length - 1;
	// 	}
	// 	items[index].style.display = 'block';
	// });

		//SLIDER VERSiON 2
		let next = document.querySelector('.slider-next'),
		prev = document.querySelector('.slider-prev'),
		items = document.querySelectorAll('.slider-item'),
		index = 0;
	
	next.addEventListener('click', function() {
		items[index].classList.remove('active');
		index++;
		if (index >= items.length) {
			index = 0;
		}
		items[index].classList.add('active');
	});

	prev.addEventListener('click', function() {
		items[index].classList.remove('active');
		index--;
		if (index < 0) {
			index = items.length - 1;
		}
		items[index].classList.add('active');
	});

});