document
    .getElementById("contactme")
    .addEventListener("click", function (event) {
      event.preventDefault();
      alert("Thank you for visiting my profile🙏!");
  });


/*project*/
function toggleProjectDetails(projectId) {
    var projectDetails = document.getElementById(projectId);
    if (projectDetails.style.display === "none") {
        projectDetails.style.display = "block";
    } else {
        projectDetails.style.display = "none";
    }
}
