// Add friend feature
var istatus = document.querySelector("h5");
var actionButton = document.querySelector("#add");

actionButton.addEventListener("click", function () {
    if (actionButton.textContent === "Add Friend") {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        actionButton.textContent = "Remove";
    } else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        actionButton.textContent = "Add Friend";
    }
});
