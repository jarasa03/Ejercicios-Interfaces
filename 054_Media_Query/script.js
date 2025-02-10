function updateScreenSize() {
    document.getElementById("width").textContent = window.innerWidth;
}

window.onload = updateScreenSize;
window.onresize = updateScreenSize;
