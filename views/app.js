console.log('app ready');

document.addEventListener('keydown', function(e) {
    if(e.which == 13){
        executeLogin();
    }
})

//create account
	let c_b = document.getElementById('napravi_nalog');
		c_b.addEventListener('click', function () {
			document.location = "pages/registartion.html";
		})

let login = document.getElementById('submit_login');
	login.addEventListener('click', executeLogin);


	function executeLogin() {
		let username,
			password;

		let current_name,
			current_password;


		name = localStorage.getItem('username');
		password = localStorage.getItem('password');

		current_name = document.getElementById('korisnicko_ime').value;
		current_password = document.getElementById('lozinka').value;

		if (name == current_name && password == current_password) {
			document.location = '../pages/app/app.html';
		}else {
			error.innerHTML = "Error 104 | Unesite prave podatke";
			openModal();
		}


	}

	let modal = document.getElementById('modal');
	let close = document.getElementById('close');
	let error = document.getElementById('error');


	close.addEventListener('click', function(){
		closeModal();
	});	

	function openModal() {
		modal.style.top = '110px';
		modal.style.transition = '.4s';
	}

	function closeModal() {
		modal.style.top = '-400px';
		modal.style.transition = '2s';
	}