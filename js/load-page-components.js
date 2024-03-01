let currentLocation = top.location.href;

// let linkedinImg2 = document.querySelector("#linkedin-logo");

$(document).ready(function() {

// Loading html in other html only works when the directory is published, it does not work locally.
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
		// console.log("homepage");
		$("#header-div").load("pages/shared-page-components.html #navbar-div");
		setTimeout (function() {
			configComponents("home");
		}, 600);
	}
	else {
		// console.log("pages");
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

	let navbarLinks = ["work", "about", "kevin-cheng-resume.pdf"];
	let navbarElements = document.querySelectorAll(".nav-a");
	let homeLink = document.getElementById("home-link");
	let homeLogoImg = document.getElementById("main-logo");

	let contactLink = document.getElementById("contact-link");
	let socialMediaElements = document.querySelectorAll(".social-media-link");
	let socialMediaLinks = ["../img/linkedin-logo.svg", "../img/instagram-logo.svg", "../img/dribbble-logo.svg", "../img/email-logo.svg"];
	const d = new Date();
	let copyrightYear = document.getElementById("copyright-year");
	// console.log(offlineMode(currentLocation));

	// console.log(navbarElements);

	if (location == "projects") {
		// console.log(navbarElements.length);
		// console.log(navbarElements[i].href);
		// console.log(homeLink);

		for (i = 0; i < navbarElements.length; i++) {
			// navbarElements[i].href = "../" + navbarLinks[i];
			if (navbarElements[i].innerHTML == "RESUME") {
				navbarElements[i].href = "../" + navbarLinks[i];
			}
			else {
				navbarElements[i].href = "../" + checkConnectivity(navbarLinks[i]);
				// console.log(navbarElements[i].href);
			}

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
		
		// contactLink.href = checkConnectivity("../contact");

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
			if (navbarElements[i].innerHTML == "RESUME") {
				navbarElements[i].href = navbarLinks[i];
			}
			else {
				navbarElements[i].href = checkConnectivity(navbarLinks[i]);
				// console.log(navbarElements[i].href);
			}


			// console.log(checkOnlineOrOffline(navbarLinks[i]));
		}
		homeLink.href = "../";
		homeLogoImg.src = "../img/kevinlogo.svg";

		for (i = 0; i < socialMediaElements.length; i++) {
			socialMediaElements[i].src = socialMediaLinks[i];
		}

		// console.log(contactLink);
		// if (contactLink) {
		// 	contactLink.href = checkConnectivity("contact");
		// }
	}
	else if (location == "home") {
		// console.log(homeLink);
		for (i = 0; i < navbarElements.length; i++) {
			if (navbarElements[i].innerHTML == "RESUME") {
				navbarElements[i].href = "pages/" + navbarLinks[i];
			}
			else {
				navbarElements[i].href = "pages/" + checkConnectivity(navbarLinks[i]);
				// console.log(navbarElements[i].href);
			}
		}
		homeLink.href = "/";
		homeLogoImg.src = "img/kevinlogo.svg";
	}
	else {
		console.log("location error");
	}
	copyrightYear.innerHTML = d.getFullYear();
}

// for checking if we're in local or GitHub file
function checkConnectivity(href) {
	// let newHref;
	if (currentLocation.includes("/Documents/")) {
		// console.log(href + ".php");
		// newHref += 
		return href + ".html";

	}
	return href;
}
// function loadCopyrightYear(copyrightYear, d) {
// 	console.log(d.getFullYear());
// 	copyrightYear.innerHTML = d.getFullYear();
// }

function checkConstruction(link) {
	if (link == "construction") {
		
	}
}