var index = 0;
var mssg = "junior software developer";
var tagline = document.getElementById("roles");
tagline.innerHTML = "";

async function typewriter(mssg, index) {
    setTimeout(function () {
        tagline.innerHTML += mssg[index];
        index++;
        if (index < mssg.length) {
            typewriter(mssg, index)
        };
    }, 50);

}

function displayRoles() {
    typewriter(mssg, index);
}

displayRoles();
