window.addEventListener("click", e => {
    /*
    Checks if a mouse click occurs on an element that's not the side bar. If true,
    then close the sidebar. Returns nothing.
    */
    var sidebar = document.getElementById("sb");
    var menuButton = document.getElementById("menu");
    if (sidebar.style.width == "50%") {
        if (!sidebar.contains(e.target) && !menuButton.contains(e.target)) {
        slideClose();
        }
    }
})

function slideOpen() {
    /*
    Opens the sidebar with animation. Returns nothing.
    */
    var sidebar = document.getElementById("sb");
    sidebar.style.setProperty("-webkit-transition", "0.5s");
    sidebar.style.setProperty("-moz-transition", "0.5s");
    sidebar.style.setProperty("-ms-transition", "0.5s");
    sidebar.style.setProperty("-o-transition", "0.5s");
    sidebar.style.transition = "0.5s";
    sidebar.style.width = "50%";
}

function slideClose() {
    /*
    closes the sidebar with animation. Returns nothing.
    */
    var sidebar = document.getElementById("sb");
    sidebar.style.setProperty("-webkit-transition", "0.5s");
    sidebar.style.setProperty("-moz-transition", "0.5s");
    sidebar.style.setProperty("-ms-transition", "0.5s");
    sidebar.style.setProperty("-o-transition", "0.5s");
    sidebar.style.transition = "0.5s";
    sidebar.style.width = "0px";
}
