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