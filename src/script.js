//fixed navbar
window.onscroll = function () {
	const header = document.querySelector('header');
	const fixedNav = header.offsetTop;

	window.pageYOffset > fixedNav ? header.classList.add('navbar-fixed') : header.classList.remove('navbar-fixed');
};

//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
	hamburger.classList.toggle('hamburger-active');
	navMenu.classList.toggle('hidden');
});

// back to top
const backToTop = document.querySelector('#back-to-top');
window.addEventListener('scroll', function () {
	if (window.pageYOffset > 0) {
		backToTop.classList.remove('hidden');
	} else {
		backToTop.classList.add('hidden');
	}
});

//klik diluar hamburger
window.addEventListener('click', function (e) {
	if (e.target != hamburger && e.target != navMenu) {
		hamburger.classList.remove('hamburger-active');
		navMenu.classList.add('hidden');
	}
});

//darkmode toggle

const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
	if (darkToggle.checked) {
		html.classList.add('dark');
		localStorage.theme = 'dark';
	} else {
        html.classList.remove('dark');
		localStorage.theme = 'light';
	}
});

//pindahkan toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}
