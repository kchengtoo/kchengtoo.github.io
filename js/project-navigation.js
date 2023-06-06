// let designCategoryLocation = "file:///Users/kevincheng/Documents/Kingston%2014-17-20/University%20Courses/Portfolio%20Website/portfolio_root_directory/pages/design/";
// let techCategoryLocation = "file:///Users/kevincheng/Documents/Kingston%2014-17-20/University%20Courses/Portfolio%20Website/portfolio_root_directory/pages/tech/";
// let designProjectLinks = ["sentry", "zima-mirror", "circle-for-roommates", "drawbot"];
// let techProjectLinks = ["misterfolio", "virus-life", "panoply"];
// let currentProjectLinks;
// let currentCategorytLocation;


let previousProjectBtn = document.getElementById("previous-project-button");
let nextProjectBtn = document.getElementById("next-project-button");
let previousProjectImg = document.getElementById("previous-project-img");
let nextProjectImg = document.getElementById("next-project-img");
let previousProjectLink = document.getElementById("previous-project-link");
let nextProjectLink = document.getElementById("next-project-link");
let previousProjectLabel = document.getElementById("previous-project-label");
let nextProjectLabel = document.getElementById("next-project-label");
let previousProjectName = document.getElementById("previous-project-name");
let nextProjectName = document.getElementById("next-project-name");
let leftArrow = document.getElementById("left-arrow");
let rightArrow = document.getElementById("right-arrow");

$(document).ready(function() {
	if (currentLocation.includes("featured-work")) {
		// currentProjectLinks = designProjectLinks;
		// console.log(designProjects);
		// currentCategorytLocation = designCategoryLocation;
		locationInArray(designProjects);
	}
	// else if (currentProjectLocation.includes("archived")) {
	// 	// console.log("TECH");
	// 	// currentCategorytLocation = techCategoryLocation;
	// 	// currentProjectLinks = techProjectLinks;
	// 	locationInArray(techProjects);
	// }
	else {
		console.log("ERROR");
	}
});

function locationInArray(inProjects) {
	// currentProjectLinks = links;
	// console.log(inProjects.numberOfProjects);
	for (i = 0; i < inProjects.numberOfProjects; i++) {

		let mySubString = currentLocation.substring(
			currentLocation.indexOf("k/") + 2,
			currentLocation.lastIndexOf(".")
		);
		// console.log(mySubString);
		// console.log(inProjects.projects[i].link);
		// console.log(currentLocation);
		// if (currentProjectLocation.includes(mySubString)) {
		// 	console.log(currentLocation);
		// }
		if (inProjects.projects[i].link === mySubString) {
			// let index = i;
			// console.log("current: " + i);
			// console.log(inProjects.projects[i].link);
			// console.log(currentProjectLocation);

			let previousIndex = previousProjectIndex(i, inProjects.numberOfProjects);
			// console.log(previousIndex);
			// let previousProjectLocation = currentCategorytLocation + links[previousIndex] + ".html";
			let previousProjectLocation = checkConnectivity(inProjects.projects[previousIndex].link);
			// console.log(previousProjectLocation);
			previousProjectLink.href = previousProjectLocation;

			previousProjectBtn.style.backgroundColor = inProjects.projects[previousIndex].backgroundColor + "1)";
			previousProjectImg.style.backgroundImage = "url('../../img/" + inProjects.projects[previousIndex].link + "-context-shot.png')";
			previousProjectLabel.style.backgroundColor = inProjects.projects[previousIndex].backgroundColor + "0.7)";
			previousProjectLabel.style.color = inProjects.projects[previousIndex].fontColor;
			previousProjectName.innerHTML = inProjects.projects[previousIndex].name + ".";
			leftArrow.src = "../../img/" + setArrow("left", inProjects.projects[previousIndex].fontColor);


			let nextIndex = nextProjectIndex(i, inProjects.numberOfProjects);
			// let nextProjectLocation = currentCategorytLocation + links[nextIndex] + ".html";
			let nextProjectLocation = checkConnectivity(inProjects.projects[nextIndex].link);
			// console.log(nextProjectLocation);
			nextProjectLink.href = nextProjectLocation;

			nextProjectBtn.style.backgroundColor = inProjects.projects[nextIndex].backgroundColor + "1)";
			nextProjectImg.style.backgroundImage = "url('../../img/" + inProjects.projects[nextIndex].link + "-context-shot.png')";
			nextProjectLabel.style.backgroundColor = inProjects.projects[nextIndex].backgroundColor + "0.7)";
			nextProjectLabel.style.color = inProjects.projects[nextIndex].fontColor;
			nextProjectName.innerHTML = inProjects.projects[nextIndex].name + ".";
			rightArrow.src = "../../img/" + setArrow("right", inProjects.projects[nextIndex].fontColor);

		}
		else {
			// console.log("none");
		}
	}
}

function previousProjectIndex(currentIndex, size) {
	let num = currentIndex-1;

	// if current index is at the beginning, then go to the end
	if (num < 0) {
		num = size-1;
	}
	// console.log(num);
	// if (currentIndex)
	return num;
}

function nextProjectIndex(currentIndex, size) {
	let num = currentIndex+1;

	// if current index is at the end, then go to the beginning
	if (num >= size) {
		num = 0;
	}
	// console.log(num);
	// if (currentIndex)
	return num;
}

function setArrow(direction, color) {
	let arrowColor;

	// create arrow name starting with direction
	if (direction == "left") {
		arrowColor = "left";
	}
	else if (direction == "right") {
		arrowColor = "right";
	}
	else {
		console.log("DIRECTION ERROR");
	}

	// then add the color and the file format
	if (color == "black") {
		arrowColor += "-arrow-black.svg";
	}
	else if (color == "white") {
		arrowColor += "-arrow-white.svg";
	}
	else {
		console.log("COLOR ERROR");
	}
	return arrowColor;
}
// console.log(window.location.href);

// function checkConnectivity(href) {
// 	console.log(href);
// 	if (currentLocation.includes("localhost")) {
// 		return href + ".php";
// 	}
// 	else {
// 		return;
// 	}
// }
