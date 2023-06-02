class Project {
	constructor(name, projectType, link, fontColor, backgroundColor, status, archived) {
		this.name = name;
		this.projectType = projectType;
		this.link = link;
		this.fontColor = fontColor;
		this.backgroundColor = backgroundColor;
		this.status = status;
		this.archived = archived;
	}
}

class Projects {
	constructor() {
		this.projects = [];
	}
	newProject(name, projectType, link, fontColor, backgroundColor, status, archived) {
		let p = new Project(name, projectType, link, fontColor, backgroundColor, status, archived);
		this.projects.push(p);
		return p;
	}
	get allProjects() {
		return this.projects;
	}
	get numberOfProjects() {
		return this.projects.length;
	}
}

// Edit here to add, delete or modify projects
let designProjects = new Projects();
designProjects.newProject("Platform Modularity Reports", "Report creation for clients with J.P. Morgan Access accounts within Chase Connect", "platform-modularity-reports", "white", "rgba(62,112,171,", 1, 0);
designProjects.newProject("ChowDown", "Thesis project for a food management app that helps young adults use up food in their pantry to reduce food waste", "chowdown", "white", "rgba(205,226,157,", 1, 0);
designProjects.newProject("Meerkat", "UX design project for a platform that stores, visualizes and connects insights for design innovation teams", "meerkat", "white", "rgba(116,193,107,", 1, 0);
designProjects.newProject("Arity", "UX design project with Arity to design unique workout experiences on Strava by incorporating Arity's SDK", "arity", "white", "rgba(255,176,87,", 1, 0);
designProjects.newProject("NUravel", "UX design project with Northwestern University to create an app that helps incoming students learn about campus life", "nuravel", "white", "rgba(130,90,176,", 1, 0);
designProjects.newProject("iRobot Connect", "Design strategy project with iRobot on supporting aging adults to complete tasks around the home with more interaction", "irobot-connect", "white", "rgba(157,194,132,", 1, 1);
designProjects.newProject("Collective Narrative", "HCI research on helping communities to bond at distance by participating in a collective storytelling experience", "collective-narrative", "white", "rgba(145,179,250,", 1, 1);
// designProjects.newProject("Procter & Gamble", "Consumer Product", "procter-and-gamble", "white", "rgba(130,90,176,", 1);
// designProjects.newProject("Sentry", "Product design for a startup project on an extremely portable and easy-to-use home security device", "sentry", "white", "rgba(53,97,177,", 1, 1);
// designProjects.newProject("Zima Mirror", "Product prototype for thesis project on a smart mirror designed to enhance online shopping experience", "zima-mirror", "white", "rgba(195,203,212,", 1, 1);
// designProjects.newProject("Circle for Roommates", "UI/UX Design", "circle-for-roommates", "white", "rgba(127,206,237,", 1, 1);
// designProjects.newProject("DrawBot's Design", "Robotics", "drawbot", "black", "rgba(255,255,255,", 1);

let techProjects = new Projects();
// designProjects.newProject("World News Dashboard", "Front-End Development", "world-news-dashboard", "white", "rgba(255,176,87,", 1);
// techProjects.newProject("Panoply", "Web App Development", "panoply", "white", "rgba(179,176,169,", 1);
// techProjects.newProject("Virus Life", "Java App Development", "virus-life", "black", "rgba(255,234,201,", 1);
// techProjects.newProject("Misterfolio", "iOS App Development", "misterfolio", "white", "rgba(123,127,222,", 0);

// let currentProjectLocation = window.location.href;