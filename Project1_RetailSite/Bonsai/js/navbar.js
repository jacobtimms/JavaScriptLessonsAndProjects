/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

let navOpen = 0;
function toggleNav() {
  if (navOpen === 0) {
    navOpen = 1;
    openNav();
  } else if (navOpen === 1) {
    navOpen = 0;
    closeNav();
  }
}