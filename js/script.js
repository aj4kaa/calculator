window.addEventListener('DOMContentLoaded', function() {
	
	"use strict"

	let menu = document.querySelector('.img_menu'),
		menuLink = document.querySelectorAll('.img_link'),
		tabs = document.querySelectorAll('.img_picture');

	function hideContent(a) {
		for (let i = a; i < tabs.length; i++) {
			tabs[i].classList.remove('show');
			tabs[i].classList.add('hide');
		}
	}

	hideContent(1);

	function showContent(b) {
		if (tabs[b].classList.contains('hide')) {
			tabs[b].classList.remove('hide');
			tabs[b].classList.add('show');
		}
	}

	menu.addEventListener('click', function(event) {
		let target = event.target;
		if (target && target.classList.contains('img_link')) {
			for (let i = 0; i < menuLink.length; i++) {
				if (target == menuLink[i]) {
					hideContent(0);
					showContent(i);
					break;
				}
			}
		}
	});

	let text = document.querySelector('.text'),
		btn = document.querySelector('.btn');

	let width = text.scrollWidth,
		height = text. scrollHeight;

	console.log(width);
	console.log(height);
	
	btn.addEventListener('click', function() {
		console.log(text.style.height);
		
		if (text.style.height == '1000px') {
			text.style.height = 300 +'px';
		} else {
			text.style.height = 1000 + 'px';
		}
		
	});

});