let modal = document.getElementById('modal');
let close = document.getElementById('close');
let error = document.getElementById('error');

let NameErr,
	PassErr;

	NameErr = "Error 101 | Morate uneti korisnicko ime sa vise od 5 karaktera";
	PassErr = "Error 102 | Morate uneti sifru sa minimalno 5 karaktera";

close.addEventListener('click', function(){
	closeModal();
});

document.addEventListener('keydown', function(e) {
    if(e.which == 13){
        execute();
    }
})

let nastavi = document.getElementById('submit_login');
	nastavi.addEventListener('click', execute);
	function execute() {
		let name,
			password;

		name = document.getElementById('korisnicko_ime').value;
		password = document.getElementById('sifra').value;

		if(name.length > 5) {
			localStorage.setItem('username', name);
			location.reload();
		}else {
			error.innerHTML = NameErr;
			openModal();
		}
		if (password.length > 5) {
			location.reload();
			localStorage.setItem('password', password);
		}else {
			error.innerHTML = PassErr;
			openModal();
		}
	}

    var input = document.getElementById('imger');
    input.onchange = function(evt){
        var tgt = evt.target || window.event.srcElement, 
            files = tgt.files;

        if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onload = function () {
                localStorage['foo'] = fr.result;
				location.reload();
            }
            fr.readAsDataURL(files[0]);
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

	let	executeClear = document.getElementById('delete_acc');
		executeClear.addEventListener('click', executeDelete);

		function executeDelete() {
			let pass_re = document.getElementById('re-pass').value,
				pass_tr = localStorage['password'];
	
			if (pass_re == pass_tr) {
				localStorage.clear();
				document.location = "../../../index.html";
			}
		}


