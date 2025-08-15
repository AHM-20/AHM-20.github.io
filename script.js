AOS.init();

// Smooth scroll to section with offset
const scrollNav = (section) => {
    const element = document.getElementsByClassName(section)[0];
    if (!element) return;

    // Calculate the element's position and apply offset
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 100; // 100px offset

    // Smooth scroll to element with offset
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
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
    // Initialize slider
    var splide = new Splide('.splide', {
        type: 'loop',
        autoWidth: true,
        speed: 700,
        autoplay: true,
        focus: 'center',
        padding: '2rem',
		direction: 'rtl',
    });
    splide.mount();
});
