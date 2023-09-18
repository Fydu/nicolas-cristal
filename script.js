var visibility;
function show_hide() {
    if (visibility == 1) {
        document.querySelector(".block ul").style.display="none";
        document.getElementById("toggleBtn").classList.add("fa-chevron-down")
        document.getElementById("toggleBtn").classList.remove("fa-chevron-up")
        return visibility = 0;
    }
    else {
        document.querySelector(".block ul").style.display="block";
        document.getElementById("toggleBtn").classList.remove("fa-chevron-down")
        document.getElementById("toggleBtn").classList.add("fa-chevron-up")
        return visibility = 1;
    }
}