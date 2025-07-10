function toggleDropdown(contentNam, toggleNam, objectiv) {
	const content = document.getElementById(contentNam);
	const toggle = document.getElementById(toggleNam);

	const isShown = content.classList.toggle('show');
	toggle.textContent = isShown ? '▼' + objectiv  : '▲' + objectiv;
}