var ListVisibility;
function showList() {
    if (ListVisibility == 1) {
        document.querySelector(".main-list").style.display="none";
        document.getElementById("toggleBtnIcon").classList.add("fa-chevron-down")
        document.getElementById("toggleBtnIcon").classList.remove("fa-chevron-up")
        return ListVisibility = 0;
    }
    else {
        document.querySelector(".main-list").style.display="block";
        document.getElementById("toggleBtnIcon").classList.remove("fa-chevron-down")
        document.getElementById("toggleBtnIcon").classList.add("fa-chevron-up")
        return ListVisibility = 1;
    }
}

var ProjectsVisibility;
function showProjects() {
    if (ProjectsVisibility == 1) {
        document.querySelector(".projects-div").style.display="none";
        return ListVisibility = 0;
    }
    else {
        document.querySelector(".projects-div").style.display="flex";
        return ListVisibility = 1;
    }
}