const menu = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menu.addEventListener("click", (e) => {
	if (menu.innerHTML == "Menu") {
		menu.innerHTML = "Close";
	} else {
		menu.innerHTML = "Menu";
	}
	nav.classList.toggle("visible");
});
