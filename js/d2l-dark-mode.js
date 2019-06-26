
var query = window.matchMedia('(prefers-color-scheme: dark)');

var setColorScheme = function() {
	var preferredColorScheme = window.document.documentElement.getAttribute('data-preferred-color-scheme');
	if (preferredColorScheme === 'dark' || (preferredColorScheme === 'os' && query.matches)) {
		document.body.classList.add('d2l-dark-mode');
	} else {
		document.body.classList.remove('d2l-dark-mode');
	}
};

if (query.addEventListener) {
	query.addEventListener('change', setColorScheme);
}

setColorScheme();
