particlesJS("particles-js",

	{
		"particles": {
			"number": {
				"value": 50,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#000000"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.2,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#FFFFFF",
				"opacity": 0.2,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 3,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "window",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "grab"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 200,
					"line_linked": {
						"opacity": 0.2
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	}

)



const logos = [
	{ class: 'html_logo', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
	{ class: 'js_logo', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
	{ class: 'java_logo', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
	{ class: 'css_logo', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
	{ class: 'jquery_logo', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
	{ class: 'mysql_logo', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg' },
	{ class: 'spring_logo', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
	{ class: 'bootstrap_logo', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
];

function createCard(imgSrc, title, text, languages) {
	const languageLogos = languages
		.map(
			(language) =>
				`<img src="${language.url}" alt="_" style="max-height: 15%;max-width: 15%" class="pe-2">`
		)
		.join('');

	return `
    <div class="col">
      <div class="card h-100" style="background-color: transparent">
        <img src="${imgSrc}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${text}</p>
          <div class="d-flex align-content-start flex-wrap">
            ${languageLogos}
          </div>
        </div>
      </div>
    </div>`;
}

const cards = [
	{
		imgSrc: 'https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80',
		title: 'Card title',
		text: 'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
		languages: [
			logos[0], // HTML logo
			logos[1], // JS logo
			logos[3], // CSS logo
		],
	}
	// Add more cards here
];

const cardsContainer = document.getElementById('cards-container');
cards.forEach(card => {
	cardsContainer.innerHTML += createCard(card.imgSrc, card.title, card.text, card.languages);
});



function mouseOver() {

	var colors = ['#1A5857', '#109FB3', '#AABF15','#DF7C1D','#E54542'];
	var random_color = colors[Math.floor(Math.random() * colors.length)];
	$("p").hover(
		function(){
			$(this).css('color', random_color)
		}, function(){
			$(this).css("color", "white")
		}, function(){
			$(this).css("color", random_color)
		});
}

function mouseOut() {
	bodyElement.style.backgroundColor = "white";
}
window.addEventListener('mouseover', mouseOver);
window.addEventListener('mouseout', mouseOut);






