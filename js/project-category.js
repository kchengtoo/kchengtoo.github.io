let displayElement = document.getElementById("projects-row");
let archivedElement = document.getElementById("archived-row");
let categoryName;

$(document).ready(function() {
	// if (currentProjectLocation.includes("design")) {
	// 	categoryName = "design-work";
	// 	displayProjectLinks(designProjects);
	// }
	// else if (currentProjectLocation.includes("tech")) {
	// 	categoryName = "tech-work";
	// 	displayProjectLinks(techProjects);
	// }
	// else {
	// 	console.log("ERROR");
	// }
	if (currentLocation.includes("work")) {
		categoryName = "featured-work";
		displayProjectLinks(designProjects);
	}
	else if (currentLocation.includes("archived")) {
		categoryName = "archived";
		displayProjectLinks(techProjects);
	}
	else {
		console.log("currentLocation ERROR");
	}
});

function displayProjectLinks(inProjects) {

	// console.log(inProjects.numberOfProjects);

	// console.log(currentLocation);

	for (i = 0; i < inProjects.numberOfProjects; i++) {

		if (inProjects.projects[i].archived == 0) {
			let colElement = document.createElement("div");
			colElement.classList.add("col");
			colElement.classList.add("col-12");
			colElement.classList.add("col-md-6");
			colElement.classList.add("block");

			let linkElement = document.createElement("a");

			// if (inProjects.projects[i].status == 0) {
			// 	linkElement.href = "../pages/" + categoryName + "/" + checkConnectivity("construction") + "";
			// }
			// else {
			// 	linkElement.href = "../pages/" + categoryName + "/" + checkConnectivity(inProjects.projects[i].link) + "";
			// }

			linkElement.href = checkConstructionStatus(inProjects.projects[i].status, inProjects.projects[i].link);


			let projectElement = document.createElement("div");
			projectElement.classList.add("project-div");

			let imgElement = document.createElement("img");
			imgElement.classList.add("project-thumbnail");
			imgElement.src = "../img/" + inProjects.projects[i].link + "-thumbnail.jpg";

			let labelElement = document.createElement("div");
			labelElement.classList.add("label");
			labelElement.style.color = inProjects.projects[i].fontColor;
			labelElement.style.backgroundColor = inProjects.projects[i].backgroundColor + "0.8)";

			let h1Element = document.createElement("h1");
			h1Element.classList.add("display-6");
			h1Element.innerHTML = inProjects.projects[i].name + ".";

			let h2Element = document.createElement("h2");
			// h2Element.classList.add("display-7");
			h2Element.innerHTML = inProjects.projects[i].projectType + ".";

			labelElement.appendChild(h1Element);
			labelElement.appendChild(h2Element);

			projectElement.appendChild(imgElement);
			projectElement.appendChild(labelElement);

			linkElement.appendChild(projectElement);

			colElement.appendChild(linkElement);

			displayElement.appendChild(colElement);
		}
		else if (inProjects.projects[i].archived == 1) {
			let colElement = document.createElement("div");
			colElement.classList.add("col");
			colElement.classList.add("col-12");
			colElement.classList.add("archived-block");

			let linkElement = document.createElement("a");

			// if (inProjects.projects[i].status == 0) {
			// 	linkElement.href = "../pages/" + categoryName + "/" + checkConnectivity("construction") + "";
			// }
			// else {
			// 	linkElement.href = "../pages/" + categoryName + "/" + checkConnectivity(inProjects.projects[i].link) + "";
			// }

			linkElement.href = checkConstructionStatus(inProjects.projects[i].status, inProjects.projects[i].link);

			let projectElement = document.createElement("div");
			projectElement.classList.add("archived-div");

			let imgElement = document.createElement("img");
			imgElement.classList.add("archived-project-thumbnail");
			imgElement.src = "../img/" + inProjects.projects[i].link + "-thumbnail.jpg";

			let labelElement = document.createElement("div");
			labelElement.classList.add("archived-label");

			let h1Element = document.createElement("h1");
			h1Element.classList.add("display-6");
			h1Element.innerHTML = inProjects.projects[i].name + ".";

			let h2Element = document.createElement("h2");
			h2Element.innerHTML = inProjects.projects[i].projectType + ".";

			labelElement.appendChild(h1Element);
			labelElement.appendChild(h2Element);

			let arrowElement = document.createElement("img");
			arrowElement.classList.add("direction-img");
			arrowElement.src = "../img/right-arrow-black.svg";

			projectElement.appendChild(imgElement);
			projectElement.appendChild(labelElement);
			projectElement.appendChild(arrowElement);

			linkElement.appendChild(projectElement);

			colElement.appendChild(linkElement);

			archivedElement.appendChild(colElement);
		}
		else {
			console.log("displayProjectLinks ERROR");

		}
	}
}