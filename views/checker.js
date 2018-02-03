
let profilePic = localStorage.getItem('foo');

if (!profilePic) {	
	let bg = document.getElementById('image-holder').style.backgroundImage = 'url(../public/stylesheets/assets/icons/avatar.svg)';
}else {
	let bg = document.getElementById('image-holder');
		bg.style.backgroundImage = 'url(' + localStorage['foo'] + ')';
}

let name = localStorage.getItem('username');
let yourName = document.getElementById('your_name');
	your_name.innerHTML = name;

let app_execute = document.getElementById('submit_login');
	app_execute.addEventListener('click', app);

document.addEventListener('keydown', function(e) {
    if(e.which == 13){
        app();
    }
})

function app() {
	document.location = "../pages/starter.html";
}

