// START : Navbar fixed on scroll
// ---------------------------------------------------- 
window.onscroll = function() {
   const header = document.querySelector('header');
   const navbarFixed = header.offsetTop;

   console.log(navbarFixed)

   if (window.pageYOffset > navbarFixed ) {
      header.classList.add('navbar-fixed-payna'); 
   } else {
      header.classList.remove('navbar-fixed-payna');
   }
}
// END : Navbar fixed on scroll
// ---------------------------------------------------- 