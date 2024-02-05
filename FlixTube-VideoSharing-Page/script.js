

var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");


// Side Bar , large container
menuIcon.onclick = function() {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}




// User pic Drop down menu
let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu"); 
}



// Show more Drop down
let showMenu = document.getElementById("showMenu");

function showMoreMenu(){
    showMenu.classList.toggle("show-menu");
}



    // Home button 
function goToHome() {
    window.location.href = index.html
}



        // Disable back button
// history.pushState(null, null, document.title);
// window.addEventListener('popstate', function () {
//     history.pushState(null, null, document.title);
// });