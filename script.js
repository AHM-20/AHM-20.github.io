AOS.init();

function getOffset(el) {
	const rect = el.getBoundingClientRect();
	return {
		left: rect.left + window.scrollX,
		top: rect.top + window.scrollY
	};
}

const navBar = document.querySelector('#nav-bar');
var navs = document.querySelectorAll('.nav-item');
var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;

	if (currentScrollPos > 900 && currentScrollPos < 1900) {
		var rmActive = document.getElementsByClassName('active')[0];
		rmActive ? rmActive.classList.remove('active') : '';
		var menuEl = document.querySelector(`.portfolio-menu`);
		menuEl.classList.add('active');
	} else if (currentScrollPos > 1900 && currentScrollPos < 2500) {
		var rmActive = document.getElementsByClassName('active')[0];
		rmActive ? rmActive.classList.remove('active') : '';
		var menuEl = document.querySelector(`.Gallery-menu`);
		menuEl.classList.add('active');
	} else if (currentScrollPos > 2500) {
		var rmActive = document.getElementsByClassName('active')[0];
		rmActive ? rmActive.classList.remove('active') : '';
		var menuEl = document.querySelector(`.contact-section-menu`);
		menuEl.classList.add('active');
	} else {
		var rmActive = document.getElementsByClassName('active')[0];
		rmActive ? rmActive.classList.remove('active') : '';
	}

	prevScrollpos = currentScrollPos;
};

const scrollNav = (section) => {
	var element = document.getElementsByClassName(section)[0];
	console.log(getOffset(element).top);

	var menuEl = document.querySelector(`.${section}-menu`);
	var rmActive = document.getElementsByClassName('active')[0];
	rmActive ? rmActive.classList.remove('active') : '';

	menuEl.classList.add('active');
	element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
};

const onContact = () => {
	window.open('mailto:test@example.com?subject=subject&body=body');
};

const checkValue = () => {
	var email = document.getElementById('email').value || '';
	var subject = document.getElementById('subject').value || '';
	var message = document.getElementById('message').value || '';

	var btn = document.getElementById('sub');
	if (email && subject && message) {
		btn.classList.remove('disabled');
	} else {
		btn.classList.add('disabled');
	}
};

$('#sub').click(function() {
	var email = document.getElementById('email').value || '';
	var subject = document.getElementById('subject').value || '';
	var message = document.getElementById('message').value || '';

	$(location).attr(
		'href',
		`mailto:${email}?subject=` + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message)
	);
});

document.addEventListener('DOMContentLoaded', function() {
	var splide = new Splide('.splide', {
		type: 'loop',
		autoWidth: true,
		speed: 700,
		autoplay: true,
		focus: 'center',
		padding: '2rem'
	});
	splide.mount();
});
