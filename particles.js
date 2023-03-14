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

let html_logo_url = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
let js_logo_url = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
let java_logo_url = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
let css_logo_url = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg';
let jquery_logo_url = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg';
let mysql_logo_url = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg';
let spring_logo_url = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg';
let bootstrap_logo_url = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'

$(document).ready(function() {
	$('.js_logo').append(`<img src='${js_logo_url}' alt="_" style="max-height: 15%;max-width: 15%" class="pe-2">`);
	$('.html_logo').append(`<img src='${html_logo_url}' alt="_" style="max-height: 15%;max-width: 15%" class="pe-2">`);
	$('.java_logo').append(`<img src='${java_logo_url}' alt="_" style="max-height: 15%;max-width: 15%" class="pe-2">`);
	$('.css_logo').append(`<img src='${css_logo_url}' alt="_" style="max-height: 15%;max-width: 15%" class="pe-2">`);
	$('.jquery_logo').append(`<img src='${jquery_logo_url}' alt="_" style="max-height: 15%;max-width: 15%" class="pe-2">`);
	$('.mysql_logo').append(`<img src='${mysql_logo_url}' alt="_" style="max-height: 15%;max-width: 15%" class="pe-2">`);
	$('.spring_logo').append(`<img src='${spring_logo_url}' alt="_" style="max-height: 15%;max-width: 15%" class="pe-2">`);
	$('.bootstrap_logo').append(`<img src='${bootstrap_logo_url}' alt="_" style="max-height: 15%;max-width: 15%" class="pe-2">`);

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




// document.getElementById('movieDisplay').innerHTML = '';
// 	$('#movieDisplay').append(createImage());
//
//
// function createImage(){
// 	let html =`
// <div class="col-3">
// 	<div class="card" style="width: 18rem;">
//          <img src="https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80" class="card-img-top" alt="...">
//             <div class="card-body">
//                <h5 class="card-title">Card title</h5>
//                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
// 	</div>
// </div>
// `;
// 	return html;
// }
// createImage();


