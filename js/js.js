var bt = document.getElementById('button');
bt.onclick = function () {
	var inp = document.getElementById('input').value;
	var url = 'https://api.github.com/users/' + inp;
	localStorage.setItem("newPage", inp);
	console.log(url);
	}

