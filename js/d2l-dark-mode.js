
var query = window.matchMedia('(prefers-color-scheme: dark)');

var setColorScheme = function() {
	var preferredColorScheme = window.document.documentElement.getAttribute('data-preferred-color-scheme');
	if (preferredColorScheme === 'dark' || (preferredColorScheme === 'os' && query.matches)) {
		window.document.documentElement.setAttribute('d2l-color-scheme', 'dark');
	} else {
		window.document.documentElement.removeAttribute('d2l-color-scheme');
	}
};

if (query.addEventListener) {
	query.addEventListener('change', setColorScheme);
}

setColorScheme();
