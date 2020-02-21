function openProject(evt, projectName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("project");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-bottombar", "");
  }
  document.getElementById(projectName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-bottombar";
}

