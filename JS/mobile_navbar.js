$(document).ready(function () {
    //Au clic sur le menu hamburger
    $('.mobile-nav-button').on('click', function() {
      // Toggle d'une class sur le bouton menu button pour transformer le menu hamburger en croix
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");  
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");  

      // Toggle d'une classe qui fait glisser le menu à l'écran
        $('.mobile-menu').toggleClass('mobile-menu--open');
        
        return false;
    });
    //Au clic sur l'un des élémenats du menu
    $('.mobile-menu-item').on('click', function () {
      //Toggle à nouveau de la classe pour faire réapparaître le menu hamburger
      $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
      $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");  
      $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");  
      
      //Fermeture du menu mobile
      $('.mobile-menu').toggleClass('mobile-menu--open');

      return false;
    });
});
