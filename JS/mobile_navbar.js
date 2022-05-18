$(document).ready(function () {
  //Au clic sur le menu
  $('.mobile-nav-button').on('click', function() {
    // Toggle d'une classe qui fait glisser le menu à l'écran
    $('.mobile-menu').toggleClass('mobile-menu--open');
    
    //changement du bouton
    $('.mobile-nav-button').css('display', 'none');
    $('.mobile-nav-fermer').css('display', 'block');
  
    //au clic sur l'un des éléments du menu, le menu se ferme et le bouton change à nouveau
    $('.mobile-menu-item').on('click', function () {
      $('.mobile-menu').toggleClass('mobile-menu--open');
      $('.mobile-nav-button').css('display', 'block');
      $('.mobile-nav-fermer').css('display', 'none');
    });
  });


  //Si on clique sur fermer directement
  $('.mobile-nav-fermer').on('click', function () {
    $('.mobile-menu').toggleClass('mobile-menu--open');
    $('.mobile-nav-button').css('display', 'block');
    $('.mobile-nav-fermer').css('display', 'none');
  });
});



