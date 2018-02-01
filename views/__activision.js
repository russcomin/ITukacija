document.addEventListener('keydown', function(e) {
    if(e.which == 13){
        executeAct();
    }
})

let modal = document.getElementById('modal');
let close = document.getElementById('close');
let error = document.getElementById('error');

close.addEventListener('click', function(){
	closeModal();
});

var ActErr = "Error 103 | Sifra se ne poklapa sa sifrom koju ste uneli na prvom koraku";


let execute_activision = document.getElementById('submit_login');
	execute_activision.addEventListener('click', executeAct);

function executeAct() {	
this.existance = localStorage.setItem('exist','true');	
let pw,
	getpw;

	pw = document.getElementById('sifra').value;
	getpw = localStorage.getItem('password');

	if (pw == getpw) {
		document.location = "../pages/app/app.html"
	}else {
		error.innerHTML = ActErr;
		openModal();
	}
}

function openModal() {
	modal.style.top = '0px';
	modal.style.transition = '.4s';
}

function closeModal() {
	modal.style.top = '-400px';
	modal.style.transition = '2s';
}