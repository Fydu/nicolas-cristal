var visibility;
function showList() {
    if (visibility == 1) {
        document.querySelector(".main-list").style.display="none";
        document.getElementById("toggleBtnIcon").classList.add("fa-chevron-down")
        document.getElementById("toggleBtnIcon").classList.remove("fa-chevron-up")
        return visibility = 0;
    }
    else {
        document.querySelector(".main-list").style.display="block";
        document.getElementById("toggleBtnIcon").classList.remove("fa-chevron-down")
        document.getElementById("toggleBtnIcon").classList.add("fa-chevron-up")
        return visibility = 1;
    }
}