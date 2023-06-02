let currentLocation = window.location.href;

// let linkedinImg2 = document.querySelector("#linkedin-logo");

$(document).ready(function() {

	// console.log(window.location.href);

	// if (currentLocation.includes("pages")) {
	// 	console.log("pages");
	// 	$("#footer-div").load("../pages/social-media-footer.html #load-social-media-div");
	// }

	// if (currentLocation.includes("design.html") || currentLocation.includes("tech.html") || currentLocation.includes("about.html")){
	// 	$("#footer-div").load("../pages/social-media-footer.html #load-social-media-div");
	// 	setTimeout (function() {
	// 		configSocialMediaFooter("pages");
	// 	}, 500);
	// }
	// else {
	// 	$("#header-div").load("../social-media-footer.html #navbar-div");
	// 	$("#footer-div").load("../social-media-footer.html #load-social-media-div");
	// 	setTimeout (function() {
	// 		configSocialMediaFooter("projects");
	// 	}, 500);
	// }

	if (currentLocation.includes("featured-work")){
		// console.log("featured project");
		// $("#header-div").load("../pages/social-media-footer.html #navbar-header");
		$("#header-div").load("../shared-page-components.html #navbar-div");
		$("#footer-div").load("../shared-page-components.html #load-social-media-div");
		setTimeout (function() {
			configComponents("projects");
		}, 600);
	}
	else if (!currentLocation.includes("pages")) {
		console.log("homepage");
		$("#header-div").load("pages/shared-page-components.html #navbar-div");
		setTimeout (function() {
			configComponents("home");
		}, 600);
	}
	else {
		console.log("pages");
		$("#header-div").load("../pages/shared-page-components.html #navbar-div");
		$("#footer-div").load("../pages/shared-page-components.html #load-social-media-div");
		setTimeout (function() {
			configComponents("pages");
		}, 600);
	}

	// $("#footer-div").load("../social-media-footer.html #load-social-media-div");
});

function configComponents(location) {
	// let linkedinImg = document.getElementById("linkedin-logo");
	// let instagramImg = document.getElementById("instagram-logo");
	// let dribbbleImg = document.getElementById("dribbble-logo");
	// let emailImg = document.getElementById("email-logo");

	let navbarLinks = ["work", "about"];
	let navbarElements = document.querySelectorAll(".nav-a");
	let homeLink = document.getElementById("home-link");
	let homeLogoImg = document.getElementById("main-logo");

	let contactLink = document.getElementById("contact-link");
	let socialMediaElements = document.querySelectorAll(".social-media-link");
	let socialMediaLinks = ["../img/linkedin-logo.svg", "../img/instagram-logo.svg", "../img/dribbble-logo.svg", "../img/github-logo.svg", "../img/email-logo.svg"];
	// console.log(offlineMode(currentLocation));

	// console.log(navbarElements);

	if (location == "projects") {
		// console.log(navbarElements.length);
		// console.log(navbarElements[i].href);
		// console.log(homeLink);

		for (i = 0; i < navbarElements.length; i++) {
			// navbarElements[i].href = "../" + navbarLinks[i];
			navbarElements[i].href = "../" + checkConnectivity(navbarLinks[i]);
			// console.log(navbarElements[i].href);

		}

		homeLink.href = "../../";
		homeLogoImg.src = "../../img/kevinlogo.svg";

		for (i = 0; i < socialMediaElements.length; i++) {
			// console.log("../" + socialMediaLinks[i].src);

			// test = $(socialMediaLinks[i]).attr('src');
			// console.log(test);

			socialMediaElements[i].src = "../" + socialMediaLinks[i];

		}
		// contactLink.href = "../contact";
		contactLink.href = checkConnectivity("../contact");

		// linkedinImg.src = "../../img/linkedin-logo.svg";
		// instagramImg.src = "../../img/instagram-logo.svg";
		// dribbbleImg.src = "../../img/dribbble-logo.svg";
		// emailImg.src = "../../img/email-logo.svg";
		// contactLink.href = "../contact.php";
	}
	else if (location == "pages") {
		// console.log(homeLogoImg);
		// console.log(navbarElements[i].href);
		for (i = 0; i < navbarElements.length; i++) {
			// navbarElements[i].href = navbarLinks[i];
			navbarElements[i].href = checkConnectivity(navbarLinks[i]) + ".html";
			// console.log(navbarElements[i].href);

			// console.log(checkOnlineOrOffline(navbarLinks[i]));
		}
		homeLink.href = "../";
		homeLogoImg.src = "../img/kevinlogo.svg";

		for (i = 0; i < socialMediaElements.length; i++) {
			socialMediaElements[i].src = socialMediaLinks[i];
		}

		// console.log(contactLink);
		if (contactLink) {
			contactLink.href = checkConnectivity("contact");
		}
	}
	else if (location == "home") {
		console.log(homeLink);
		for (i = 0; i < navbarElements.length; i++) {
			navbarElements[i].href = "pages/" + checkConnectivity(navbarLinks[i]) + ".html";
			// console.log(navbarElements[i].href);
		}
		homeLink.href = "/";
		homeLogoImg.src = "img/kevinlogo.svg";
	}
	else {
		console.log("location error");
	}
}

// for checking if we're using MAMP for PHP files
function checkConnectivity(href) {
	// let newHref;
	if (currentLocation.includes("localhost")) {
		// console.log(href + ".php");
		// newHref += 
		return href + ".html";

	}
	return href;
}

function checkConstruction(link) {
	if (link == "construction") {
		
	}
}