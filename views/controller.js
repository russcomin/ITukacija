let image_div = document.getElementById('image-holder');
	image_div.style.backgroundImage = 'url(' + localStorage['foo'] + ')';

let name = document.getElementById('Kname');
	name.innerHTML = localStorage['username'];