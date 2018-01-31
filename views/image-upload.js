let nastavi = document.getElementById('submit_login');
	nastavi.addEventListener('click', execute);
	function execute() {
		let name,
			password;

		name = document.getElementById('korisnicko_ime').value;
		password = document.getElementById('sifra').value;

		if(name.length > 5) {
			localStorage.setItem('username', name);
		}else {
			//trigger
		}
		if (password.length > 5) {
			localStorage.setItem('password', password);
			if (name.length > 5) {
				document.location = "__checker.html";
			}
		}else {
			//trigger
		}
	}

var input = document.getElementById('imger');
input.onchange = function(evt){
    var tgt = evt.target || window.event.srcElement, 
        files = tgt.files;

    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            localStorage['profile_image'] = fr.result;
        }
        fr.readAsDataURL(files[0]);
    }
}

// = 'url(' + localStorage['foo'] + ')';