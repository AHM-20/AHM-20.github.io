AOS.init();

$(document).ready(function() {
	for (let index = 2; index < 8; index++) {
		// $('.splide__list').append(
		// 	`<li class="splide__slide"> <img src="/images/image\ \(${index}\).jpeg" alt="..."></li>`
		// );
	}
	// $('.splide__slide').each().append(
	// 	`<img src="/images/image\ \(${1}\).jpeg" alt="...">`
	// );
});
const navBar = document.querySelector('#nav-bar');
// navBar.style.background = '#fff'

var prevScrollpos = window.pageYOffset;
let isAnimationDone = false;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	// if (prevScrollpos > currentScrollPos) {
	// 	navBar.style.top = '0';
	// } else {
	// 	navBar.style.top = '-50px';
	// }

	// if (currentScrollPos > 500 && !isAnimationDone) {
	// 	isAnimationDone = true;
	// 	anime({
	// 		targets: '.project-section:nth-child(even),.project-section',
	// 		translateX: [ 200, 0 ],
	// 		// translateY: [200,0],
	// 		// rotate: '1turn',
	// 		// backgroundColor: '#FFF',
	// 		delay: function(el, i, l) {
	// 			return i * 200;
	// 		}
	// 		// duration: 1500
	// 	});
	// }

	if (currentScrollPos > 500) {
		// navBar.style.background = 'rgb(13, 124, 96)';
		navBar.classList.add('nav-background');
	} else {
		// navBar.style.background = 'transparent';
		navBar.classList.remove('nav-background');
	}
	prevScrollpos = currentScrollPos;
};

const scrollNav = (section) => {
	var element = document.getElementsByClassName(section)[0];
	element.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
};

const onContact = () => {
	window.open('mailto:test@example.com?subject=subject&body=body');
};

$('#sub').click(function() {
	var email = document.getElementById('email').value || '';
	var subject = document.getElementById('subject').value || '';
	var message = document.getElementById('message').value || '';
	console.log(email, message, subject);
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
		focus  : 'center',
		padding: '2rem'
	});
	splide.mount();
});
