function openNav() {
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "inline-block";


    document.getElementById("myNav").style.opacity = "1";
    document.getElementById("myNav").style.visibility = "visible";

    document.getElementById("nav-bar").style.color = "white";
    document.getElementById("nav-bar").style.backgroundColor = "black";

    document.getElementById("body").style.overflow = "hidden";

}

function closeNav() {
    document.getElementById("open").style.display = "inline-block";
    document.getElementById("close").style.display = "none";

    document.getElementById("myNav").style.opacity = "0";
    document.getElementById("myNav").style.visibility = "hidden";

    document.getElementById("nav-bar").style.color = "black";
    document.getElementById("nav-bar").style.backgroundColor = "white";

    document.getElementById("body").style.overflow = "visible";
}
