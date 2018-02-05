let image_div = document.getElementById('image-holder');
	image_div.style.backgroundImage = 'url(' + localStorage['foo'] + ')';

let name = document.getElementById('Kname');
	name.innerHTML = localStorage['username'];

let arrow = document.getElementById('arrow');
let menu = document.getElementById('menu')
	arrow.addEventListener('click', openMenu);

let i = 0;

	function openMenu() {
		menu.style.display = "block";
		arrow.style.transform = "rotate(180deg)";
		i++;
		if (i == 2) {
			closeMenu();
			i=0;
		}
	}

	function closeMenu(){
		menu.style.display = "none";
		arrow.style.transform = "rotate(0deg)";
	}

let exp;

	exp = 550;

	this.setExp = localStorage.setItem('exp', exp);

	// IF LEVEL 2

	/*
	if (exp > 400) {
		let levelNumber = document.getElementById('levelNumber');
			levelNumber.innerHTML = 2;

		let levelIndicator = document.getElementsByClassName('circle')[0];
			levelIndicator.style.borderColor = "#dfdfdf #2ecc71 #2ecc71 #dfdfdf";
	}
	*/