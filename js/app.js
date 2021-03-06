var app = angular.module("personalPage", ["ngRoute", "ngAnimate"]);

particlesJS.load('particles', 'js/particle-config.json', function () {
	console.log('callback - particles.js config loaded');
});

app.config(function($routeProvider, $locationProvider, $httpProvider) {
	console.log("Nosey lil fella, aren't you? I like that. Click on the smiley face if you want to see some hidden nerd stuff.");
	$routeProvider
	.when('/', {
		templateUrl: "templates/landing.html",
		controller: "Main",
		activetab: "home"
	})
	.when('/contact', {
		templateUrl: "templates/contact.html",
		controller: "Contact",
		activetab: "contact"
	})
	.when('/services', {
		templateUrl: "templates/services.html",
		controller: "Services",
		activetab: "services"
	})
	.when('/portfolio', {
		templateUrl: "templates/portfolio.html",
		controller: "Portfolio",
		activetab: "portfolio"
	})
	.when('/about', {
		templateUrl: "templates/about.html",
		controller: "About",
		activetab: "about"
	})
   	.otherwise({
	 	redirectTo: "/"
	});

	if (window.history && window.history.pushState) {
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	}
});

